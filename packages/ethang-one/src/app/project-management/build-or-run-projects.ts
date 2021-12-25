import inquirer from 'inquirer';

import { packageManager } from '../../main';
import { runCommand } from '../run-command';
import { UtilNrwl } from '../util-nrwl/util-nrwl';

export const buildOrRunProjects = async (): Promise<void> => {
  const nrwl = new UtilNrwl();
  await nrwl.setup();

  const targets = nrwl.projectNodes?.map(project => {
    return Object.keys(project.data.targets);
  });
  const uniqueTargets = [...new Set(targets?.flat())];

  const { target } = await inquirer.prompt<{ target: string }>([
    {
      choices: uniqueTargets,
      message: 'Choose Target',
      name: 'target',
      type: 'list',
    },
  ]);

  const { projects } = await inquirer.prompt<{
    projects: string[];
    target: string;
  }>([
    {
      choices: nrwl.projectNames().filter(project => {
        return (
          Object.keys(nrwl.findProject(project)?.data.targets).includes(
            target
          ) && project !== 'ethang-one'
        );
      }),
      message: 'Choose Project(s)',
      name: 'projects',
      type: 'checkbox',
    },
  ]);

  runCommand(
    `${packageManager} nx run-many --target=${target} ---projects=${projects.join(
      ','
    )}`
  );
};
