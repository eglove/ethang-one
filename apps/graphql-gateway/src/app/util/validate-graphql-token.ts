import { ENV_KEYS, getConst } from '@ethang/node-environment';
import { JwtToken } from '@ethang/types';
import { UnauthorizedException } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { decryptWithSecret } from 'next/dist/server/crypto-utils';

export type GraphQLUserSession = JwtToken & { password: string };

export type GraphQLContext = {
  req: {
    rawHeaders: string[];
  };
};

export const validateGraphQlUserToken = (
  context: GraphQLContext
): GraphQLUserSession => {
  const headerArray = context.req.rawHeaders;
  let token;

  for (const [index, string] of headerArray.entries()) {
    if (index !== headerArray.length - 2 && string === 'token') {
      token = headerArray[index + 1];
    }
  }

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

  if (typeof jwtData.exp !== 'number' || jwtData.exp <= 0) {
    throw new UnauthorizedException('Token expired.');
  }

  return {
    ...jwtData,
    password: decryptWithSecret(
      Buffer.from(getConst(ENV_KEYS.CRYPTO_TOKEN)),
      jwtData.encrypted
    ),
  };
};
