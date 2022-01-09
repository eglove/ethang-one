import { runCommand } from '@ethang-one/util-cli';
import {
  addDays,
  arrayOfDaysBetweenDays,
  humanReadableLocalDateTime,
} from '@ethang-one/util-typescript';

export const generateGitHistory = (): void => {
  const historyFolder = './assets/fake-history';
  const endDate = new Date();
  const startDate = addDays(endDate, -365);

  const commitList = arrayOfDaysBetweenDays({ endDate, startDate });

  process.chdir(historyFolder);

  for (const date of commitList) {
    const formattedDate = humanReadableLocalDateTime(date);

    runCommand([
      `echo "${formattedDate}" > fake-history.txt`,
      'git add fake-history.txt',
      `git commit --quiet --date "${formattedDate}" -m "fake commit" --no-verify`,
    ]);
  }
};
