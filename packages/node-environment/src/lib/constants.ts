import {environmentVariablesDevelopment} from './environment-variables-development';
import {environmentVariablesProduction} from './environment-variables-production';

export const PACKAGE_MANAGER = 'npx pnpm';

export enum ENV_KEYS {
  NEXT_PUBLIC_GRAPHQL_DEVELOPMENT_ROOT = 'NEXT_PUBLIC_GRAPHQL_DEVELOPMENT_ROOT',
  NEXT_PUBLIC_DEVELOPMENT_ROOT = 'NEXT_PUBLIC_DEVELOPMENT_ROOT',
}

export class Constant {
  public constantKeys: typeof ENV_KEYS;
  private readonly constants: Record<string, string>;

  constructor() {
    this.constants
      = process.env.NODE_ENV === 'production'
        ? environmentVariablesProduction
        : environmentVariablesDevelopment;
    this.constantKeys = ENV_KEYS;
  }

  get = (constantKey: ENV_KEYS): string => {
    if (this.constants[constantKey] !== '') {
      return this.constants[constantKey];
    }

    throw new Error(`Constant ${constantKey} not found.`);
  };
}

export const getConst = (key: ENV_KEYS): string => new Constant().get(key);
