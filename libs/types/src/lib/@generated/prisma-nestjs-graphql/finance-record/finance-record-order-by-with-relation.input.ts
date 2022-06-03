import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FinanceRecordOrderByWithRelationInput {
  @Field(
    () => {
      return SortOrder;
    },
    { nullable: true }
  )
  id?: keyof typeof SortOrder;

  @Field(
    () => {
      return SortOrder;
    },
    { nullable: true }
  )
  accountName?: keyof typeof SortOrder;

  @Field(
    () => {
      return SortOrder;
    },
    { nullable: true }
  )
  currentValue?: keyof typeof SortOrder;

  @Field(
    () => {
      return SortOrder;
    },
    { nullable: true }
  )
  recordedDate?: keyof typeof SortOrder;
}
