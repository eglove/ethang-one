import { action, makeAutoObservable, observable } from 'mobx';
import { createContext } from 'react';
import io, { Socket } from 'socket.io-client';

import { PORT } from '../../../ports';

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${PORT.ethang}`
    : 'https://ethang.dev';

export class SocketStore {
  @observable private _socket: Socket;

  constructor() {
    makeAutoObservable(this);
    void this.initializeSocket();
  }

  @action initializeSocket = async (): Promise<void> => {
    if (!this.socket) {
      await fetch(`${baseUrl}/api/socket`);
      this.socket = io();
    }
  };

  @action sendTerminalMessage = (command: string): void => {
    if (this.socket) {
      this.socket.emit('terminal', command);
    }
  };

  get socket(): Socket {
    return this._socket;
  }

  @action set socket(value: Socket) {
    this._socket = value;
  }
}

// @ts-expect-error This will be created on provider.
export const SocketContext = createContext<SocketStore>();
