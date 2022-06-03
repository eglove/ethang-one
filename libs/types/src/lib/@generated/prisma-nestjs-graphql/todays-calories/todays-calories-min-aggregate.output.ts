import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TodaysCaloriesMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => Int, {nullable:true})
    currentCalories?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Float, {nullable:true})
    weight?: number;
}
