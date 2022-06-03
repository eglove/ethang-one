import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { HabitOrderByWithRelationInput } from './habit-order-by-with-relation.input';
import { HabitScalarFieldEnum } from './habit-scalar-field.enum';
import { HabitWhereInput } from './habit-where.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@ArgsType()
export class FindManyHabitArgs {
  @Field(
    () => {
      return HabitWhereInput;
    },
    { nullable: true }
  )
  @Type(() => {
    return HabitWhereInput;
  })
  where?: HabitWhereInput;

  @Field(
    () => {
      return [HabitOrderByWithRelationInput];
    },
    { nullable: true }
  )
  orderBy?: HabitOrderByWithRelationInput[];

  @Field(
    () => {
      return HabitWhereUniqueInput;
    },
    { nullable: true }
  )
  cursor?: HabitWhereUniqueInput;

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  take?: number;

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  skip?: number;

  @Field(
    () => {
      return [HabitScalarFieldEnum];
    },
    { nullable: true }
  )
  distinct?: Array<keyof typeof HabitScalarFieldEnum>;
}
