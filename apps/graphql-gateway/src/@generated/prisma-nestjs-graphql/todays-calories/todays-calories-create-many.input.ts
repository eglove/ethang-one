import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class TodaysCaloriesCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    birthday!: number;

    @Field(() => Int, {nullable:false})
    currentCalories!: number;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => Float, {nullable:false})
    weight!: number;
}
