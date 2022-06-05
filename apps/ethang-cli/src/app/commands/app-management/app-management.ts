import { nrwlWorker, NxCommand, ProjectType } from '@ethang/nrwl-utils';

import {
  getChoice,
  getChoices,
  stringArrayToChoices,
} from '../../util/commands';

export const appManagement = async (): Promise<void> => {
  const nrwl = await nrwlWorker();

  const projectChoices: Record<string, string> = {};

  for (const projectName of nrwl.projectNames(ProjectType.app)) {
    projectChoices[projectName] = projectName;
  }

  const appChoices = await getChoices({
    choices: projectChoices,
    message: 'Choose an App',
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
