#!/usr/bin/env node

import inquirer from 'inquirer';
import { execSync } from 'node:child_process';

import {
  packageManager,
  packageManagerAdd,
  packageManagerInstallAll,
  packageManagerRemove,
} from '../../main';
import { runCommand } from '../run-command';

enum Option {
  add = 'Add New Dependenc(y|ies)',
  install = 'Install Dependencies',
  remove = 'Remove Dependenc(y|ies)',
}

enum Type {
  development = 'Development',
  production = 'Production',
}

interface DependencyObject {
  dependencies: Record<string, Dependency>;
  devDependencies: Record<string, Dependency>;
  name: string;
  path: string;
  unsavedDependencies: Record<string, Dependency>;
  version: string;
}

interface Dependency {
  from: string;
  resolved: string;
  version: string;
}

export const nodeDependencies = async (): Promise<void> => {
  const { choice } = await inquirer.prompt<{ choice: Option }>([
    {
      choices: [
        { name: Option.add },
        { name: Option.install },
        { name: Option.remove },
      ],
      message: 'Choose action:',
      name: 'choice',
      type: 'list',
    },
  ]);

  switch (choice) {
    case Option.add: {
      const { type } = await inquirer.prompt<{ type: Type }>([
        {
          choices: [{ name: Type.development }, { name: Type.production }],
          message: 'What kind of dependencies are you installing?',
          name: 'type',
          type: 'list',
        },
      ]);

      const { addDependencies } = await inquirer.prompt<{
        addDependencies: string;
      }>([
        {
          message: 'Dependencies (space separated):',
          name: 'addDependencies',
          type: 'input',
        },
      ]);

      runCommand(
        `${packageManagerAdd} ${addDependencies}${
          type === Type.development ? ' -D' : ''
        }`
      );
      break;
    }

    case Option.install: {
      runCommand(packageManagerInstallAll);
      break;
    }

    case Option.remove: {
      const installedPackages = JSON.parse(
        execSync(`${packageManager} ls --depth=0 --json`).toString()
      ) as DependencyObject[];

      console.log(installedPackages);

      const productionDependencies = Object.keys(
        installedPackages[0].dependencies
      );
      const developmentDependencies = Object.keys(
        installedPackages[0].devDependencies
      );

      const unsavedDependencies = Object.keys(
        installedPackages[0].unsavedDependencies
      );

      const allDependencies = [
        ...productionDependencies,
        ...developmentDependencies,
        ...unsavedDependencies,
      ].sort((a, b) => a.localeCompare(b));

      const { removePackages } = await inquirer.prompt<{
        removePackages: string[];
      }>([
        {
          choices: allDependencies,
          message: 'Choose packages to remove:',
          name: 'removePackages',
          type: 'checkbox',
        },
      ]);

      runCommand(`${packageManagerRemove} ${removePackages.join(' ')}`);
      break;
    }

    default: {
      process.exit(0);
    }
  }
};
