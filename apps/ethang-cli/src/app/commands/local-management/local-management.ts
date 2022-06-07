import { runShellAsync, ShellParameters } from '@ethang/util-cli';

import { startCli } from '../../start-cli';
import { getChoice } from '../../util/commands';

export const localManagement = async (): Promise<void> => {
  const choices = {
    chocoUpdate: 'Choco Update All',
    nxMigrate: 'NX Migrate Latest',
    openWebstorm: 'Open EthanG-One In Webstorm',
  };

  const choice = await getChoice({
    choices,
    message: 'Choose an Option',
  });

  const defaultShellParameters: Partial<ShellParameters> = {
    callbacks: {
      onCode: startCli,
    },
  };

  switch (choice) {
    case choices.chocoUpdate: {
      runShellAsync({
        ...defaultShellParameters,
        command: 'choco upgrade all',
      });
      break;
    }

    case choices.nxMigrate: {
      runShellAsync({
        ...defaultShellParameters,
        command: 'npx --yes pnpm nx migrate latest',
      });
      break;
    }

    case choices.openWebstorm: {
      runShellAsync({
        ...defaultShellParameters,
        command: 'webstorm . ',
      });
      break;
    }
    // No default
  }
};
