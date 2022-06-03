import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';

@ArgsType()
export class FindUniqueFinanceRecordArgs {
  @Field(
    () => {
      return FinanceRecordWhereUniqueInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return FinanceRecordWhereUniqueInput;
  })
  where!: FinanceRecordWhereUniqueInput;
}
