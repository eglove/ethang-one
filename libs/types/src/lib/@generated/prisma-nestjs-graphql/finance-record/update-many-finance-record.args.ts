import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordUpdateManyMutationInput } from './finance-record-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FinanceRecordWhereInput } from './finance-record-where.input';

@ArgsType()
export class UpdateManyFinanceRecordArgs {

    @Field(() => FinanceRecordUpdateManyMutationInput, {nullable:false})
    @Type(() => FinanceRecordUpdateManyMutationInput)
    data!: FinanceRecordUpdateManyMutationInput;

    @Field(() => FinanceRecordWhereInput, {nullable:true})
    @Type(() => FinanceRecordWhereInput)
    where?: FinanceRecordWhereInput;
}
