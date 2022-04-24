import { ENV_KEYS } from './constants';

export const environmentVariablesProduction: Record<
  ENV_KEYS,
  string | undefined
> = {
  ADMIN_EMAIL: process.env['NX_ADMIN_EMAIL'],
  ADMIN_PASSWORD: process.env['NX_ADMIN_PASSWORD'],
  CRYPTO_TOKEN: process.env['NX_CRYPTO_TOKEN'],
  DATABASE_URL: process.env['NX_DATABASE_URL'],
  FIREBASE_API_KEY: process.env['NX_FIREBASE_API_KEY'],
  FIREBASE_APP_ID: process.env['NX_FIREBASE_APP_ID'],
  FIREBASE_AUTH_DOMAIN: process.env['NX_FIREBASE_AUTH_DOMAIN'],
  FIREBASE_MESSAGING_SENDER_ID: process.env['NX_FIREBASE_MESSAGING_SENDER_ID'],
  FIREBASE_PROJECT_ID: process.env['NX_FIREBASE_PROJECT_ID'],
  FIREBASE_STORAGE_BUCKET: process.env['NX_FIREBASE_STORAGE_BUCKET'],
  MODE: process.env['MODE'],
  MY_ID: process.env['NX_MY_ID'],
};
