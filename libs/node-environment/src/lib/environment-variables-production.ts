import { ENV_KEYS } from './constants';
import { environmentVariablesDevelopment } from './environment-variables-development';

export const environmentVariablesProduction: Record<
  ENV_KEYS,
  string | undefined
> = {
  ...environmentVariablesDevelopment,
};
