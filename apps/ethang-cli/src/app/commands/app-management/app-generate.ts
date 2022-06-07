import {
  NEW_APP_OPTIONS,
  nrwlWorker,
  NxCommand,
  projectPlugins,
  ProjectType,
} from '@ethang/nrwl-utils';

import { startCli } from '../../start-cli';
import { getChoice, getInput, stringArrayToChoices } from '../../util/commands';

export const appGenerate = async (): Promise<void> => {
  const nrwl = await nrwlWorker();

  const appChoice = await getChoice({
    choices: stringArrayToChoices(nrwl.projectNames(ProjectType.app)),
    message: 'Choose an App',
  });

  const generators = nrwl.projectGenerators(appChoice).filter(generator => {
    return !NEW_APP_OPTIONS.includes(generator);
  });

  const generatorChoice = await getChoice({
    choices: stringArrayToChoices(generators),
    message: 'Choose a Generator',
  });

  const additionalArguments = await getInput(
    'Additional command line arguments. (--directory, --dryRun)'
  );

  const command = new NxCommand({
    onClose: startCli,
  });

  await command.generate(
    projectPlugins[appChoice],
    generatorChoice,
    additionalArguments
  );
};
