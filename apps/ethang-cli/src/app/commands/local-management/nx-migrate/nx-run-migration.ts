import { DEPENDENCY_MANAGER_INIT, runShellAsync } from '@ethang/util-cli';

import { startCli } from '../../../start-cli';
import { getChoice, stringArrayToChoices } from '../../../util/commands';

export const nxRunMigration = async (): Promise<void> => {
  const yesOrNo = ['Yes', 'No'];
  let command = '';

  const installDependenciesChoice = await getChoice({
    choices: stringArrayToChoices(yesOrNo),
    message: 'Install dependencies?',
  });

  if (installDependenciesChoice === yesOrNo[0]) {
    command = `${DEPENDENCY_MANAGER_INIT} install --no-frozen-lockfile`;
  }

  const runMigrateChoice = await getChoice({
    choices: stringArrayToChoices(yesOrNo),
    message: 'Run migrations?',
  });

  if (runMigrateChoice === yesOrNo[0]) {
    const migrationCommand = `${DEPENDENCY_MANAGER_INIT} nx migrate --run-migrations`;

    command =
      command === '' ? migrationCommand : `${command} && ${migrationCommand}`;
  }

  runShellAsync({
    callbacks: {
      onCode: startCli,
    },
    command,
  });
};
