import { getChoice } from '../../util/commands';
import { appGenerate } from './app-generate';
import { appRun } from './app-run';

export const appManagement = async (): Promise<void> => {
  const appActionChoices = {
    generate: 'Generate Script',
    run: 'Run Script',
  };

  const actionChoice = await getChoice({
    choices: appActionChoices,
    message: 'Choose an Action',
  });

  if (actionChoice === appActionChoices.generate) {
    await appGenerate();
  } else if (actionChoice === appActionChoices.run) {
    await appRun();
  }
};
