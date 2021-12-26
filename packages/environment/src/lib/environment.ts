import {
  DEVELOPMENT,
  EnvironmentKey,
} from './variables/enviroment.development';
import { PRODUCTION } from './variables/environment.production';

export class Environment {
  private readonly variables: Record<EnvironmentKey, string>;

  constructor() {
    this.variables =
      process.env.NODE_ENV === 'development' ? DEVELOPMENT : PRODUCTION;
  }

  getVariable(key: EnvironmentKey): string {
    return this.variables[key];
  }

  variableExists(key: EnvironmentKey): boolean {
    return this.variables[key] !== undefined;
  }
}

export const environmentVariable = (key: EnvironmentKey): string => {
  const environment = new Environment();

  if (!environment.variableExists(key)) {
    throw new Error(`Environment variable ${key} does not exist`);
  }

  return environment.getVariable(key);
};
