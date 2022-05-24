import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FinanceRecordAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    currentValue?: true;

    @Field(() => Boolean, {nullable:true})
    recordedDate?: true;
}
