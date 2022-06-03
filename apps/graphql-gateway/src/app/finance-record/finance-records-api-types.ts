import { Field, ObjectType } from '@nestjs/graphql';

export type FinanceGraphData = {
  financeData: Array<Record<string, string | number>>;
  uniqueAccountNames: string[];
};

const sampleObject = {
  financeData: [
    {
      number: 0,
      string: 'string',
    },
  ],
  uniqueAccountNames: 'hello',
};

@ObjectType()
export class FinanceGraphDataObject {
  @Field((): typeof sampleObject => {
    return sampleObject;
  })
  financeData!: Array<Record<string, string | number>>;

  @Field(() => {
    return [String];
  })
  uniqueAccountNames!: string[];
}
