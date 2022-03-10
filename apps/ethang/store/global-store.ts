import { action, makeAutoObservable, observable } from 'mobx';
import { createContext } from 'react';
import io, { Socket } from 'socket.io-client';

import { PORT } from '../../../ports';
import { WebsocketKey } from '../types/websocket';

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${PORT.ethang}`
    : 'https://ethang.dev';

export class GlobalStore {
  @observable private _nxProjects?: string[];
  @observable private _projectTargets?: string[];
  @observable private _socket: Socket;
  @observable private _terminalMessages?: string[];

  constructor() {
    makeAutoObservable(this);
    void this.initializeSocket();
  }

  @action initializeSocket = async (): Promise<void> => {
    if (!this.socket) {
      await fetch(`${baseUrl}/api/socket`);
      this.socket = io();

      this.socket.on(WebsocketKey.projectTargets, (message: string) => {
        this.projectTargets = JSON.parse(message) as string[];
      });

      this.socket.on(WebsocketKey.nxProjects, message => {
        this.nxProjects = JSON.parse(message) as string[];
      });

      this.socket.on(WebsocketKey.terminalMessage, (message: string) => {
        this.terminalMessages = [...(this.terminalMessages ?? []), message];
      });
    }
  };

  get nxProjects(): string[] {
    return this._nxProjects;
  }

  @action set nxProjects(value: string[]) {
    this._nxProjects = value;
  }

  get projectTargets(): string[] {
    return this._projectTargets;
  }

  @action set projectTargets(value: string[]) {
    this._projectTargets = value;
  }

  get socket(): Socket {
    return this._socket;
  }

  @action set socket(value: Socket) {
    this._socket = value;
  }

  get terminalMessages(): string[] {
    return this._terminalMessages;
  }

  @action set terminalMessages(value: string[]) {
    this._terminalMessages = value;
  }
}

// @ts-expect-error This will be created on provider.
export const GlobalContext = createContext<GlobalStore>();
