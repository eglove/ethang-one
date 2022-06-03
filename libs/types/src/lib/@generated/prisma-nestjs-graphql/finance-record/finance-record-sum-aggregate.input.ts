import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FinanceRecordSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    currentValue?: true;
}
