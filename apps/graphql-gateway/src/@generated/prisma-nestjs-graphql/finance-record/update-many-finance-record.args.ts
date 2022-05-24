import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordUpdateManyMutationInput } from './finance-record-update-many-mutation.input';
import { FinanceRecordWhereInput } from './finance-record-where.input';

@ArgsType()
export class UpdateManyFinanceRecordArgs {

    @Field(() => FinanceRecordUpdateManyMutationInput, {nullable:false})
    data!: FinanceRecordUpdateManyMutationInput;

    @Field(() => FinanceRecordWhereInput, {nullable:true})
    where?: FinanceRecordWhereInput;
}
