import { nrwlWorker, NxCommand, ProjectType } from '@ethang/nrwl-utils';

import {
  getChoice,
  getChoices,
  stringArrayToChoices,
} from '../../util/commands';

export const appRun = async (): Promise<void> => {
  const nrwl = await nrwlWorker();

  const appChoices = await getChoices({
    choices: stringArrayToChoices(nrwl.projectNames(ProjectType.app)),
    message: 'Choose Apps',
  });

  const targetChoice = await getChoice({
    choices: stringArrayToChoices(nrwl.projectsUniqueTargets(appChoices)),
    message: 'Choose a Target',
  });

  const nxCommand = new NxCommand({
    projectNames: appChoices,
    target: targetChoice,
  });

  await nxCommand.runMany();
};
