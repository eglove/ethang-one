import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordCreateInput } from './finance-record-create.input';

@ArgsType()
export class CreateOneFinanceRecordArgs {

    @Field(() => FinanceRecordCreateInput, {nullable:false})
    data!: FinanceRecordCreateInput;
}
