import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CalorieAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    currentCount?: true;

    @Field(() => Boolean, {nullable:true})
    dailyCalories?: true;

    @Field(() => Boolean, {nullable:true})
    deficit?: true;
}
