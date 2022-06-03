import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class FinanceRecordWhereInput {
  @Field(
    () => {
      return [FinanceRecordWhereInput];
    },
    { nullable: true }
  )
  AND?: FinanceRecordWhereInput[];

  @Field(
    () => {
      return [FinanceRecordWhereInput];
    },
    { nullable: true }
  )
  OR?: FinanceRecordWhereInput[];

  @Field(
    () => {
      return [FinanceRecordWhereInput];
    },
    { nullable: true }
  )
  NOT?: FinanceRecordWhereInput[];

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
  accountName?: StringFilter;

  @Field(
    () => {
      return FloatFilter;
    },
    { nullable: true }
  )
  currentValue?: FloatFilter;

  @Field(
    () => {
      return DateTimeFilter;
    },
    { nullable: true }
  )
  recordedDate?: DateTimeFilter;
}
