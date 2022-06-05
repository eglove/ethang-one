import { environmentVariablesDevelopment } from './environment-variables-development';
import { environmentVariablesProduction } from './environment-variables-production';

export enum ENV_KEYS {
  MODE = 'MODE',
  MY_ID = 'MY_ID',
  CAR_VALUE_DATABASE = 'CAR_VALUE_DATABASE',
  CRYPTO_TOKEN = 'CRYPTO_TOKEN',
  DATABASE_URL = 'DATABASE_URL',
  ADMIN_EMAIL = 'ADMIN_EMAIL',
  ADMIN_PASSWORD = 'ADMIN_PASSWORD',
}

export class Constant {
  public constantKeys: typeof ENV_KEYS;
  private readonly constants;

  constructor(environment = process.env['NODE_ENV']) {
    this.constants =
      environment === 'development'
        ? environmentVariablesDevelopment
        : environmentVariablesProduction;
    this.constantKeys = ENV_KEYS;
  }

  get = (constantKey: ENV_KEYS): string => {
    const value = this.constants[constantKey];

    if (value === undefined) {
      throw new Error(`Constant ${constantKey} not found.`);
    }

    return value;
  };
}

export const getConst = (key: ENV_KEYS): string => {
  return new Constant().get(key);
};
