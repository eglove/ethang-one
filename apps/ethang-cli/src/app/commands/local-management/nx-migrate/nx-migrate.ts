import { runShellAsync } from '@ethang/util-cli';

import { startCli } from '../../../start-cli';
import { getChoice, stringArrayToChoices } from '../../../util/commands';

export const nxMigrate = async (): Promise<void> => {
  const yesOrNo = ['Yes', 'No'];

  const runMigrateChoice = await getChoice({
    choices: stringArrayToChoices(yesOrNo),
    message: 'Run migrations after dependency install?',
  });

  runShellAsync({
    callbacks: {
      async onCode(): Promise<void> {
        if (runMigrateChoice === 'Yes') {
          // todo migration command
        } else {
          await startCli();
        }
      },
    },
    command: 'npx --yes pnpm install --no-frozen-lockfile',
  });
};
