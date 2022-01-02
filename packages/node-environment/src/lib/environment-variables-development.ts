import {ENV_KEYS} from './constants';
import {environmentVariablesProduction} from './environment-variables-production';

export const environmentVariablesDevelopment: Record<ENV_KEYS, string> = {
  CRYPTO_TOKEN: environmentVariablesProduction.CRYPTO_TOKEN,
  NEXT_PUBLIC_GRAPHQL_ROOT: 'http://localhost:4000/graphql',
  NEXT_PUBLIC_ROOT: 'http://localhost:4000/graphql',
  PORT: '4000',
  WEBSITE_DATABASE_URL: environmentVariablesProduction.WEBSITE_DATABASE_URL,
};
