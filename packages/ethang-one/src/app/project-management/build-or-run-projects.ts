import inquirer from 'inquirer';
import fs from 'node:fs';

import {packageManager} from '../../main';
import {runCommand} from '../run-command';

export const buildOrRunProjects = async (): Promise<void> => {
  const {projects} = JSON.parse(fs.readFileSync('./workspace.json').toString()) as Record<string, string>;

  const {chosenProjects} = await inquirer.prompt<{chosenProjects: string[]}>([
    {
      choices: Object.keys(projects),
      message: 'Choose project(s):',
      name: 'chosenProjects',
      type: 'checkbox',
    },
  ]);

  let targets: string[] = [];
  for (const chosenProject of chosenProjects) {
    // @ts-expect-error Assume this will be ok.
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const projectJson = JSON.parse(fs.readFileSync(`./${projects[chosenProject]}/project.json`).toString()) as Record<string, {targets: Record<string, unknown>}>;
    targets.push(...Object.keys(projectJson.targets));
  }

  targets = [...new Set(targets)];

  const {target} = await inquirer.prompt<{target: string}>([
    {
      choices: targets,
      message: 'Choose a target:',
      name: 'target',
      type: 'list',
    },
  ]);

  runCommand(
    `${packageManager} nx run-many --target=${target} ---projects=${chosenProjects.join(
      ',',
    )}`,
  );
};
