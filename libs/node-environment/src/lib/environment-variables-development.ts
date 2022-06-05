import { ENV_KEYS } from './constants';

export const environmentVariablesDevelopment: Record<
  ENV_KEYS,
  string | undefined
> = {
  ADMIN_EMAIL: process.env['NX_ADMIN_EMAIL'],
  ADMIN_PASSWORD: process.env['NX_ADMIN_PASSWORD'],
  CAR_VALUE_DATABASE: process.env['NX_CAR_VALUE_DEVELOPMENT_DATABASE'],
  CRYPTO_TOKEN: process.env['NX_CRYPTO_TOKEN'],
  DATABASE_URL: process.env['NX_DATABASE_URL'],
  MODE: process.env['MODE'],
  MY_ID: process.env['NX_MY_ID'],
};
