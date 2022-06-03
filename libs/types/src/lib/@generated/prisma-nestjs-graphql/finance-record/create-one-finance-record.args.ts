import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { FinanceRecordCreateInput } from './finance-record-create.input';

@ArgsType()
export class CreateOneFinanceRecordArgs {
  @Field(
    () => {
      return FinanceRecordCreateInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return FinanceRecordCreateInput;
  })
  data!: FinanceRecordCreateInput;
}
