#!/usr/bin/node
import inquirer from 'inquirer';

export type ListCommandChoice = {
  label: string;
};

export interface GetChoiceParameters {
  choices: Record<string, string>;
  message: string;
}

export const stringArrayToChoices = (
  array: string[]
): Record<string, string> => {
  const choiceObject: Record<string, string> = {};
  for (const string of array) {
    choiceObject[string] = string;
  }

  return choiceObject;
};

export const getChoice = async ({
  choices,
  message,
}: GetChoiceParameters): Promise<string> => {
  const choiceValues = [...Object.values(choices)];

  const { choice } = await inquirer.prompt<{ choice: string }>([
    {
      choices: choiceValues,
      message,
      name: 'choice',
      type: 'list',
    },
  ]);

  return choice;
};

export const getChoices = async ({
  choices,
  message,
}: GetChoiceParameters): Promise<string[]> => {
  const choiceValues = [...Object.values(choices)];

  const { choiceArray } = await inquirer.prompt<{ choiceArray: string[] }>([
    {
      choices: choiceValues,
      message,
      name: 'choiceArray',
      type: 'checkbox',
    },
  ]);

  return choiceArray;
};

export const getInput = async (message: string): Promise<string> => {
  const { input } = await inquirer.prompt<{ input: string }>([
    {
      message,
      name: 'input',
      type: 'input',
    },
  ]);

  return input;
};
