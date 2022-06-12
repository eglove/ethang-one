import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FinanceRecordMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    accountName?: true;

    @Field(() => Boolean, {nullable:true})
    currentValue?: true;

    @Field(() => Boolean, {nullable:true})
    recordedDate?: true;
}
