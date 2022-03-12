import { execSyncCommand, runCommand } from '@ethang/util-cli';
import { uuid } from '@ethang/util-typescript';
import { ChildProcessWithoutNullStreams, spawn } from 'node:child_process';
import { Socket } from 'socket.io';

import {
  commandSplitter,
  ETHANG_CLI_ROOT,
  WebsocketKey,
} from '../lib/commands';

export const emitTerminal = (socket: Socket, message: string): void => {
  socket.emit('terminal', {
    id: uuid(),
    message,
  });
};

export const onScript = (socket: Socket): void => {
  socket.on('script', (message: WebsocketKey) => {
    if (message === WebsocketKey.padRepo) {
      const isGitStatusClean =
        execSyncCommand('git status -s').toString('utf8').length === 0;

      if (isGitStatusClean) {
        emitTerminal(socket, 'Git status is clean, adding message.');
        execSyncCommand(
          `Add-Content -Path ${ETHANG_CLI_ROOT}/src/assets/the-graph.txt "The GitHub contribution graph is a lie."`
        );
      }

      const commitMessage = `Automatic Update: ${new Date().toISOString()}`;
      emitTerminal(socket, 'Pushing to Git.');
      runCommand(['git add .', `git commit -m "${commitMessage}"`, 'git push']);
    }
  });
};

export const onTerminal = (socket: Socket): void => {
  socket.on('terminal', (command: string) => {
    const process = runPowershellCommand(
      command.replaceAll(commandSplitter, ' && ')
    );

    process.stdout.on('data', data => {
      emitTerminal(socket, data);
    });

    process.stderr.on('data', data => {
      emitTerminal(socket, data);
    });

    process.on('exit', () => {
      emitTerminal(socket, 'Exiting.');
      process.kill();
    });
  });
};

export const runPowershellCommand = (
  command: string
): ChildProcessWithoutNullStreams => {
  return spawn(command, {
    shell: 'pwsh',
  });
};
