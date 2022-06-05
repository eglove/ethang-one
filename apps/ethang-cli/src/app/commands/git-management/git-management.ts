import { NxCommand } from '@ethang/nrwl-utils';
import {
  browsersListUpdate,
  buildCrossEnvironmentCommand,
  gitCommand,
  runShellAsync,
} from '@ethang/util-cli';

import { startCli } from '../../start-cli';
import { getChoice } from '../../util/commands';

export const gitManagement = async (): Promise<void> => {
  const choices = {
    addAllCommit: 'Add All and Commit',
    addAllCommitPush: 'Add All, Commit, and Push',
  };

  const choice = await getChoice({
    choices,
    message: 'Choose an Option',
  });

  let command = '';
  if (choice === choices.addAllCommit) {
    command = buildCrossEnvironmentCommand([
      gitCommand.add(),
      browsersListUpdate(),
      NxCommand.LINT_AFFECTED,
      gitCommand.commit(),
    ]);
  } else if (choice === choices.addAllCommitPush) {
    command = buildCrossEnvironmentCommand([
      gitCommand.add(),
      browsersListUpdate(),
      NxCommand.LINT_AFFECTED,
      gitCommand.commit(),
      NxCommand.BUILD_AFFECTED,
      NxCommand.TEST_AFFECTED,
      NxCommand.E2E_AFFECTED,
    ]);
  }

  runShellAsync({
    callbacks: {
      onCode: startCli,
    },
    command,
  });
};
