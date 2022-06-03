import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { FinanceRecordOrderByWithRelationInput } from './finance-record-order-by-with-relation.input';
import { FinanceRecordScalarFieldEnum } from './finance-record-scalar-field.enum';
import { FinanceRecordWhereInput } from './finance-record-where.input';
import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';

@ArgsType()
export class FindManyFinanceRecordArgs {
  @Field(
    () => {
      return FinanceRecordWhereInput;
    },
    { nullable: true }
  )
  @Type(() => {
    return FinanceRecordWhereInput;
  })
  where?: FinanceRecordWhereInput;

  @Field(
    () => {
      return [FinanceRecordOrderByWithRelationInput];
    },
    { nullable: true }
  )
  orderBy?: FinanceRecordOrderByWithRelationInput[];

  @Field(
    () => {
      return FinanceRecordWhereUniqueInput;
    },
    { nullable: true }
  )
  cursor?: FinanceRecordWhereUniqueInput;

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
      return [FinanceRecordScalarFieldEnum];
    },
    { nullable: true }
  )
  distinct?: Array<keyof typeof FinanceRecordScalarFieldEnum>;
}
