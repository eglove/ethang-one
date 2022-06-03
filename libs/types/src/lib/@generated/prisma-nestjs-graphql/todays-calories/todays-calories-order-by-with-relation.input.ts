import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TodaysCaloriesOrderByWithRelationInput {
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
  birthday?: keyof typeof SortOrder;

  @Field(
    () => {
      return SortOrder;
    },
    { nullable: true }
  )
  currentCalories?: keyof typeof SortOrder;

  @Field(
    () => {
      return SortOrder;
    },
    { nullable: true }
  )
  height?: keyof typeof SortOrder;

  @Field(
    () => {
      return SortOrder;
    },
    { nullable: true }
  )
  weight?: keyof typeof SortOrder;
}
