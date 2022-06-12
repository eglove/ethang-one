import { GraphQLResolveInfo, SelectionNode, SelectionSetNode } from 'graphql';

type FieldData = {
  name: {
    kind: string;
    loc: Record<string, string>;
    value: string;
  };
  selectionSet?: SelectionSetNode;
};

interface SelectArguments {
  [name: string]: boolean | SelectArguments;
}

export class NestSelect {
  public select: SelectArguments;

  private readonly initialSelections: readonly SelectionNode[] | undefined;

  constructor(private readonly graphQLInfo: GraphQLResolveInfo) {
    this.initialSelections =
      this.graphQLInfo.fieldNodes[0].selectionSet?.selections;
    this.select = {};

    if (typeof this.initialSelections !== 'undefined') {
      this.select = this.setSelect(this.initialSelections);
    }
  }

  private setSelect(selections: readonly SelectionNode[]): SelectArguments {
    const select: SelectArguments = {};

    if (Array.isArray(selections)) {
      for (const selection of selections) {
        const fieldData = selection as unknown as FieldData;

        if (typeof fieldData.selectionSet === 'undefined') {
          select[fieldData.name.value] = true;
        } else {
          select[fieldData.name.value] = {
            select: this.setSelect(fieldData.selectionSet.selections),
          };
        }
      }
    }

    delete select.__typename;
    return select;
  }
}

export const nestSelect = (info: GraphQLResolveInfo): SelectArguments => {
  return new NestSelect(info).select;
};
