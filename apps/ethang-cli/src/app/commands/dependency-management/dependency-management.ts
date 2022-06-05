import { dependencyInstallStrings, Pnpm } from '@ethang/util-cli';

import { startCli } from '../../start-cli';
import { getChoice, getInput } from '../../util/commands';

export const dependencyManagement = async (): Promise<void> => {
  const installOptions: Record<string, string> = {};
  for (const string of Object.keys(dependencyInstallStrings)) {
    installOptions[string] = string;
  }

  const installOption = (await getChoice({
    choices: installOptions,
    message: 'Choose an Option',
  })) as keyof typeof dependencyInstallStrings;

  let dependencies: string;
  if (installOption !== 'update' && installOption !== 'updateLatest') {
    dependencies = await getInput('Enter space delimited dependencies:');
  }

  await Pnpm.dependencyCommand({
    callbacks: {
      async onCode() {
        await startCli();
      },
    },
    // @ts-expect-error May be undefined
    dependencies,
    type: installOption,
  });
};
