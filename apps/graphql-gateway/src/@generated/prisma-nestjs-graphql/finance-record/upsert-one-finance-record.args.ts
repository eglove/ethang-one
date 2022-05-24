import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';
import { FinanceRecordCreateInput } from './finance-record-create.input';
import { FinanceRecordUpdateInput } from './finance-record-update.input';

@ArgsType()
export class UpsertOneFinanceRecordArgs {

    @Field(() => FinanceRecordWhereUniqueInput, {nullable:false})
    where!: FinanceRecordWhereUniqueInput;

    @Field(() => FinanceRecordCreateInput, {nullable:false})
    create!: FinanceRecordCreateInput;

    @Field(() => FinanceRecordUpdateInput, {nullable:false})
    update!: FinanceRecordUpdateInput;
}
