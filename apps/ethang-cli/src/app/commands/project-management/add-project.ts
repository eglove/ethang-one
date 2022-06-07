import { nrwlWorker, NxCommand } from '@ethang/nrwl-utils';

import { startCli } from '../../start-cli';
import { getChoice, stringArrayToChoices } from '../../util/commands';
import { addPlugin } from './add-plugin';

export const addProject = async (): Promise<void> => {
  const nrwl = await nrwlWorker();
  const installed = await nrwl.installedPlugins();

  const choices = ['Install Plugin', ...installed.keys()];

  const generator = await getChoice({
    choices: stringArrayToChoices(choices),
    message: 'Choose a Generator',
  });

  if (generator === 'Install Plugin') {
    await addPlugin();
  } else {
    const appOrLibraryChoices = {
      app: 'application',
      lib: 'library',
    };

    const appOrLibrary = await getChoice({
      choices: appOrLibraryChoices,
      message: 'Choose an Option',
    });

    const command = new NxCommand({
      onClose: startCli,
    });

    await command.generate(generator, appOrLibrary);

    await startCli();
  }
};
