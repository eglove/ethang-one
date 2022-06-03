import { PORT } from '@ethang/node-environment';
import { websocketEvent } from '@ethang/types';
import { runShellAsync } from '@ethang/util-cli';
import express from 'express';
import * as http from 'node:http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket: Socket) => {
  socket.on(websocketEvent.runCommand, (command: string) => {
    runShellAsync(command, {
      onError(error: string): void {
        socket.emit(websocketEvent.shellMessage, error);
      },
      onStdout(stdout: string): void {
        socket.emit(websocketEvent.shellMessage, stdout);
      },
    });
  });
});

server.listen(PORT.localWebsocket, () => {
  console.info(`🚀 Ready on http://localhost:${PORT.localWebsocket}`);
});
