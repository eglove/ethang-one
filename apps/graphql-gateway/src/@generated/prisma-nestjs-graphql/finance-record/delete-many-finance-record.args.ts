import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordWhereInput } from './finance-record-where.input';

@ArgsType()
export class DeleteManyFinanceRecordArgs {

    @Field(() => FinanceRecordWhereInput, {nullable:true})
    where?: FinanceRecordWhereInput;
}
