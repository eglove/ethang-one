#!/usr/bin/env node
import colors from 'colors';
import { execSync, spawn } from 'node:child_process';

export const runCommand = (
  command: string | string[],
  shell?: string
): void => {
  const commandToRun =
    typeof command === 'string' ? command : command.join(' && ');

  console.info(colors.bgBlue(colors.white(`Running command: ${commandToRun}`)));
  const childProcess = spawn(commandToRun, {
    shell: shell ?? true,
    stdio: 'inherit',
  });

  process.on('beforeExit', () => {
    childProcess.kill();
  });
};

export const execSyncCommand = (command: string, shell?: string): Buffer => {
  console.info(colors.bgBlue(colors.white(`Running command: ${command}`)));

  return execSync(command, { shell });
};
