import { Prisma, PrismaClient } from '@ethang-one/prisma-connection';
import { arrayHasDuplicate } from '@ethang-one/util-typescript';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';

import { Context } from '../../../main';
import { RelationInfo } from '../../util/prisma';

export type ArgumentsTypeExtended<ArgumentsType> = ArgumentsType & {
  where: Record<string, unknown>;
};

export type IncomingQueryArguments<ArgumentsType> = {
  isFindMany: boolean;
  parent: Record<string, unknown> | undefined;
  arguments_: ArgumentsTypeExtended<ArgumentsType>;
  context: Context;
  info: GraphQLResolveInfo;
};

export class GraphQlResolver<ArgumentsType, ModelType, ReturnType, SelectType> {
  public action: Prisma.PrismaAction;
  public incomingQueryArguments: IncomingQueryArguments<ArgumentsType>;
  public incomingQueryFieldName!: keyof PrismaClient;
  public incomingQueryModelName!: Prisma.ModelName;
  public relationInfo?: RelationInfo[];
  public resolvedArguments?: ArgumentsTypeExtended<ArgumentsType>;
  public select!: SelectType;

  constructor(
    action: Prisma.PrismaAction,
    incomingQueryArguments: IncomingQueryArguments<ArgumentsType>
  ) {
    this.action = action;
    this.incomingQueryArguments = incomingQueryArguments;

    this.setFieldAndModelNames();
    this.setSelect();
    this.setResolvedArguments();
  }

  public runAction = async (): Promise<ReturnType> => {
    switch (this.action) {
      case 'findUnique': {
        return this.findUnique() as unknown as ReturnType;
      }

      case 'findMany': {
        return this.findMany() as unknown as ReturnType;
      }

      default: {
        throw new Error(`Invalid action. ${this.action}`);
      }
    }
  };

  private readonly setFieldAndModelNames = (): void => {
    this.incomingQueryModelName = `${this.incomingQueryArguments.info.fieldName
      .charAt(0)
      .toUpperCase()}${this.incomingQueryArguments.info.fieldName.slice(
      1
    )}` as Prisma.ModelName;
    this.incomingQueryFieldName = this.incomingQueryArguments.info
      .fieldName as keyof PrismaClient;

    if (this.incomingQueryArguments.isFindMany) {
      this.incomingQueryModelName = this.incomingQueryModelName
        .toString()
        .slice(0, -1) as Prisma.ModelName;
      this.incomingQueryFieldName = this.incomingQueryFieldName.slice(
        0,
        -1
      ) as keyof PrismaClient;
    }

    if (typeof Prisma.ModelName[this.incomingQueryModelName] !== 'string') {
      throw new TypeError(
        `Model ${this.incomingQueryModelName} does not exist.`
      );
    }
  };

  private readonly setResolvedArguments = (): void => {
    this.hasDuplicateRelationship();
    const parentGraph = this.incomingQueryArguments.parent;

    if (
      typeof this.relationInfo !== 'undefined' &&
      typeof this.incomingQueryArguments.parent !== 'undefined'
    ) {
      for (const relation of this.relationInfo) {
        if (
          this.incomingQueryArguments.info.parentType.name ===
          relation.parentTableName
        ) {
          if (typeof parentGraph?.[relation.parentColumnName] === 'undefined') {
            throw new TypeError(
              `Must call ${relation.parentColumnName} from ${relation.parentTableName}`
            );
          }

          this.resolvedArguments = this.getResolvedArguments(
            parentGraph,
            relation
          );
        }
      }
    }
  };

  private readonly findMany = async (): Promise<ModelType[]> => {
    if (Array.isArray(this.relationInfo) && this.relationInfo.length > 0) {
      for (const relation of this.relationInfo) {
        if (
          relation.parentTableName ===
          this.incomingQueryArguments.info.parentType.name
        ) {
          const model =
            this.incomingQueryArguments.context.ethangDb[
              this.incomingQueryFieldName
            ];

          const relationValue =
            this.incomingQueryArguments.parent?.[relation.parentColumnName];

          if (typeof relationValue !== 'undefined') {
            throw new TypeError(
              `Must call ${relation.parentColumnName} from ${relation.parentTableName}`
            );
          }

          // Try parentTable.findUnique().childTable()
          // https://www.prisma.io/docs/guides/performance-and-optimization/query-optimization-performance#solving-the-n1-problem
          try {
            delete this.resolvedArguments?.where[relation.relationColumnName];

            return (
              // Try block will check if findUnique here exists.
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              model
                .findUnique({
                  where: {
                    [relation.parentColumnName]: relationValue,
                  },
                })
                [
                  typeof relation.relationIndexName === 'string'
                    ? relation.relationIndexName
                    : this.incomingQueryModelName
                ]({
                  ...this.resolvedArguments,
                }) as ModelType[]
            );
            // If the parentTable -> childTable relationship has no index, fall back on original n + 1 issue.
            // This creates a new SELECT for every parent result
          } catch {
            // This value was deleted above, readd
            // @ts-expect-error Resolved arguments returns a where in case of relationships.
            this.resolvedArguments?.where[relation.relationColumnName] =
              relationValue;

            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            return this.incomingQueryArguments.context.ethangDb[
              this.incomingQueryFieldName
            ].findMany({
              ...this.resolvedArguments,
            }) as ModelType[];
          }
        }
      }
    }

    // If relationship isn't defined, use n + 1 efficiency
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return this.incomingQueryArguments.context.ethangDb[
      this.incomingQueryFieldName
    ].findMany({
      ...this.resolvedArguments,
    }) as ModelType[];
  };

  private readonly findUnique = async (): Promise<ModelType | undefined> => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
    return this.incomingQueryArguments.context.ethangDb[
      this.incomingQueryFieldName
    ].findUnique({
      ...this.resolvedArguments,
    });
  };

  private readonly setSelect = (): void => {
    const prismaDmmf = Prisma.dmmf;

    const { select } = new PrismaSelect(this.incomingQueryArguments.info, {
      dmmf: [prismaDmmf],
    }).value as { select: SelectType };

    this.select = select;
  };

  private readonly getResolvedArguments = (
    parentGraph: Record<string, unknown> | undefined,
    relation: RelationInfo
  ): ArgumentsTypeExtended<ArgumentsType> => {
    return {
      ...this.resolvedArguments,
      ...this.incomingQueryArguments.arguments_,
      where: {
        [relation.relationColumnName]: parentGraph?.[relation.parentColumnName],
        ...this.incomingQueryArguments.arguments_.where,
      },
    };
  };

  private readonly hasDuplicateRelationship = (): void => {
    if (
      Array.isArray(this.relationInfo) &&
      this.relationInfo.length > 0 &&
      typeof this.incomingQueryArguments.parent !== 'undefined'
    ) {
      const indexArray = this.relationInfo.map(relation => {
        if (typeof relation.parentCallingFunction === 'string') {
          return `${relation.parentTableName}${relation.parentCallingFunction}`;
        }

        return relation.parentTableName;
      });

      if (arrayHasDuplicate(indexArray)) {
        const error = new Error(
          'If there are more than one relationships for a table, specify a calling function.'
        );
        console.error(error.message);
        throw error;
      }
    }
  };
}
