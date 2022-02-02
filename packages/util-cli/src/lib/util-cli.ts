#!/usr/bin/env node
import chalk from 'chalk';
import { execSync, spawn } from 'node:child_process';

export const runCommand = (
  command: string | string[],
  shell?: string
): void => {
  const commandToRun =
    typeof command === 'string' ? command : command.join(' && ');

  console.info(chalk.bgBlue.white(`Running command: ${commandToRun}`));
  const childProcess = spawn(commandToRun, {
    shell: shell ?? true,
    stdio: 'inherit',
  });

  process.on('beforeExit', () => {
    childProcess.kill();
  });
};

export const execSyncCommand = (command: string, shell?: string): Buffer => {
  console.info(chalk.bgBlue.white(`Running command: ${command}`));

  return execSync(command, { shell });
};
