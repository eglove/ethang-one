import { JwtToken } from '@ethang/types';
import jwt from 'jsonwebtoken';

import {
  jwtTokenVariable,
  tokenDataVariable,
} from '../components/page-wrapper/reactive-variables';

/**
 * @throws {TypeError}
 */
export const setToken = (tokenString: string): void => {
  const decoded = jwt.decode(tokenString) as JwtToken;

  if (typeof decoded.userId !== 'string') {
    throw new TypeError('Invalid token.');
  }

  jwtTokenVariable(tokenString);

  const decode = jwt.decode(tokenString) as JwtToken;
  tokenDataVariable(decode);
};
