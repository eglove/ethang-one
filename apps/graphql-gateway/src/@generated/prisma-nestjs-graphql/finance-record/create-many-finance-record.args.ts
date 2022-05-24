import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordCreateManyInput } from './finance-record-create-many.input';

@ArgsType()
export class CreateManyFinanceRecordArgs {

    @Field(() => [FinanceRecordCreateManyInput], {nullable:false})
    data!: Array<FinanceRecordCreateManyInput>;
}
