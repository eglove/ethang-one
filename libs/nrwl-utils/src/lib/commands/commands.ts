import { runShellAsync } from '@ethang/util-cli';

interface NxCommandProperties {
  isDryRun?: boolean;
  projectName?: string;
  projectNames?: string[];
  target?: string;
  onClose?: () => Promise<void>;
}

export class NxCommand implements NxCommandProperties {
  isDryRun?: boolean;
  projectName?: string;
  projectNames?: string[];
  target?: string;
  onClose?: () => Promise<void>;

  constructor(properties?: NxCommandProperties) {
    this.isDryRun = properties?.isDryRun;
    this.projectName = properties?.projectName;
    this.projectNames = properties?.projectNames;
    this.target = properties?.target;
    this.onClose = properties?.onClose;
  }

  async remove(): Promise<void> {
    if (typeof this.projectName !== 'string') {
      throw new TypeError('Must specify projectName');
    }

    await this.runCommand(
      `npx nx g @nrwl/workspace:remove ${this.projectName}`
    );
  }

  async removeMany(): Promise<void> {
    if (!Array.isArray(this.projectNames)) {
      throw new TypeError('Must specify projectNames');
    }

    const promises = [];
    for (const projectName of this.projectNames) {
      promises.push(
        this.runCommand(`npx nx g @nrwl/workspace:remove ${projectName}`)
      );
    }

    await Promise.all(promises);
  }

  async run(): Promise<void> {
    if (
      typeof this.projectName !== 'string' ||
      typeof this.target !== 'string'
    ) {
      throw new TypeError('Must specify both projectName and target');
    }

    await this.runCommand(`npx nx run ${this.projectName}:${this.target}`);
  }

  async runMany(): Promise<void> {
    if (!Array.isArray(this.projectNames) || typeof this.target !== 'string') {
      throw new TypeError('Must specify projectNames');
    }

    await this.runCommand(
      `npx nx run-many --target=${
        this.target
      } --projects=${this.projectNames.join(',')}}`
    );
  }

  private dryRunString(): string {
    return this.isDryRun === true ? ' --dryRun' : '';
  }

  private async runCommand(command: string): Promise<void> {
    runShellAsync({
      callbacks: {
        onCode: this.onClose,
      },
      command: `${command}${this.dryRunString()}`,
    });
  }
}
