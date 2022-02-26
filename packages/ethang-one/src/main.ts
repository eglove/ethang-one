#!/usr/bin/env node
import inquirer, { Separator } from 'inquirer';

import { generateGitHistory } from './app/generate-git-history/generate-git-history';
import { nodeDependencies } from './app/node-dependencies/node-dependencies';
import { prismaBuild } from './app/prisma-build/prisma-build';
import { buildOrRunProjects } from './app/project-management/build-or-run-projects';
import { projectManagement } from './app/project-management/project-management';
import { projectsManagement } from './app/projects-management/projects-management';

export const packageManager = 'npx pnpm';
export const packageManagerInstallAll = `${packageManager} i`;
export const packageManagerAdd = packageManagerInstallAll;
export const packageManagerRemove = `${packageManager} remove`;

enum Option {
  exit = 'Exit',
  buildOrRunProjectCommand = 'Build or Run Project(s)',
  generateHistory = 'Generate Git History',
  projectManagementCommand = 'Project Generate (New Component, New Page, etc.)',
  nodeDependenciesCommand = 'Manage NPM dependencies.',
  projectsManagementCommand = 'Manage Project List (Create New, Remove)',
  prismaBuild = 'Introspect Databases, Generate Prisma Stuff',
}

async function runEthanGOne(): Promise<void> {
  const { option } = await inquirer.prompt<{ option: string }>([
    {
      choices: [
        { name: Option.buildOrRunProjectCommand },
        { name: Option.projectManagementCommand },
        { name: Option.nodeDependenciesCommand },
        { name: Option.projectsManagementCommand },
        { name: Option.prismaBuild },
        { name: Option.generateHistory },
        new Separator(),
        { name: Option.exit },
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

    case Option.prismaBuild: {
      prismaBuild();
      break;
    }

    case Option.generateHistory: {
      generateGitHistory();
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
