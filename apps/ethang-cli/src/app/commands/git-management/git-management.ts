import { NxCommand } from '@ethang/nrwl-utils';
import {
  browsersListLint,
  browsersListUpdate,
  buildCrossEnvironmentCommand,
  gitCommand,
  runShellAsync,
} from '@ethang/util-cli';

import { startCli } from '../../start-cli';
import { getChoice, getInput } from '../../util/commands';

const preCommitCommands = [browsersListUpdate(), NxCommand.LINT_AFFECTED];
const postCommitCommands = [
  NxCommand.BUILD_AFFECTED,
  NxCommand.TEST_AFFECTED,
  NxCommand.E2E_AFFECTED,
  'npx --yes snyk test',
];

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
    const commitMessage = await getInput('Enter a commit message:');

    command = buildCrossEnvironmentCommand([
      gitCommand.add(),
      ...preCommitCommands,
      gitCommand.commit(`"${commitMessage}"`),
    ]);
  } else if (choice === choices.addAllCommitPush) {
    const commitMessage = await getInput('Enter a commit message:');

    command = buildCrossEnvironmentCommand([
      gitCommand.add(),
      ...preCommitCommands,
      gitCommand.commit(`"${commitMessage}"`),
      ...postCommitCommands,
      gitCommand.push(),
    ]);
  }

  runShellAsync({
    callbacks: {
      onCode: startCli,
    },
    command,
  });
};
