import { execSyncCommand, runCommand } from '@ethang/util-cli';

import { PROJECT_ROOT, Shell } from '../../constants';

export const repoUpdate = (): void => {
  const isGitStatusClean =
    execSyncCommand('git status -s', Shell.pwsh).toString('utf8').length === 0;

  if (isGitStatusClean) {
    execSyncCommand(
      `Add-Content -Path ${PROJECT_ROOT}/src/assets/the-graph.txt "The GitHub contribution graph is a lie."`,
      Shell.pwsh
    );
  }

  const commitMessage = `Automatic Update: ${new Date().toISOString()}`;
  runCommand(
    ['git add .', `git commit -m "${commitMessage}"`, 'git push'],
    Shell.pwsh
  );
};
