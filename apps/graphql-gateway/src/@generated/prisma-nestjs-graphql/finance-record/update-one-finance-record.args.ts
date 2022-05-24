import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordUpdateInput } from './finance-record-update.input';
import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';

@ArgsType()
export class UpdateOneFinanceRecordArgs {

    @Field(() => FinanceRecordUpdateInput, {nullable:false})
    data!: FinanceRecordUpdateInput;

    @Field(() => FinanceRecordWhereUniqueInput, {nullable:false})
    where!: FinanceRecordWhereUniqueInput;
}
