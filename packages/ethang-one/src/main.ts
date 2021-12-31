#!/usr/bin/env node
import inquirer, {Separator} from 'inquirer';

import {nodeDependencies} from './app/node-dependencies/node-dependencies';
import {buildOrRunProjects} from './app/project-management/build-or-run-projects';
import {projectManagement} from './app/project-management/project-management';
import {projectsManagement} from './app/projects-management/projects-management';

export const packageManager = 'npx pnpm';
export const packageManagerInstallAll = `${packageManager} i`;
export const packageManagerAdd = packageManagerInstallAll;
export const packageManagerRemove = `${packageManager} remove`;

enum Option {
  exit = 'Exit',
  buildOrRunProjectCommand = 'Build or Run Project(s)',
  projectManagementCommand = 'Project Generate (New Component, New Page, etc.)',
  nodeDependenciesCommand = 'Manage NPM dependencies.',
  projectsManagementCommand = 'Manage Project List (Create New, Remove)',
}

async function runEthanGOne(): Promise<void> {
  const {option} = await inquirer.prompt<{option: Option}>([
    {
      choices: [
        {name: Option.buildOrRunProjectCommand},
        {name: Option.projectManagementCommand},
        {name: Option.nodeDependenciesCommand},
        {name: Option.projectsManagementCommand},
        new Separator(),
        {name: Option.exit},
      ],
      message: 'Choose an option:',
      name: 'option',
      type: 'list',
    },
  ]);

  switch (option) {
    case Option.buildOrRunProjectCommand: {
      await buildOrRunProjects();
      break;
    }

    case Option.projectManagementCommand: {
      await projectManagement();
      break;
    }

    case Option.nodeDependenciesCommand: {
      await nodeDependencies();
      break;
    }

    case Option.projectsManagementCommand: {
      await projectsManagement();
      break;
    }

    default: {
      process.exit(0);
    }
  }
}

runEthanGOne().catch((error: Error) => {
  console.error(error);
});

export default runEthanGOne;
