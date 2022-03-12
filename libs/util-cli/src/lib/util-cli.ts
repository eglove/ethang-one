#!/usr/bin/env node
import { execSync, spawn } from 'node:child_process';

export const runCommand = (
  command: string | string[],
  shell = 'pwsh'
): void => {
  const commandToRun =
    typeof command === 'string' ? command : command.join(' && ');

  const childProcess = spawn(commandToRun, {
    shell,
  });

  process.on('beforeExit', () => {
    childProcess.kill();
  });
};

export const execSyncCommand = (command: string, shell = 'pwsh'): Buffer => {
  return execSync(command, { shell });
};
