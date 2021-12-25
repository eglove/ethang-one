import {
  ProjectGraph,
  ProjectGraphDependency,
  ProjectGraphNode,
} from '@nrwl/devkit';
import { NxJsonConfiguration } from '@nrwl/tao/src/shared/nx';
import { WorkspaceJsonConfiguration } from '@nrwl/tao/src/shared/workspace';
import { readNxJson, readWorkspaceJson } from '@nrwl/workspace';
import { createProjectGraphAsync } from '@nrwl/workspace/src/core/project-graph';
import * as fs from 'node:fs';
import path from 'node:path';

enum ProjectType {
  app = 'app',
  end2end = 'e2e',
  library = 'lib',
  npm = 'npm',
}

export class UtilNrwl {
  public projectNodes?: ProjectGraphNode[];
  private nxJson?: NxJsonConfiguration;
  private workspaceJson?: WorkspaceJsonConfiguration;
  private projectGraph?: ProjectGraph;
  private dependencies?: Record<string, ProjectGraphDependency[]>;

  async setup(): Promise<void> {
    this.nxJson = readNxJson();
    this.workspaceJson = readWorkspaceJson();
    this.projectGraph = await createProjectGraphAsync();
    if (this.projectGraph) {
      this.projectNodes = Object.values(this.projectGraph.nodes);
      this.dependencies = this.projectGraph.dependencies;
    }
  }

  projectsWithDependencies(projectNames: string[]): string[] {
    const filteredProjects: string[] = projectNames.filter(
      projectName => Boolean(projectName) && this.isProject(projectName)
    );
    let projectNamesWithDependencies = [...filteredProjects];

    // Recursively add deps
    if (this.dependencies && Object.keys(this.dependencies).length > 0) {
      for (const projectName of projectNames) {
        if (this.dependencies[projectName]) {
          projectNamesWithDependencies = [
            ...projectNamesWithDependencies,
            ...this.projectsWithDependencies(
              this.dependencies[projectName].map(
                dependency => dependency.target
              )
            ),
          ];
        }
      }
    }

    // All projects should include ava-one
    if (
      !projectNamesWithDependencies.includes('ava-one') &&
      this.dependencies?.['ava-one']
    ) {
      const avaOneDependencies = this.dependencies['ava-one'].map(
        dependency => dependency.target
      );

      projectNamesWithDependencies = [
        ...projectNamesWithDependencies,
        'ava-one',
        ...avaOneDependencies,
      ];
    }

    // Filter npm and cargo deps.
    projectNamesWithDependencies = projectNamesWithDependencies.filter(
      projectName =>
        !projectName.startsWith('npm:') && !projectName.startsWith('cargo:')
    );

    return projectNamesWithDependencies.filter(
      (item, index, array) => array.indexOf(item) === index
    );
  }

  findProject(projectName: string): ProjectGraphNode | undefined {
    return this.projectNodes?.find(
      project => project.name === projectName && this.isValidProject(project)
    );
  }

  isValidProject(project: ProjectGraphNode): boolean {
    return Boolean(project.data && project.type !== ProjectType.npm);
  }

  isProject(projectName: string): boolean {
    return Boolean(this.findProject(projectName));
  }

  // Writes initial sparse-checkout file used by ava-one-init.
  writeAvaOneDependencies(): void {
    const avaOneDependencies = this.dependencies?.['ava-one'];

    let dependencyRoots: string[] = [];
    if (avaOneDependencies) {
      dependencyRoots = this.getExcludedProjectRoots([
        'ava-one',
        ...avaOneDependencies.map(dependency => dependency.target),
      ]);
    }

    dependencyRoots = [
      '/*',
      ...dependencyRoots.map(dependencyRoot => `!${dependencyRoot}/src`),
    ];

    fs.writeFileSync(
      // Allow __dirname for broader library use
      // eslint-disable-next-line unicorn/prefer-module
      path.resolve(__dirname, '../../../sparse-checkout'),
      dependencyRoots.join('\n')
    );
  }

  getExcludedProjectRoots(projectNames: string[]): string[] {
    let filteredProjects: ProjectGraphNode[] | undefined;
    if (projectNames.length > 0) {
      filteredProjects = this.projectNodes?.filter(
        project =>
          this.isProject(project.name) && !projectNames.includes(project.name)
      );
    }

    let excludedProjects: string[] = [];
    if (filteredProjects) {
      excludedProjects = filteredProjects.map(project => project.name);
    }

    if (excludedProjects) {
      return this.getProjectRoots(excludedProjects);
    }

    return [];
  }

  getProjectRoots(projectNames: string[]): string[] {
    const projects = this.workspaceJson?.projects;

    const projectRoots = [];
    if (projects) {
      for (const name of projectNames) {
        if (projects[name]?.root) {
          projectRoots.push(projects[name].root);
        }
      }
    }

    return projectRoots;
  }

  projectNames(): string[] {
    if (this.projectNodes) {
      return this.projectNodes.map(project => project.name);
    }

    return [];
  }

  findApp(projectName: string): ProjectGraphNode | undefined {
    return this.projectNodes?.find(
      project => project.name === projectName && this.isApp(project)
    );
  }

  findAppLike(projectName: RegExp): ProjectGraphNode | undefined {
    return this.projectNodes?.find(
      project => projectName.test(project.name) && this.isApp(project)
    );
  }

  isApp(project: ProjectGraphNode): boolean {
    return project.type === ProjectType.app;
  }

  isE2e(project: ProjectGraphNode): boolean {
    return project.type === ProjectType.end2end;
  }

  isLib(project: ProjectGraphNode): boolean {
    return project.type === ProjectType.library;
  }
}
