import { NextApiRequest, NextApiResponse } from 'next';
import * as http from 'node:http';
import { Server } from 'socket.io';

import { getNxProjects } from '../../node/project-info';

type SocketResponse = NextApiResponse & {
  socket?: {
    server?: {
      io: Server;
    };
  };
};

const Socket = (request: NextApiRequest, response: SocketResponse): void => {
  let io = response.socket?.server?.io;
  if (io) {
    console.info('Socket is already running.');
  } else {
    io = new Server(response.socket.server as unknown as http.Server);
    response.socket.server.io = io;

    io.on('connection', socket => {
      socket.on('nx-projects', () => {
        socket.emit('nx-projects', JSON.stringify(getNxProjects()));
      });
    });
  }

  response.end();
};

export default Socket;
