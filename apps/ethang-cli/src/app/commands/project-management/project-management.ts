import { nrwlWorker, NxCommand } from '@ethang/nrwl-utils';

import { startCli } from '../../start-cli';
import {
  getChoice,
  getChoices,
  stringArrayToChoices,
} from '../../util/commands';

export const projectManagement = async (): Promise<void> => {
  const nrwl = await nrwlWorker();

  const actionChoices = {
    remove: 'Remove Projects',
  };

  const projectChoices = await getChoices({
    choices: stringArrayToChoices(nrwl.projectNames()),
    message: 'Choose Projects',
  });

  const actionChoice = await getChoice({
    choices: actionChoices,
    message: 'Choose an Action',
  });

  const confirmChoice = await getChoice({
    choices: stringArrayToChoices(['Yes', 'No']),
    message: `This will delete the following projects, are you sure? ${projectChoices.join(
      ', '
    )}`,
  });

  if (confirmChoice === 'Yes') {
    const nxCommand = new NxCommand({
      onClose: startCli,
      projectNames: projectChoices,
    });

    if (actionChoice === actionChoices.remove) {
      await nxCommand.removeMany();
    }
  }
};
