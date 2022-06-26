import { makeVariablePersisted } from '@ethang/apollo';
import { JwtToken } from '@ethang/types';

export const jwtTokenVariable = makeVariablePersisted<string | undefined>(
  undefined,
  'jwtToken'
);

export const tokenDataVariable = makeVariablePersisted<JwtToken | undefined>(
  undefined,
  'tokenData'
);
