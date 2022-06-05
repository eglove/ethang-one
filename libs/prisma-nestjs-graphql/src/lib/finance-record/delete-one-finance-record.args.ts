import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneFinanceRecordArgs {

    @Field(() => FinanceRecordWhereUniqueInput, {nullable:false})
    @Type(() => FinanceRecordWhereUniqueInput)
    where!: FinanceRecordWhereUniqueInput;
}
