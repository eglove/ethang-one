import { ChildProcessWithoutNullStreams, spawn } from 'node:child_process';

export const runPowershellCommands = (
  commands: string[]
): ChildProcessWithoutNullStreams => {
  return spawn('powershell.exe', commands);
};
