import { environmentVariablesDevelopment } from './environment-variables-development';
import { environmentVariablesProduction } from './environment-variables-production';

export enum ENV_KEYS {
  MODE = 'MODE',
  MY_ID = 'MY_ID',
  FRONTEND_URL = 'FRONTEND_URL',
  CRYPTO_TOKEN = 'CRYPTO_TOKEN',
  WEBSITE_SERVER_URL = 'WEBSITE_SERVER_URL',
  DATABASE_URL = 'DATABASE_URL',
  ADMIN_ID = 'ADMIN_ID',
  ADMIN_EMAIL = 'ADMIN_EMAIL',
  ADMIN_PASSWORD = 'ADMIN_PASSWORD',
  EIGHT_BASE_API_URL = 'EIGHT_BASE_API_URL',
  EIGHT_BASE_API_TOKEN = 'EIGHT_BASE_API_TOKEN',
  EIGHT_BASE_API_ADMIN_TOKEN = 'EIGHT_BASE_API_ADMIN_TOKEN',
  AWS_DEFAULT_REGION = 'AWS_DEFAULT_REGION',
  AWS_ETHANG_ADMIN_ACCESS_KEY = 'AWS_ETHANG_ADMIN_ACCESS_KEY',
  AWS_ETHANG_ADMIN_SECRET_KEY = 'AWS_ETHANG_ADMIN_SECRET_KEY',
  HASURA_URL = 'HASURA_URL',
  HASURA_SECRET = 'HASURA_SECRET',
  PRODUCT_HUNT_KEY = 'PRODUCT_HUNT_KEY',
  PRODUCT_HUNT_SECRET = 'PRODUCT_HUNT_SECRET',
  PRODUCT_HUNT_DEVELOPER_TOKEN = 'PRODUCT_HUNT_DEVELOPER_TOKEN',
  PRODUCT_HUNT_ACCESS_TOKEN = 'PRODUCT_HUNT_ACCESS_TOKEN',
  TWITCH_AUTHORIZATION = 'TWITCH_AUTHORIZATION',
  TWITCH_CLIENT_ID = 'TWITCH_CLIENT_ID',
  TWITCH_CLIENT_SECRET = 'TWITCH_CLIENT_SECRET',
  FEEDLY_AUTH_TOKEN = 'FEEDLY_AUTH_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  WSL_PASSWORD = 'WSL_PASSWORD',
  SESSION_SECRET = 'SESSION_SECRET',
}

export class Constant {
  public constantKeys: typeof ENV_KEYS;
  private readonly constants;

  constructor() {
    this.constants =
      process.env.NODE_ENV === 'development'
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
