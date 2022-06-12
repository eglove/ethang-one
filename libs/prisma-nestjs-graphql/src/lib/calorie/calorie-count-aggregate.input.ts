import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CalorieCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    currentCount?: true;

    @Field(() => Boolean, {nullable:true})
    dailyCalories?: true;

    @Field(() => Boolean, {nullable:true})
    deficit?: true;

    @Field(() => Boolean, {nullable:true})
    personId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
