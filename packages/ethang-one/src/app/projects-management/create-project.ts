import { runCommand } from '@ethang-one/util-typescript';
import inquirer, { Separator } from 'inquirer';
import { execSync } from 'node:child_process';

import runEthanGOne, { packageManager } from '../../main';

enum FrameworkType {
  back = 'Go Back',
  next = 'next',
  node = 'node',
  rust = 'rust',
  stencil = 'stencil',
  workspace = 'workspace',
}

enum ProjectType {
  app = 'Application',
  back = 'Go Back',
  library = 'Library',
}

export const createProject = async (): Promise<void> => {
  const { projectFramework, projectType } = await inquirer.prompt<{
    projectFramework: FrameworkType;
    projectType: ProjectType;
  }>([
    {
      choices: [
        { name: FrameworkType.next },
        { name: FrameworkType.node },
        { name: FrameworkType.rust },
        { name: FrameworkType.stencil },
        { name: FrameworkType.workspace },
        new Separator(),
        { name: FrameworkType.back },
      ],
      message:
        'Choose project framework. (You will choose application or library next.',
      name: 'projectFramework',
      type: 'list',
    },
    {
      choices: [
        { name: ProjectType.app },
        { name: ProjectType.library },
        new Separator(),
        { name: ProjectType.back },
      ],
      message: 'Choose project type.',
      name: 'projectType',
      type: 'list',
    },
  ]);

  let frameworkString;
  switch (projectFramework) {
    case FrameworkType.next: {
      frameworkString = '@nrwl/next';
      break;
    }

    case FrameworkType.node: {
      frameworkString = '@nrwl/node';
      break;
    }

    case FrameworkType.rust: {
      frameworkString = '@nxrs/cargo';
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

    case FrameworkType.back: {
      await runEthanGOne();
      break;
    }

    default: {
      console.error('Invalid framework.');
    }
  }

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

  if (typeof frameworkString === 'string' && typeof typeString === 'string') {
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
      execSync(
        `${packageManager} nx g ${frameworkString}:${typeString} ${projectName}`
      );
    } else {
      createProject().catch(error => {
        console.error(error);
      });
    }
  }
};
