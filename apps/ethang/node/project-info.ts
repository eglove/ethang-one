import fs from 'node:fs';

export const getNxProjects = (): string[] => {
  const { projects } = JSON.parse(
    fs.readFileSync('./workspace.json').toString()
  ) as Record<string, string>;

  return Object.keys(projects);
};
