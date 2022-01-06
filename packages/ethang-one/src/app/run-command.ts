#!/usr/bin/env node
import colors from 'colors';
import {execSync, spawn} from 'node:child_process';

export const runCommand = (command: string): void => {
  console.info(colors.bgBlue(colors.white(`Running command: ${command}`)));

  const childProcess = spawn(command, {
    shell: true,
    stdio: 'inherit',
  });

  process.on('beforeExit', () => {
    childProcess.kill();
  });
};

export const execSyncCommand = (command: string): void => {
  console.info(colors.bgBlue(colors.white(`Running command: ${command}`)));

  execSync(command);
};
