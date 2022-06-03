import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordCreateInput } from './finance-record-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFinanceRecordArgs {

    @Field(() => FinanceRecordCreateInput, {nullable:false})
    @Type(() => FinanceRecordCreateInput)
    data!: FinanceRecordCreateInput;
}
