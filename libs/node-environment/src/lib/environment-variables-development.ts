import { ENV_KEYS } from './constants';

export const environmentVariablesDevelopment: Record<
  ENV_KEYS,
  string | undefined
> = {
  ADMIN_EMAIL: process.env.NX_ADMIN_EMAIL,
  ADMIN_ID: process.env.NX_ADMIN_ID,
  ADMIN_PASSWORD: process.env.NX_ADMIN_PASSWORD,
  AWS_DEFAULT_REGION: process.env.NX_AWS_DEFAULT_REGION,
  AWS_ETHANG_ADMIN_ACCESS_KEY: process.env.NX_AWS_ETHANG_ADMIN_ACCESS_KEY,
  AWS_ETHANG_ADMIN_SECRET_KEY: process.env.NX_AWS_ETHANG_ADMIN_SECRET_KEY,
  CRYPTO_TOKEN: process.env.NX_CRYPTO_TOKEN,
  DATABASE_URL: process.env.NX_DATABASE_URL,
  EIGHT_BASE_API_ADMIN_TOKEN: process.env.NX_8BASE_API_ADMIN_TOKEN,
  EIGHT_BASE_API_TOKEN: process.env.NX_8BASE_API_TOKEN,
  EIGHT_BASE_API_URL: process.env.NX_8BASE_API_URL,
  FEEDLY_AUTH_TOKEN: process.env.NX_FEEDLY_AUTH_TOKEN,
  FRONTEND_URL: process.env.NX_FRONTEND_URL,
  HASURA_SECRET: process.env.NX_HASURA_SECRET,
  HASURA_URL: process.env.NX_HASURA_URL,
  MODE: process.env.MODE,
  PRODUCT_HUNT_ACCESS_TOKEN: process.env.NX_PRODUCT_HUNT_ACESS_TOKEN,
  PRODUCT_HUNT_DEVELOPER_TOKEN: process.env.NX_PRODUCT_HUNT_DEVELOPER_TOKEN,
  PRODUCT_HUNT_KEY: process.env.NX_PRODUCT_HUNT_KEY,
  PRODUCT_HUNT_SECRET: process.env.NX_PRODUCT_HUNT_SECRET,
  REFRESH_TOKEN: process.env.NX_REFRESH_TOKEN,
  SESSION_SECRET: process.env.NX_SESSION_SECRET,
  TWITCH_AUTHORIZATION: process.env.NX_TWICH_AUTHORIZATION,
  TWITCH_CLIENT_ID: process.env.NX_TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET: process.env.NX_TWITCH_CLIENT_SECRET,
  WEBSITE_SERVER_URL: process.env.NX_WEBSITE_SERVER_URL,
  WSL_PASSWORD: process.env.NX_WSL_PASSWORD,
};
