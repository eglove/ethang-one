import {
  createProjectGraphAsync,
  NxJsonConfiguration,
  ProjectGraph,
  ProjectGraphDependency,
  ProjectGraphNode,
  readNxJson,
  WorkspaceJsonConfiguration,
} from '@nrwl/devkit';
import { readWorkspaceJson } from 'nx/src/project-graph/file-utils';

export enum ProjectType {
  app = 'app',
  end2end = 'e2e',
  library = 'lib',
  npm = 'npm',
}

export class NrwlWorker {
  public projectNodes?: ProjectGraphNode[];
  private dependencies?: Record<string, ProjectGraphDependency[]>;
  private projectGraph?: ProjectGraph;
  private nxJson?: NxJsonConfiguration;
  private workspaceJson?: WorkspaceJsonConfiguration;

  async setup(): Promise<void> {
    this.nxJson = readNxJson();
    this.workspaceJson = readWorkspaceJson();
    this.projectGraph = await createProjectGraphAsync();

    if (typeof this.projectGraph !== 'undefined') {
      this.projectNodes = Object.values(this.projectGraph.nodes);
      this.dependencies = this.projectGraph.dependencies;
    }
  }

  getProjectTypes(type: ProjectType): ProjectGraphNode[] {
    if (typeof this.projectNodes !== 'undefined') {
      return this.projectNodes.filter(projectNode => {
        return projectNode.type === type;
      });
    }

    return [];
  }

  findProject(projectName: string): ProjectGraphNode | undefined {
    return this.projectNodes?.find(project => {
      return project.name === projectName && this.isValidProject(project);
    });
  }

  isValidProject(project: ProjectGraphNode): boolean {
    return Boolean(
      typeof project.data !== 'undefined' && project.type !== ProjectType.npm
    );
  }

  projectGenerators(projectName: string): Record<string, string> | undefined {
    const project = this.findProject(projectName);

    if (typeof project !== 'undefined') {
      return project.data.generators as Record<string, string>;
    }
  }

  projectNames(type?: ProjectType): string[] {
    if (typeof this.projectNodes !== 'undefined') {
      let projects = this.projectNodes;

      if (typeof type !== 'undefined') {
        projects = projects.filter(project => {
          return project.type === type;
        });
      }

      return projects.map(project => {
        return project.name;
      });
    }

    return [];
  }

  projectTargets(projectName: string): string[] {
    const project = this.findProject(projectName);

    if (typeof project !== 'undefined') {
      return Object.keys(project.data.targets);
    }

    return [];
  }

  projectsUniqueTargets(projectnames: string[]): string[] {
    let targets: string[] = [];

    for (const projectname of projectnames) {
      const projectTargets = this.projectTargets(projectname);
      targets = [...new Set([...targets, ...projectTargets])];
    }

    return targets;
  }
}

export const nrwlWorker = async (): Promise<NrwlWorker> => {
  const nrwl = new NrwlWorker();
  await nrwl.setup();
  return nrwl;
};
