#!/usr/bin/node

import { appManagement } from './commands/app-management/app-management';
import { dependencyManagement } from './commands/dependency-management/dependency-management';
import { gitManagement } from './commands/git-management/git-management';
import { localManagement } from './commands/local-management/local-management';
import { projectManagement } from './commands/project-management/project-management';
import { getChoice } from './util/commands';

export const startCli = async (): Promise<void> => {
  const choices = {
    appManagement: 'App Management',
    dependencyManagement: 'Dependency Management',
    gitManagement: 'Git Management',
    localManagement: 'Local Management',
    projectManagement: 'Project Management (Both apps and libs)',
  };

  const choice = await getChoice({ choices, message: 'Choose a Project' });

  switch (choice) {
    case choices.appManagement: {
      await appManagement();
      break;
    }

    case choices.dependencyManagement: {
      await dependencyManagement();
      break;
    }

    case choices.gitManagement: {
      await gitManagement();
      break;
    }

    case choices.localManagement: {
      await localManagement();
      break;
    }

    case choices.projectManagement: {
      await projectManagement();
      break;
    }
    // No default
  }
};
