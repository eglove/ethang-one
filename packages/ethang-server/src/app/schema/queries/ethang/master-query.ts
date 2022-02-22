import { GraphQLResolveInfo } from 'graphql';

import { Context } from '../../../../main';
import { ArgumentsTypeExtended, GraphQlResolver } from '../graph-ql-resolver';

export const findUnique = async <
  ArgumentsType,
  ModelType,
  ReturnType,
  SelectType
>(
  parent: Record<string, unknown> | undefined,
  arguments_: ArgumentsTypeExtended<ArgumentsType>,
  context: Context,
  info: GraphQLResolveInfo
): Promise<ReturnType> => {
  const query = new GraphQlResolver<
    ArgumentsType,
    ModelType,
    ReturnType,
    SelectType
  >('findUnique', {
    arguments_,
    context,
    info,
    isFindMany: false,
    parent,
  });

  return query.runAction();
};

export const findMany = async <
  ArgumentsType,
  ModelType,
  ReturnType,
  SelectType
>(
  parent: Record<string, unknown> | undefined,
  arguments_: ArgumentsTypeExtended<ArgumentsType>,
  context: Context,
  info: GraphQLResolveInfo
): Promise<ReturnType> => {
  const query = new GraphQlResolver<
    ArgumentsType,
    ModelType,
    ReturnType,
    SelectType
  >('findMany', {
    arguments_,
    context,
    info,
    isFindMany: true,
    parent,
  });

  return query.runAction();
};

export const testResolver = <ArgumentsType>(
  parent: Record<string, unknown> | undefined,
  arguments_: ArgumentsTypeExtended<ArgumentsType>,
  context: Context,
  info: GraphQLResolveInfo
): void => {
  console.log(info);
};
