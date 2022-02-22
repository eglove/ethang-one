import { arrayHasDuplicate } from '@ethang-one/util-typescript';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';

import { Context } from '../../main';

export interface RelationInfo {
  parentCallingFunction?: string;
  parentColumnName: string;
  parentTableName: string;
  relationColumnName: string;
  relationIndexName?: string;
}

interface ResolvedArguments<SelectType> {
  rejectOnNotFound?: Prisma.RejectOnNotFound | undefined;
  // Needs to match Prisma source
  // eslint-disable-next-line @typescript-eslint/ban-types
  select?: SelectType | undefined | null;
  where?: Record<string, unknown> | undefined;
}

interface ResolveParentParameters<ArgumentsType> {
  arguments_: ArgumentsType;
  info: GraphQLResolveInfo;
  parent?: Record<string, unknown>;
  relationInfo?: RelationInfo[];
}

interface ResolveQueryParameters {
  context: Context;
  info: GraphQLResolveInfo;
  modelName: string;
  parent: Record<string, unknown> | undefined;
  relationInfo?: RelationInfo[];
  resolvedArguments: ResolvedArguments<unknown>;
}

export const select = <Type>(info: GraphQLResolveInfo): Type => {
  const prismaDmmf = Prisma.dmmf;

  const { select } = new PrismaSelect(info, {
    dmmf: [prismaDmmf],
  }).value as { select: Type };

  return select;
};

export const resolveArguments = <
  ArgumentsType extends ResolvedArguments<SelectType>,
  SelectType
>(
  parameters: ResolveParentParameters<ArgumentsType>,
  ignoreSelect = false
): ArgumentsType => {
  const parentGraph: Record<string, unknown> | undefined = parameters.parent;

  // If a table has more than one relationship to the same table,
  // A calling function must be provided.
  // Otherwise, throw error on duplicate relationships.
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

  // Add select argument
  let resolvedArguments = parameters.arguments_;
  if (!ignoreSelect) {
    resolvedArguments.select = select<SelectType>(parameters.info);
  }

  const getResolvedArguments = (relation: RelationInfo): ArgumentsType => {
    resolvedArguments = {
      ...resolvedArguments,
      ...parameters.arguments_,
      where: {
        [relation.relationColumnName]: parentGraph?.[relation.parentColumnName],
        ...parameters.arguments_.where,
      },
    };

    return resolvedArguments;
  };

  if (
    typeof parameters.relationInfo !== 'undefined' &&
    typeof parameters.parent !== 'undefined'
  ) {
    for (const relation of parameters.relationInfo) {
      if (parameters.info.parentType.name === relation.parentTableName) {
        if (typeof parentGraph?.[relation.parentColumnName] === 'undefined') {
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
    for (const relation of parameters.relationInfo) {
      if (relation.parentTableName === parameters.info.parentType.name) {
        // @ts-expect-error We're looking for table by parentTableName
        const model = parameters.context.ethangDb[
          relation.parentTableName.charAt(0).toLowerCase() +
            relation.parentTableName.slice(1)
        ] as {
          // @ts-expect-error This is just an assumption that the table has a findUnique method
          findUnique: ({ where: any }) => typeof parameters.modelName;
        };

        // @ts-expect-error We're looking for a column by the columnName
        const relationValue = parameters.parent[relation.parentColumnName];

        if (typeof relationValue === 'undefined') {
          throw new TypeError(
            `Must call ${relation.parentColumnName} from ${relation.parentTableName}`
          );
        }

        // Try parentTable.findUnique().childTable()
        // https://www.prisma.io/docs/guides/performance-and-optimization/query-optimization-performance#solving-the-n1-problem
        try {
          // @ts-expect-error Resolved arguments returns a where if a relationship exists
          delete parameters.resolvedArguments.where[
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            relation.relationColumnName
          ];

          return (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            model
              .findUnique({
                where: {
                  [relation.parentColumnName]: relationValue,
                },
              })
              [
                // @ts-expect-error Allow to search by column using either string
                typeof relation.relationIndexName === 'string'
                  ? relation.relationIndexName
                  : parameters.modelName
              ]({
                ...parameters.resolvedArguments,
              }) as ModelType[]
          );
          // If the parentTable -> childTable relationship has no index, fall back on original n + 1 issue.
          // This creates a new SELECT for every parent result
        } catch {
          console.error(
            `Make sure ${relation.parentTableName} has a foreign key constraint on ${parameters.modelName}.`
          );

          // This value was deleted above, readd
          // @ts-expect-error Resolved arguments returns a where in case of relationships.
          parameters.resolvedArguments.where[relation.relationColumnName] =
            relationValue;

          // @ts-expect-error Get table by table name
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          return parameters.context.ethangDb[
            parameters.modelName.charAt(0).toLowerCase() +
              parameters.modelName.slice(1)
          ].findMany({
            ...parameters.resolvedArguments,
          }) as ModelType[];
        }
      }
    }
  }

  // If relationship isn't defined, use n + 1 efficiency
  // @ts-expect-error Get table by table name
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return parameters.context.ethangDb[
    parameters.modelName.charAt(0).toLowerCase() + parameters.modelName.slice(1)
  ].findMany({
    ...parameters.resolvedArguments,
  }) as ModelType[];
};
