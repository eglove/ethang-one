export const browsersListUpdate = (): string => {
  return 'npx pnpm browserslist --update-db';
};

export const buildCrossEnvironmentCommand = (commands: string[]): string => {
  let command = 'npx --yes cross-env';

  for (const [index, command_] of commands.entries()) {
    command += index === 0 ? ` ${command_}` : ` && ${command_}`;
  }

  return command;
};
