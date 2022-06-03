import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordCreateManyInput } from './finance-record-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFinanceRecordArgs {

    @Field(() => [FinanceRecordCreateManyInput], {nullable:false})
    @Type(() => FinanceRecordCreateManyInput)
    data!: Array<FinanceRecordCreateManyInput>;
}
