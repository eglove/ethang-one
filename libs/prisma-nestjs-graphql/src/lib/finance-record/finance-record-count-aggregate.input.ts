import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FinanceRecordCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    accountName?: true;

    @Field(() => Boolean, {nullable:true})
    currentValue?: true;

    @Field(() => Boolean, {nullable:true})
    recordedDate?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}