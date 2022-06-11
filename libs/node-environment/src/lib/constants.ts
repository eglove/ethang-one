import { environmentVariablesDevelopment } from './environment-variables-development';
import { environmentVariablesProduction } from './environment-variables-production';

export enum ENV_KEYS {
  ADMIN_EMAIL = 'ADMIN_EMAIL',
  ADMIN_PASSWORD = 'ADMIN_PASSWORD',
  CAR_VALUE_DATABASE = 'CAR_VALUE_DATABASE',
  CRYPTO_TOKEN = 'CRYPTO_TOKEN',
  DATABASE_URL = 'DATABASE_URL',
  MODE = 'MODE',
  MY_ID = 'MY_ID',
}

export const getConst = (
  key: ENV_KEYS,
  environment = process.env['NODE_ENV']
): string => {
  const constants =
    environment === 'development'
      ? environmentVariablesDevelopment
      : environmentVariablesProduction;

  const value = constants[key];

  if (value === undefined) {
    throw new Error(`Constant ${key} not found.`);
  }

  return value;
};
