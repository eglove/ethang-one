import { ENV_KEYS } from './constants';

export const environmentVariablesDevelopment: Record<
  ENV_KEYS,
  string | undefined
> = {
  ADMIN_EMAIL: process.env['NX_ADMIN_EMAIL'],
  ADMIN_PASSWORD: process.env['NX_ADMIN_PASSWORD'],
  CAR_VALUE_DATABASE: process.env['NX_CAR_VALUE_DATABASE'],
  CRYPTO_TOKEN: process.env['NX_CRYPTO_TOKEN'],
  DATABASE_URL: process.env['NX_DATABASE_URL'],
  GEOAPIFY_REVERSE_GEOCODE: process.env['NX_GEOAPIFY_REVERSE_GEOCODE'],
  MODE: process.env['NX_MODE'],
  MY_ID: process.env['NX_MY_ID'],
  OPEN_WEATHER_KEY: process.env['NX_OPEN_WEATHER'],
};
