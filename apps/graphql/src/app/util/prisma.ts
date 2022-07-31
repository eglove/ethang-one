import { arrayHasDuplicate } from '@ethang/util-typescript';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql/type';

import { Context } from '../../main';

export type RelationInfo = {
  parentCallingFunction?: string;
  parentColumnName: string;
  parentTableName: string;
  relationColumnName: string;
  relationIndexName?: string;
};

type ResolvedArguments<SelectType> = {
  rejectOnNotFound?: Prisma.RejectOnNotFound;
  select?: SelectType;
  where?: Record<string, unknown>;
};

type ResolveParentParameters<ArgumentsType> = {
  info: GraphQLResolveInfo;
  parameters: ArgumentsType;
  parent?: Record<string, unknown>;
  relationInfo?: RelationInfo[];
};

type ResolveQueryParameters = {
  context: Context;
  info: GraphQLResolveInfo;
  modelName: string;
  parent: Record<string, unknown> | undefined;
  relationInfo?: RelationInfo[];
  resolvedArguments: ResolvedArguments<unknown>;
};

export const select = <Type>(info: GraphQLResolveInfo): Type => {
  const { select: prismaSelect } = new PrismaSelect(info).value as {
    select: Type;
  };

  return prismaSelect;
};

export const resolveArguments = <
  ArgumentsType extends ResolvedArguments<SelectType>,
  SelectType
>(
  parameters: ResolveParentParameters<ArgumentsType>,
  ignoreSelect = false
  // eslint-disable-next-line sonarjs/cognitive-complexity
): ArgumentsType => {
  const thisParent = parameters.parent;

  if (parameters.relationInfo && parameters.parent) {
    const indexArray = parameters.relationInfo.map(info => {
      if (typeof info.parentCallingFunction === 'string') {
        return `${info.parentTableName}${info.parentCallingFunction}`;
      }

      return info.parentTableName;
    });

    if (arrayHasDuplicate(indexArray)) {
      const error = new Error(
        'If there are more than one relationships for a table, specify a calling function.'
      );
      console.error(error.message);
      throw error;
    }
  }

  const resolvedArguments = parameters.parameters;
  if (!ignoreSelect) {
    resolvedArguments.select = select<SelectType>(parameters.info);
  }

  const getResolvedArguments = (relation: RelationInfo): ArgumentsType => {
    return {
      ...resolvedArguments,
      ...parameters.parameters,

      where: {
        [relation.relationColumnName]: thisParent?.[relation.parentColumnName],
        ...parameters.parameters.where,
      },
    };
  };

  if (parameters.relationInfo && parameters.parent) {
    for (const relation of parameters.relationInfo) {
      if (parameters.info.parentType.name === relation.parentTableName) {
        if (typeof thisParent?.[relation.parentColumnName] === 'undefined') {
          throw new TypeError(
            `Must call ${relation.parentColumnName} from ${relation.parentTableName}`
          );
        }

        if (
          typeof relation.parentCallingFunction === 'string' &&
          parameters.info.fieldName === relation.parentCallingFunction
        ) {
          return getResolvedArguments(relation);
        }

        if (typeof relation.parentCallingFunction !== 'string') {
          return getResolvedArguments(relation);
        }
      }
    }
  }

  return resolvedArguments;
};

/*
 * In relationships provide index name if it exists.
 * Reference node_modules\.prisma\client\index.d.ts
 * ex. DomainUsers -> Bills created by DomainUser
 * ex. DomainUser.Bill_Bill_CreatedByToDomainUser, relationInfo.relationIndexName = 'Bill_Bill_CreatedByToDomainUser'
 */
export const resolveFindMany = async <ModelType>(
  parameters: ResolveQueryParameters
  // eslint-disable-next-line sonarjs/cognitive-complexity
): Promise<ModelType[]> => {
  if (parameters.relationInfo) {
    for (const relationInfo of parameters.relationInfo) {
      if (relationInfo.parentTableName === parameters.info.parentType.name) {
        const tableMethod =
          relationInfo.parentTableName.charAt(0).toLowerCase() +
          relationInfo.parentTableName.slice(1);

        // @ts-expect-error We're looking for table by parentTableName
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const model = parameters.context.prisma[tableMethod];
        const relationValue =
          parameters.parent?.[relationInfo.parentColumnName];

        if (typeof relationValue === 'undefined') {
          throw new TypeError(
            `Must call ${relationInfo.parentColumnName} from ${relationInfo.parentTableName}`
          );
        }

        // Try parentTable.findUnique().childTable()
        // https://www.prisma.io/docs/guides/performance-and-optimization/query-optimization-performance#solving-the-n1-problem
        try {
          delete parameters.resolvedArguments.where?.[
            relationInfo.relationColumnName
          ];

          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          return model
            .findUnique({
              where: { [relationInfo.parentColumnName]: relationValue },
            })
            [
              typeof relationInfo.relationIndexName === 'string'
                ? relationInfo.relationIndexName
                : parameters.modelName
            ]({
              ...parameters.resolvedArguments,
            }) as ModelType[];
          // If the parentTable -> childTable relationship has no index, fall back on original n + 1 issue.
          // This creates a new SELECT for every parent result
        } catch {
          console.error(
            `Make sure ${relationInfo.parentTableName} has a foreign key constraint on ${parameters.modelName}.`
          );

          // @ts-expect-error This value was deleted above, readd
          parameters.resolvedArguments.where[relationInfo.relationColumnName] =
            relationValue;

          // @ts-expect-error We're looking for table by parentTableName
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          return parameters.context.prisma?.[tableMethod].findMany({
            ...parameters.resolvedArguments,
          }) as ModelType[];
        }
      }
    }
  }

  // If relationship isn't defined, use n + 1 efficiency
  // @ts-expect-error Get table by table name
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return parameters.context.prisma[
    parameters.modelName.charAt(0).toLowerCase() + parameters.modelName.slice(1)
  ].findMany({
    ...parameters.resolvedArguments,
  }) as ModelType[];
};
