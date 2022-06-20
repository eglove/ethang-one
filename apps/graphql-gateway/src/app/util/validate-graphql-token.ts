import { ENV_KEYS, getConst } from '@ethang/node-environment';
import { JwtToken } from '@ethang/types';
import { UnauthorizedException } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { decryptWithSecret } from 'next/dist/server/crypto-utils';

export type GraphQLUserSession = JwtToken & { password: string };

export type GraphQLContext = {
  req: {
    body: {
      operationName: string;
      query: string;
    };
    headers: Record<string, string>;
    rawHeaders: string[];
  };
};

export const isSignInQuery = (query: string): boolean => {
  return (
    query.includes('query') &&
    query.includes('signin') &&
    query.includes('email') &&
    query.includes('password')
  );
};

export const validateGraphQlUserToken = (
  context: GraphQLContext
): GraphQLUserSession => {
  const { token } = context.req.headers;

  if (typeof token === 'undefined') {
    throw new UnauthorizedException();
  }

  let jwtData: JwtToken | undefined;
  jwt.verify(token, getConst(ENV_KEYS.CRYPTO_TOKEN), (error, decoded) => {
    if (error !== null) {
      throw new UnauthorizedException();
    }

    jwtData = decoded as JwtToken;
  });

  if (typeof jwtData === 'undefined') {
    throw new UnauthorizedException('Invalid token.');
  }

  return {
    ...jwtData,
    password: decryptWithSecret(
      Buffer.from(getConst(ENV_KEYS.CRYPTO_TOKEN)),
      jwtData.encrypted
    ),
  };
};
