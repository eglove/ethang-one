import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TodaysCaloriesAvgAggregate {

    @Field(() => Float, {nullable:true})
    birthday?: number;

    @Field(() => Float, {nullable:true})
    currentCalories?: number;

    @Field(() => Float, {nullable:true})
    height?: number;

    @Field(() => Float, {nullable:true})
    weight?: number;
}
