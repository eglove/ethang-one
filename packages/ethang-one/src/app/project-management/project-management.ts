#!/usr/bin/env node

import inquirer from 'inquirer';
import { execSync } from 'node:child_process';

import { packageManager } from '../../main';
import { runCommand } from '../run-command';
import { UtilNrwl } from '../util-nrwl/util-nrwl';

export const projectManagement = async (): Promise<void> => {
  const nrwl = new UtilNrwl();
  await nrwl.setup();
  const projectNames = nrwl.projectNames();

  const { project } = await inquirer.prompt<{ project: string }>([
    {
      choices: projectNames.filter(
        project => nrwl.findProject(project)?.data.generators
      ),
      message: 'Choose a project:',
      name: 'project',
      type: 'list',
    },
  ]);

  const { generator } = await inquirer.prompt<{ generator: string }>([
    {
      choices: Object.keys(nrwl.findProject(project)?.data.generators),
      message: 'Choose a generator:',
      name: 'generator',
      type: 'list',
    },
  ]);

  const { name } = await inquirer.prompt<{ name: string }>([
    {
      message: 'Enter a name:',
      name: 'name',
      type: 'input',
    },
  ]);

  runCommand(
    `${packageManager} nx g ${generator} --project=${project} --name=${name} --dryRun`
  );

  const { confirm } = await inquirer.prompt<{ confirm: boolean }>([
    {
      message: 'Does this look ok?',
      name: 'confirm',
      type: 'confirm',
    },
  ]);

  if (confirm) {
    execSync(
      `${packageManager} nx g ${generator} --project=${project} --name=${name}`
    );
  } else {
    projectManagement().catch((error: Error) => {
      console.error(error);
    });
  }
};
