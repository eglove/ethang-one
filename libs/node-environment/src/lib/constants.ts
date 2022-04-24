import { environmentVariablesDevelopment } from './environment-variables-development';
import { environmentVariablesProduction } from './environment-variables-production';

export enum ENV_KEYS {
  MODE = 'MODE',
  MY_ID = 'MY_ID',
  CRYPTO_TOKEN = 'CRYPTO_TOKEN',
  DATABASE_URL = 'DATABASE_URL',
  ADMIN_EMAIL = 'ADMIN_EMAIL',
  ADMIN_PASSWORD = 'ADMIN_PASSWORD',
  FIREBASE_API_KEY = 'FIREBASE_API_KEY',
  FIREBASE_APP_ID = 'FIREBASE_APP_ID',
  FIREBASE_AUTH_DOMAIN = 'FIREBASE_AUTH_DOMAIN',
  FIREBASE_MESSAGING_SENDER_ID = 'FIREBASE_MESSAGING_SENDER_ID',
  FIREBASE_PROJECT_ID = 'FIREBASE_PROJECT_ID',
  FIREBASE_STORAGE_BUCKET = 'FIREBASE_STORAGE_BUCKET',
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
