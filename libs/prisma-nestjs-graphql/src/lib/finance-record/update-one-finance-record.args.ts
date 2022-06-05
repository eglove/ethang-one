import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordUpdateInput } from './finance-record-update.input';
import { Type } from 'class-transformer';
import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';

@ArgsType()
export class UpdateOneFinanceRecordArgs {

    @Field(() => FinanceRecordUpdateInput, {nullable:false})
    @Type(() => FinanceRecordUpdateInput)
    data!: FinanceRecordUpdateInput;

    @Field(() => FinanceRecordWhereUniqueInput, {nullable:false})
    @Type(() => FinanceRecordWhereUniqueInput)
    where!: FinanceRecordWhereUniqueInput;
}
