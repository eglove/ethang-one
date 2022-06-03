import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { NestedDateTimeFilter } from './nested-date-time-filter.input';

@InputType()
export class DateTimeFilter {
  @Field(
    () => {
      return Date;
    },
    { nullable: true }
  )
  equals?: Date | string;

  @Field(
    () => {
      return [Date];
    },
    { nullable: true }
  )
  in?: Date[] | string[];

  @Field(
    () => {
      return [Date];
    },
    { nullable: true }
  )
  notIn?: Date[] | string[];

  @Field(
    () => {
      return Date;
    },
    { nullable: true }
  )
  lt?: Date | string;

  @Field(
    () => {
      return Date;
    },
    { nullable: true }
  )
  lte?: Date | string;

  @Field(
    () => {
      return Date;
    },
    { nullable: true }
  )
  gt?: Date | string;

  @Field(
    () => {
      return Date;
    },
    { nullable: true }
  )
  gte?: Date | string;

  @Field(
    () => {
      return NestedDateTimeFilter;
    },
    { nullable: true }
  )
  not?: NestedDateTimeFilter;
}
