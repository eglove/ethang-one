import {ENV_KEYS} from './constants';

export const environmentVariablesDevelopment: Record<ENV_KEYS, string> = {
  NEXT_PUBLIC_DEVELOPMENT_ROOT: 'http://localhost:4000/graphql',
  NEXT_PUBLIC_GRAPHQL_DEVELOPMENT_ROOT: 'http://localhost:4000/graphql',
};
