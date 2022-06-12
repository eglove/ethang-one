import { exec, spawn, SpawnOptions } from 'node:child_process';

import { ShellColor } from './colors';

export interface ShellCallbacks {
  onCode?: (code: number) => void;
  onError?: (stderr: string) => void;
  onStdout?: (stdout: string) => void;
}

export interface ShellParameters {
  callbacks?: ShellCallbacks;
  command: string;
  hideCommandPrintout?: boolean;
  spawnOptions?: SpawnOptions;
}

const defaultSpawnOptions: SpawnOptions = {
  shell: true,
  stdio: 'inherit',
};

export const runShellAsync = ({
  command,
  callbacks,
  hideCommandPrintout = false,
  spawnOptions = defaultSpawnOptions,
}: ShellParameters): void => {
  if (!hideCommandPrintout) {
    console.info(`${ShellColor.BgBlue}${ShellColor.FgWhite}`, command);
  }

  const process = spawn(command, spawnOptions);

  process.stdout?.on('data', (data: Buffer) => {
    if (typeof callbacks?.onStdout !== 'undefined') {
      callbacks.onStdout(data.toString('utf8'));
    }
  });

  process.stderr?.on('data', (data: Buffer) => {
    if (typeof callbacks?.onError !== 'undefined') {
      callbacks.onError(data.toString('utf8'));
    }
  });

  process.on('error', (error: Error) => {
    if (typeof callbacks?.onError !== 'undefined') {
      callbacks.onError(error.message);
    }
  });

  if (typeof callbacks?.onCode !== 'undefined') {
    process.on('close', callbacks.onCode);
  }
};

export const runShellSync = ({ command, callbacks }: ShellParameters): void => {
  exec(command, (error, stdout, stderr) => {
    if (typeof callbacks?.onStdout !== 'undefined') {
      callbacks?.onStdout(stdout);
    }

    if (typeof callbacks?.onError !== 'undefined') {
      callbacks?.onError(stderr);
      callbacks?.onError(error?.message ?? 'An unknown error ocurred.');
    }
  });
};
