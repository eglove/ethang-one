import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CalorieMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    currentCount?: number;

    @Field(() => Int, {nullable:true})
    dailyCalories?: number;

    @Field(() => Int, {nullable:true})
    deficit?: number;

    @Field(() => String, {nullable:true})
    personId?: string;
}
