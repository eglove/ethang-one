import { DEPENDENCY_MANAGER_INIT } from '../package-management/pnpm';

export const browsersListUpdate = (): string => {
  return `${DEPENDENCY_MANAGER_INIT} browserslist --update-db`;
};

export const buildCrossEnvironmentCommand = (commands: string[]): string => {
  let command = 'npx --yes cross-env';

  for (const [index, command_] of commands.entries()) {
    command += index === 0 ? ` ${command_}` : ` && ${command_}`;
  }

  return command;
};
