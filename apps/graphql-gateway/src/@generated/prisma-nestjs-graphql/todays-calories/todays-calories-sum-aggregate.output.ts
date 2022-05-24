import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TodaysCaloriesSumAggregate {

    @Field(() => Int, {nullable:true})
    birthday?: number;

    @Field(() => Int, {nullable:true})
    currentCalories?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Float, {nullable:true})
    weight?: number;
}
