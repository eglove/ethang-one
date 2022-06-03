import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { FinanceRecordCreateManyInput } from './finance-record-create-many.input';

@ArgsType()
export class CreateManyFinanceRecordArgs {
  @Field(
    () => {
      return [FinanceRecordCreateManyInput];
    },
    { nullable: false }
  )
  @Type(() => {
    return FinanceRecordCreateManyInput;
  })
  data!: FinanceRecordCreateManyInput[];
}
