import { execSyncCommand, runCommand } from '@ethang/util-cli';
import { uuid } from '@ethang/util-typescript';
import { ChildProcessWithoutNullStreams, spawn } from 'node:child_process';
import { Socket } from 'socket.io';

import {
  commandSplitter,
  ETHANG_CLI_ROOT,
  WebsocketKey,
} from '../lib/commands';

export const onScript = (socket: Socket): void => {
  socket.on('script', (message: WebsocketKey) => {
    if (message === WebsocketKey.padRepo) {
      const isGitStatusClean =
        execSyncCommand('git status -s').toString('utf8').length === 0;

      if (isGitStatusClean) {
        socket.emit('terminal', {
          id: uuid(),
          message: 'Git status is clean, adding message.',
        });
        execSyncCommand(
          `Add-Content -Path ${ETHANG_CLI_ROOT}/src/assets/the-graph.txt "The GitHub contribution graph is a lie."`
        );
      }

      const commitMessage = `Automatic Update: ${new Date().toISOString()}`;
      socket.emit('terminal', {
        id: uuid(),
        message: 'Pushing to Git.',
      });
      runCommand(['git add .', `git commit -m "${commitMessage}"`, 'git push']);
    }
  });
};

export const onTerminal = (socket: Socket): void => {
  const emitData = (data: unknown): void => {
    socket.emit('terminal', {
      id: uuid(),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      message: data.toString() as string,
    });
  };

  socket.on('terminal', (command: string) => {
    const process = runPowershellCommand(
      command.replaceAll(commandSplitter, ' && ')
    );

    process.stdout.on('data', data => {
      emitData(data);
    });

    process.stderr.on('data', data => {
      emitData(data);
    });

    process.on('exit', () => {
      socket.emit('terminal', {
        id: uuid(),
        message: 'Exiting.',
      });
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
