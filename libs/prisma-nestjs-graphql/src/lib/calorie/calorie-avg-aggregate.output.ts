import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CalorieAvgAggregate {

    @Field(() => Float, {nullable:true})
    currentCount?: number;

    @Field(() => Float, {nullable:true})
    dailyCalories?: number;

    @Field(() => Float, {nullable:true})
    deficit?: number;
}
