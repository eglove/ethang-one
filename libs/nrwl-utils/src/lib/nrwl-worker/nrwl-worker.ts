import {
  createProjectGraphAsync,
  NxJsonConfiguration,
  ProjectGraph,
  ProjectGraphDependency,
  ProjectGraphNode,
  readNxJson,
  WorkspaceJsonConfiguration,
  workspaceRoot,
} from '@nrwl/devkit';
import {
  fetchCommunityPlugins,
  fetchCorePlugins,
  getInstalledPluginsFromPackageJson,
  getPluginCapabilities,
} from '@nrwl/workspace/src/utilities/plugins';
import {
  CommunityPlugin,
  CorePlugin,
  PluginCapabilities,
} from '@nrwl/workspace/src/utilities/plugins/models';
import { readWorkspaceJson } from 'nx/src/project-graph/file-utils';

import { projectPlugins } from '../util/project-plugins';

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

  async communityPlugins(): Promise<CommunityPlugin[]> {
    return fetchCommunityPlugins();
  }

  corePlugins(): CorePlugin[] {
    return fetchCorePlugins();
  }

  getProjectTypes(type: ProjectType): ProjectGraphNode[] {
    if (typeof this.projectNodes !== 'undefined') {
      return this.projectNodes.filter(projectNode => {
        return projectNode.type === type;
      });
    }

    return [];
  }

  async installedPlugins(): Promise<Map<string, PluginCapabilities>> {
    return getInstalledPluginsFromPackageJson(
      workspaceRoot,
      this.corePlugins(),
      await this.communityPlugins()
    );
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

  projectCapabilities(projectName: string): PluginCapabilities | undefined {
    const capabilities = getPluginCapabilities(
      workspaceRoot,
      projectPlugins[projectName]
    );

    if (capabilities !== null) {
      return capabilities;
    }
  }

  projectGenerators(projectName: string): string[] {
    const capabilities = this.projectCapabilities(projectName);

    if (typeof capabilities === 'undefined') {
      return [];
    }

    return Object.keys(capabilities.generators);
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
