import { isNullOrUndefined } from '@ethang/util-typescript';
import { UnauthorizedException } from '@nestjs/common';

import { GraphQLContext } from './validate-graphql-token';

export const MUST_BE_SIGNED_IN = 'You must be signed in to do this.';

export const throwNoUserSession = (context: GraphQLContext): void => {
  if (
    isNullOrUndefined(context.userSession) ||
    isNullOrUndefined(context.userSession?.encrypted) ||
    isNullOrUndefined(context.userSession?.iat) ||
    isNullOrUndefined(context.userSession?.userEmail) ||
    isNullOrUndefined(context.userSession?.userId) ||
    isNullOrUndefined(context.userSession?.password)
  ) {
    throw new UnauthorizedException(MUST_BE_SIGNED_IN);
  }
};
