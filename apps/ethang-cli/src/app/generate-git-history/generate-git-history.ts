import { execSyncCommand } from '@ethang/util-cli';
import {
  addDays,
  arrayOfDaysBetweenDays,
  humanReadableLocalDateTime,
} from '@ethang/util-typescript';

export const generateGitHistory = (): void => {
  const historyFolder = './assets/fake-history';
  const endDate = new Date();
  const startDate = addDays(endDate, -365);

  const commitList = arrayOfDaysBetweenDays({ endDate, startDate });

  process.chdir(historyFolder);

  for (const date of commitList) {
    const formattedDate = humanReadableLocalDateTime(date);

    execSyncCommand(
      `echo "The GitHub contribution graph is a lie. ${formattedDate}" > fake-history.txt`
    );
    execSyncCommand('git add fake-history.txt');
    execSyncCommand(
      `git commit --quiet --date "${formattedDate}" -m "fake commit" --no-verify`
    );
  }
};
