import { buildCrossEnvironmentCommand } from '../npm/npm';

export const gitCommand = {
  add(files?: string[]): string {
    let addString = '.';

    if (Array.isArray(files)) {
      addString = files.join(' ');
    }

    return `git add ${addString}`;
  },
  addAllCommit(message?: string): string {
    return buildCrossEnvironmentCommand([this.add(), this.commit(message)]);
  },
  addAllCommitPush(message?: string): string {
    return buildCrossEnvironmentCommand([
      this.addAllCommit(message),
      this.push(),
    ]);
  },
  commit(message?: string): string {
    let command = `git commit`;

    if (typeof message === 'string') {
      command = `${command} -m ${message}`;
    }

    return command;
  },
  push(): string {
    return 'git push';
  },
};
