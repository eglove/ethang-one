#!/usr/bin/env node
import { execSync, spawn } from 'node:child_process';

export const runCommand = (
  command: string | string[],
  shell = 'pwsh'
): void => {
  const commandToRun =
    typeof command === 'string' ? command : command.join(' && ');

  console.log(`Running command: ${commandToRun}`);
  const childProcess = spawn(commandToRun, {
    shell: shell ?? true,
    stdio: 'inherit',
  });

  process.on('beforeExit', () => {
    childProcess.kill();
  });
};

export const execSyncCommand = (command: string, shell = 'pwsh'): Buffer => {
  console.log(`Running command: ${command}`);

  return execSync(command, { shell });
};
