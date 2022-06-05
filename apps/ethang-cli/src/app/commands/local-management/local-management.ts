import { runShellAsync } from '@ethang/util-cli';

import { startCli } from '../../start-cli';
import { getChoice } from '../../util/commands';

export const localManagement = async (): Promise<void> => {
  const choices = {
    chocoUpdate: 'Choco Update All',
    openWebstorm: 'Open EthanG-One In Webstorm',
  };

  const choice = await getChoice({
    choices,
    message: 'Choose an Option',
  });

  if (choice === choices.chocoUpdate) {
    runShellAsync({
      callbacks: {
        onCode: startCli,
      },
      command: 'choco upgrade all',
    });
  } else if (choice === choices.openWebstorm) {
    runShellAsync({
      callbacks: {
        onCode: startCli,
      },
      command: 'webstorm . ',
    });
  }
};
