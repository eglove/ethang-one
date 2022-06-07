import { getChoice } from '../../util/commands';
import { addProject } from './add-project';
import { removeProjects } from './remove-projects';

export const projectManagement = async (): Promise<void> => {
  const actionChoices = {
    add: 'Add Project',
    remove: 'Remove Projects',
  };

  const actionChoice = await getChoice({
    choices: actionChoices,
    message: 'Choose an Action',
  });

  if (actionChoice === actionChoices.remove) {
    await removeProjects();
  } else if (actionChoice === actionChoices.add) {
    await addProject();
  }
};
