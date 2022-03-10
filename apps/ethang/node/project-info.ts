import fs from 'node:fs';

export const getNxProjects = (): string[] => {
  const { projects } = JSON.parse(
    fs.readFileSync('./workspace.json').toString()
  ) as Record<string, string>;

  return Object.keys(projects);
};

export const getProjectTargets = (projects: string[]): string[] => {
  const workspaceProjects = JSON.parse(
    fs.readFileSync('./workspace.json').toString()
  ).projects as string[];

  let targets: string[] = [];

  for (const project of projects) {
    const projectJson = JSON.parse(
      fs
        .readFileSync(`./${workspaceProjects[project] as string}/project.json`)
        .toString()
    ) as Record<string, { targets: Record<string, unknown> }>;
    targets = [...new Set([...targets, ...Object.keys(projectJson.targets)])];
  }

  return targets;
};
