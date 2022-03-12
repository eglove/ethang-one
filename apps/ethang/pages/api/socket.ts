import { NextApiRequest, NextApiResponse } from 'next';
import * as http from 'node:http';
import { Server } from 'socket.io';

import { onScript, onTerminal } from '../../node/project-runner';

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
      onScript(socket);
      onTerminal(socket);
    });
  }

  response.end();
};

export default Socket;
