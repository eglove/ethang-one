import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HabitOrderByWithRelationInput {
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
  name?: keyof typeof SortOrder;

  @Field(
    () => {
      return SortOrder;
    },
    { nullable: true }
  )
  recurInterval?: keyof typeof SortOrder;

  @Field(
    () => {
      return SortOrder;
    },
    { nullable: true }
  )
  dueDate?: keyof typeof SortOrder;
}
