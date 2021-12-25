import inquirer from 'inquirer';

import { packageManager } from '../../main';
import { runCommand } from '../run-command';

enum FrameworkType {
  node = 'node',
  stencil = 'stencil',
  workspace = 'workspace',
}

enum ProjectType {
  app = 'Application',
  library = 'Library',
}

export const createProject = async (): Promise<void> => {
  const { projectFramework } = await inquirer.prompt<{
    projectFramework: FrameworkType;
  }>([
    {
      choices: [
        { name: FrameworkType.node },
        { name: FrameworkType.stencil },
        { name: FrameworkType.workspace },
      ],
      message:
        'Choose project framework. (You will choose application or library next.',
      name: 'projectFramework',
      type: 'list',
    },
  ]);

  let frameworkString;
  switch (projectFramework) {
    case FrameworkType.node: {
      frameworkString = '@nrwl/node';
      break;
    }

    case FrameworkType.stencil: {
      frameworkString = '@nxext/stencil';
      break;
    }

    case FrameworkType.workspace: {
      frameworkString = '@nrwl/workspace';
      break;
    }

    default: {
      console.error('Invalid framework.');
    }
  }

  const { projectType } = await inquirer.prompt<{ projectType: ProjectType }>([
    {
      choices: [
        {
          name: ProjectType.app,
        },
        {
          name: ProjectType.library,
        },
      ],
      message: 'Choose project type.',
      name: 'projectType',
      type: 'list',
    },
  ]);

  let typeString;
  switch (projectType) {
    case ProjectType.app: {
      typeString = 'app';
      break;
    }

    case ProjectType.library: {
      typeString = 'lib';
      break;
    }

    default: {
      console.error('Invalid project type.');
    }
  }

  const { projectName } = await inquirer.prompt<{ projectName: string }>([
    {
      message: 'Project Name:',
      name: 'projectName',
      type: 'input',
    },
  ]);

  if (frameworkString && typeString) {
    runCommand(
      `${packageManager} nx g ${frameworkString}:${typeString} ${projectName} --dryRun`
    );

    const { doItForReal } = await inquirer.prompt<{ doItForReal: boolean }>([
      {
        message: 'Does this look ok?',
        name: 'doItForReal',
        type: 'confirm',
      },
    ]);

    if (doItForReal) {
      runCommand(
        `${packageManager} nx g ${frameworkString}:${typeString} ${projectName}`
      );
    }
  }
};
