import { action, makeAutoObservable, observable } from 'mobx';
import { createContext } from 'react';
import io, { Socket } from 'socket.io-client';

export class GlobalStore {
  @observable private _nxProjects?: string[];
  @observable private _socket: Socket;

  constructor() {
    makeAutoObservable(this);
    void this.initializeSocket();
  }

  @action initializeSocket = async (): Promise<void> => {
    if (!this.socket) {
      await fetch('/api/socket');
      this.socket = io();

      this.socket.on('nx-projects', message => {
        this.nxProjects = JSON.parse(message) as string[];
      });
    }
  };

  get nxProjects(): string[] {
    return this._nxProjects;
  }

  @action set nxProjects(value: string[]) {
    this._nxProjects = value;
  }

  get socket(): Socket {
    return this._socket;
  }

  @action set socket(value: Socket) {
    this._socket = value;
  }
}

// @ts-expect-error This will be created on provider.
export const GlobalContext = createContext<GlobalStore>();
