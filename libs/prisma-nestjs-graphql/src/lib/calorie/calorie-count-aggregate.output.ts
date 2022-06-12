import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CalorieCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    currentCount!: number;

    @Field(() => Int, {nullable:false})
    dailyCalories!: number;

    @Field(() => Int, {nullable:false})
    deficit!: number;

    @Field(() => Int, {nullable:false})
    personId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
