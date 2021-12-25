#!/usr/bin/env node
import inquirer from 'inquirer';

import { packageManager } from '../../main';
import { runCommand } from '../run-command';
import { UtilNrwl } from '../util-nrwl/util-nrwl';
import { createProject } from './create-project';

enum Actions {
  createProjectCommand = 'Create Project',
  removeProject = 'Remove Project',
}

export const projectManagement = async (): Promise<void> => {
  const { action } = await inquirer.prompt<{ action: Actions }>([
    {
      choices: [
        { name: Actions.createProjectCommand },
        { name: Actions.removeProject },
      ],
      message: 'Choose Action',
      name: 'action',
      type: 'list',
    },
  ]);

  switch (action) {
    case Actions.createProjectCommand: {
      await createProject();
      break;
    }

    case Actions.removeProject: {
      const nrwl = new UtilNrwl();
      await nrwl.setup();
      const choices: Array<{ name: string }> = nrwl
        .projectNames()
        .map(projectName => {
          return { name: projectName };
        });

      const { removeProject } = await inquirer.prompt<{
        removeProject: string;
      }>([
        {
          choices,
          message: 'Choose a project to remove:',
          name: 'removeProject',
          type: 'list',
        },
      ]);

      const { confirm } = await inquirer.prompt<{ confirm: boolean }>([
        {
          message: `Are you sure you want to remove the project ${removeProject}? (Make sure to check it out first!)`,
          name: 'confirm',
          type: 'confirm',
        },
      ]);

      if (confirm) {
        runCommand(
          `${packageManager} nx g @nrwl/workspace:remove ${removeProject}`
        );
      }

      break;
    }

    default: {
      process.exit(0);
    }
  }
};
