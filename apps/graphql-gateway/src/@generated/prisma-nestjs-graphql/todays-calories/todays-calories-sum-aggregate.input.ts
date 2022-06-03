import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TodaysCaloriesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    currentCalories?: true;

    @Field(() => Boolean, {nullable:true})
    height?: true;

    @Field(() => Boolean, {nullable:true})
    weight?: true;
}
