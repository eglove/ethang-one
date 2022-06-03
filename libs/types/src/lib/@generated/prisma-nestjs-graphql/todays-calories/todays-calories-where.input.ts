import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TodaysCaloriesWhereInput {
  @Field(
    () => {
      return [TodaysCaloriesWhereInput];
    },
    { nullable: true }
  )
  AND?: TodaysCaloriesWhereInput[];

  @Field(
    () => {
      return [TodaysCaloriesWhereInput];
    },
    { nullable: true }
  )
  OR?: TodaysCaloriesWhereInput[];

  @Field(
    () => {
      return [TodaysCaloriesWhereInput];
    },
    { nullable: true }
  )
  NOT?: TodaysCaloriesWhereInput[];

  @Field(
    () => {
      return StringFilter;
    },
    { nullable: true }
  )
  id?: StringFilter;

  @Field(
    () => {
      return DateTimeFilter;
    },
    { nullable: true }
  )
  birthday?: DateTimeFilter;

  @Field(
    () => {
      return IntFilter;
    },
    { nullable: true }
  )
  currentCalories?: IntFilter;

  @Field(
    () => {
      return IntFilter;
    },
    { nullable: true }
  )
  height?: IntFilter;

  @Field(
    () => {
      return FloatFilter;
    },
    { nullable: true }
  )
  weight?: FloatFilter;
}
