import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class HabitWhereInput {
  @Field(
    () => {
      return [HabitWhereInput];
    },
    { nullable: true }
  )
  AND?: HabitWhereInput[];

  @Field(
    () => {
      return [HabitWhereInput];
    },
    { nullable: true }
  )
  OR?: HabitWhereInput[];

  @Field(
    () => {
      return [HabitWhereInput];
    },
    { nullable: true }
  )
  NOT?: HabitWhereInput[];

  @Field(
    () => {
      return StringFilter;
    },
    { nullable: true }
  )
  id?: StringFilter;

  @Field(
    () => {
      return StringFilter;
    },
    { nullable: true }
  )
  name?: StringFilter;

  @Field(
    () => {
      return StringFilter;
    },
    { nullable: true }
  )
  recurInterval?: StringFilter;

  @Field(
    () => {
      return DateTimeFilter;
    },
    { nullable: true }
  )
  dueDate?: DateTimeFilter;
}
