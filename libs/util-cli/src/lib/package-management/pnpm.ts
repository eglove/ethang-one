import { runShellAsync, ShellCallbacks } from '../shell/shell';

export const dependencyInstallStrings = {
  install: 'i',
  installDevelopment: 'i -D',
  uninstall: 'un',
  update: 'up -i',
  updateLatest: 'up -i --latest',
};

interface DependencyCommand {
  callbacks?: ShellCallbacks;
  dependencies?: string | string[];
  dependencyDelimiter?: string;
  type: keyof typeof dependencyInstallStrings;
}

export const DEPENDENCY_MANAGER_INIT = 'npx --yes pnpm';

export const Pnpm = {
  async dependencyCommand({
    callbacks,
    dependencyDelimiter = ' ',
    dependencies,
    type,
  }: DependencyCommand): Promise<void> {
    if (
      type !== 'update' &&
      type !== 'updateLatest' &&
      typeof dependencies === 'undefined'
    ) {
      throw new Error('Must specify dependencies.');
    }

    const dependencyString = Array.isArray(dependencies)
      ? dependencies?.join(' ')
      : dependencies?.split(dependencyDelimiter).join(' ') ?? '';

    runShellAsync({
      callbacks,
      command: `${DEPENDENCY_MANAGER_INIT} ${dependencyInstallStrings[type]} ${dependencyString}`,
    });
  },
};
