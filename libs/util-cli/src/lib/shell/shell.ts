import { exec, spawn, SpawnOptions } from 'node:child_process';

export interface ShellCallbacks {
  onStdout?: (stdout: string) => void;
  onError?: (stderr: string) => void;
  onCode?: (code: number) => void;
}

interface ShellParameters {
  command: string;
  callbacks?: ShellCallbacks;
  spawnOptions?: SpawnOptions;
}

const defaultSpawnOptions: SpawnOptions = {
  shell: true,
  stdio: 'inherit',
};

export const runShellAsync = ({
  command,
  callbacks,
  spawnOptions = defaultSpawnOptions,
}: ShellParameters): void => {
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
