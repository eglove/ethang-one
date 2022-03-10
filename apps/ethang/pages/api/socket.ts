import { sortStringArray } from '@ethang/util-typescript';
import { NextApiRequest, NextApiResponse } from 'next';
import * as http from 'node:http';
import { Server } from 'socket.io';

import { getNxProjects, getProjectTargets } from '../../node/project-info';
import { runPowershellCommands } from '../../node/project-runner';
import { WebsocketKey } from '../../types/websocket';

type SocketResponse = NextApiResponse & {
  socket?: {
    server?: {
      io: Server;
    };
  };
};

const Socket = (request: NextApiRequest, response: SocketResponse): void => {
  let io = response.socket?.server?.io;
  if (typeof io === 'undefined') {
    io = new Server(response.socket.server as unknown as http.Server);
    response.socket.server.io = io;

    io.on('connection', socket => {
      socket.on(WebsocketKey.projectTargets, (projects: string[]) => {
        socket.emit(
          WebsocketKey.projectTargets,
          JSON.stringify(sortStringArray(getProjectTargets(projects)))
        );
      });

      socket.on(WebsocketKey.nxProjects, () => {
        socket.emit(WebsocketKey.nxProjects, JSON.stringify(getNxProjects()));
      });

      socket.on(
        WebsocketKey.runProjects,
        (arguments_: { target: string; projects: string[] }) => {
          const process = runPowershellCommands([
            `npx nx run-many --target=${
              arguments_.target
            } --projects=${arguments_.projects.join(',')}`,
          ]);

          process.stdout.on('data', data => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            socket.emit(WebsocketKey.terminalMessage, data.toString());
          });
        }
      );
    });
  }

  response.end();
};

export default Socket;
