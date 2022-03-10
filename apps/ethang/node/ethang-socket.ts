import { uuid } from '@ethang/util-typescript';
import * as http from 'node:http';
import { Server, Socket } from 'socket.io';

import { WebsocketKey } from '../types/websocket';
import { getNxProjects } from './project-info';
import { runPowershellCommands } from './project-runner';

export type Message = {
  id: string;
  message: string;
};

export class EthanGSocket {
  public io: Server;
  public socket: Socket;

  constructor(server: http.Server) {
    this.io = new Server(server);

    this.io.on('connection', socket => {
      this.socket = socket;
      this.setListeners();
    });
  }

  setListeners = (): void => {
    this.socket.on(WebsocketKey.projectTargets, (projects: string[]) => {
      this.emit(
        WebsocketKey.projectTargets,
        projects.map(project => {
          return {
            id: uuid(),
            project,
          };
        })
      );
    });

    this.socket.on(WebsocketKey.nxProjects, () => {
      this.emit(WebsocketKey.nxProjects, getNxProjects());
    });

    this.socket.on(
      WebsocketKey.runProjects,
      (arguments_: { target: string; projects: string[] }) => {
        const process = runPowershellCommands([
          `npx nx run-many --target=${
            arguments_.target
          } --projects=${arguments_.projects.join(',')}`,
        ]);

        process.stdout.on('data', data => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          this.emit(WebsocketKey.terminalMessage, data.toString() as string);
        });
      }
    );
  };

  emit = (key: WebsocketKey, message: unknown): void => {
    const emittingMessage: Message = {
      id: uuid(),
      message: JSON.stringify(message),
    };

    this.socket.emit(key, emittingMessage);
  };
}
