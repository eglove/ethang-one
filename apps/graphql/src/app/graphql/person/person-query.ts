import { Person, Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql/type';

import { Context } from '../../../main';
import { resolveArguments } from '../../util/prisma';

export const person = async (
  parent: Record<string, unknown> | undefined,
  parameters: Prisma.PersonFindUniqueArgs,
  context: Context,
  info: GraphQLResolveInfo
): Promise<Person | null> => {
  const resolvedArguments = resolveArguments({ info, parameters, parent });

  return context.prisma.person.findUnique(resolvedArguments);
};
