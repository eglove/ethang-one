import { websocketEvent } from '@ethang/types';
import { io, Socket } from 'socket.io-client';

import { PORT } from '../../../../libs/node-environment/src/lib/ports';

export type GlobalStateType = {
  currentShellMessages: string[];
  socket: Socket;
};

export enum GlobalActionEnum {
  addMessage,
  createSocket,
  runCommand,
}

export type GlobalActionType = { payload?: unknown; type: GlobalActionEnum };

export const globalReducer = (
  draft: GlobalStateType,
  action: GlobalActionType
): void => {
  switch (action.type) {
    case GlobalActionEnum.addMessage: {
      if (typeof action.payload !== 'string') {
        throw new TypeError('Payload must be a command of type string.');
      }

      draft.currentShellMessages = [
        ...draft.currentShellMessages,
        action.payload,
      ];
      return;
    }

    case GlobalActionEnum.createSocket: {
      draft.socket = io(`http://localhost:${PORT.localWebsocket}`);
      return;
    }

    case GlobalActionEnum.runCommand: {
      if (typeof action.payload !== 'string') {
        throw new TypeError('Payload must be a command of type string.');
      }

      draft.currentShellMessages = [];

      draft.socket.emit(websocketEvent.runCommand, action.payload);
      return;
    }

    default: {
      throw new Error('action.type must be a typeof GlobalActionEnum');
    }
  }
};
