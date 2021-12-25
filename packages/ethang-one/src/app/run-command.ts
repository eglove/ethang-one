#!/usr/bin/env node
import colors from 'colors';
import { execSync } from 'node:child_process';

export const runCommand = (command: string): void => {
  console.info(colors.bgBlue(colors.white(`Running command: ${command}`)));
  execSync(command, { stdio: 'inherit' });
};
