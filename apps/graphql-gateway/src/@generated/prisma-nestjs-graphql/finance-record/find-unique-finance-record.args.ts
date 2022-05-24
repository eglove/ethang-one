import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';

@ArgsType()
export class FindUniqueFinanceRecordArgs {

    @Field(() => FinanceRecordWhereUniqueInput, {nullable:false})
    where!: FinanceRecordWhereUniqueInput;
}
