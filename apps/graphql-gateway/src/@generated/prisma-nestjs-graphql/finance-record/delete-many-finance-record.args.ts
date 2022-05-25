import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordWhereInput } from './finance-record-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFinanceRecordArgs {

    @Field(() => FinanceRecordWhereInput, {nullable:true})
    @Type(() => FinanceRecordWhereInput)
    where?: FinanceRecordWhereInput;
}
