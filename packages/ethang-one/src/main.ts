#!/usr/bin/env node
import inquirer from 'inquirer';

import { nodeDependencies } from './app/node-dependencies/node-dependencies';
import { projectManagement } from './app/project-management/project-management';

export const packageManager = 'corepack pnpm';
export const packageManagerInstallAll = `${packageManager} i`;
export const packageManagerAdd = packageManagerInstallAll;
export const packageManagerRemove = `${packageManager} remove`;

enum Option {
  nodeDependenciesCommand = `Manage NPM dependencies.`,
  projectManagementCommand = 'Manage Projects',
}

async function runEthanGOne(): Promise<void> {
  const { option } = await inquirer.prompt<{ option: Option }>([
    {
      choices: [
        { name: Option.nodeDependenciesCommand },
        { name: Option.projectManagementCommand },
      ],
      message: 'Choose an option:',
      name: 'option',
      type: 'list',
    },
  ]);

  switch (option) {
    case Option.nodeDependenciesCommand: {
      await nodeDependencies();
      break;
    }

    case Option.projectManagementCommand: {
      await projectManagement();
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
