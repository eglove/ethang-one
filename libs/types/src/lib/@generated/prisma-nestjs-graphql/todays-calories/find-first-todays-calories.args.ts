import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { TodaysCaloriesOrderByWithRelationInput } from './todays-calories-order-by-with-relation.input';
import { TodaysCaloriesScalarFieldEnum } from './todays-calories-scalar-field.enum';
import { TodaysCaloriesWhereInput } from './todays-calories-where.input';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';

@ArgsType()
export class FindFirstTodaysCaloriesArgs {
  @Field(
    () => {
      return TodaysCaloriesWhereInput;
    },
    { nullable: true }
  )
  @Type(() => {
    return TodaysCaloriesWhereInput;
  })
  where?: TodaysCaloriesWhereInput;

  @Field(
    () => {
      return [TodaysCaloriesOrderByWithRelationInput];
    },
    { nullable: true }
  )
  orderBy?: TodaysCaloriesOrderByWithRelationInput[];

  @Field(
    () => {
      return TodaysCaloriesWhereUniqueInput;
    },
    { nullable: true }
  )
  cursor?: TodaysCaloriesWhereUniqueInput;

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
      return [TodaysCaloriesScalarFieldEnum];
    },
    { nullable: true }
  )
  distinct?: Array<keyof typeof TodaysCaloriesScalarFieldEnum>;
}
