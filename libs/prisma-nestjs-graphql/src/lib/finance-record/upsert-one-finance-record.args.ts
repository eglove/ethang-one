import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';
import { Type } from 'class-transformer';
import { FinanceRecordCreateInput } from './finance-record-create.input';
import { FinanceRecordUpdateInput } from './finance-record-update.input';

@ArgsType()
export class UpsertOneFinanceRecordArgs {

    @Field(() => FinanceRecordWhereUniqueInput, {nullable:false})
    @Type(() => FinanceRecordWhereUniqueInput)
    where!: FinanceRecordWhereUniqueInput;

    @Field(() => FinanceRecordCreateInput, {nullable:false})
    @Type(() => FinanceRecordCreateInput)
    create!: FinanceRecordCreateInput;

    @Field(() => FinanceRecordUpdateInput, {nullable:false})
    @Type(() => FinanceRecordUpdateInput)
    update!: FinanceRecordUpdateInput;
}
