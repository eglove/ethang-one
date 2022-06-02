import { exec, spawn } from 'node:child_process';

interface ShellCallbacks {
  onStdout?: (stdout: string) => void;
  onError?: (stderr: string) => void;
  onCode?: (code: number) => void;
}

export const runShellAsync = (
  command: string,
  callbacks?: ShellCallbacks
): void => {
  const commandArray = command.split(' ');
  const process = spawn(commandArray[0], commandArray.splice(1));

  process.stdout.on('data', (data: Buffer) => {
    if (typeof callbacks?.onStdout !== 'undefined') {
      callbacks.onStdout(data.toString('utf8'));
    }
  });

  process.stderr.on('data', (data: Buffer) => {
    if (typeof callbacks?.onError !== 'undefined') {
      callbacks.onError(data.toString());
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

export const runShellSync = (
  command: string,
  callbacks?: ShellCallbacks
): void => {
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
