#!/usr/bin/env node
import { printText } from '@ethang-one/react-components';
import { execSync, spawn } from 'node:child_process';

export const runCommand = (
  command: string | string[],
  shell?: string
): void => {
  const commandToRun =
    typeof command === 'string' ? command : command.join(' && ');

  printText(`Running command: ${commandToRun}`);
  const childProcess = spawn(commandToRun, {
    shell: shell ?? true,
    stdio: 'inherit',
  });

  process.on('beforeExit', () => {
    childProcess.kill();
  });
};

export const execSyncCommand = (command: string, shell?: string): Buffer => {
  printText(`Running command: ${command}`);

  return execSync(command, { shell });
};
