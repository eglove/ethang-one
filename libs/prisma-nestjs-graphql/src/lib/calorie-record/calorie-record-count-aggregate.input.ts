import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CalorieRecordCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    calories?: true;

    @Field(() => Boolean, {nullable:true})
    leftForToday?: true;

    @Field(() => Boolean, {nullable:true})
    personId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
