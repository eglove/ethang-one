#!/usr/bin/env node
import colors from 'colors';
import {spawn} from 'node:child_process';

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
