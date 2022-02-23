import { Prisma } from '@ethang-one/prisma-connection';

import { findMany, findUnique } from './queries/ethang/master-query';

const findManyQueries = (): Record<string, typeof findMany> => {
  const findManyFunctions = Object.getOwnPropertyNames(Prisma.ModelName).map(
    modelName => {
      return `${modelName.charAt(0).toLowerCase()}${modelName.slice(1)}s`;
    }
  );
  const returnObject: Record<string, typeof findMany> = {};

  for (const findManyFunction of findManyFunctions) {
    returnObject[findManyFunction] = findMany;
  }

  return returnObject;
};

const findUniqueQueries = (): Record<string, typeof findUnique> => {
  const findUniqueFunctions = Object.getOwnPropertyNames(Prisma.ModelName).map(
    modelName => {
      return `${modelName.charAt(0).toLowerCase()}${modelName.slice(1)}`;
    }
  );
  const returnObject: Record<string, typeof findUnique> = {};

  for (const findUniqueFunction of findUniqueFunctions) {
    returnObject[findUniqueFunction] = findUnique;
  }

  return returnObject;
};

export const resolvers = {
  Query: {
    ...findManyQueries(),
    ...findUniqueQueries(),
  },
};
