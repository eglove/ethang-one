import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Person } from '../person/person.model';

@ObjectType()
export class Calorie {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    currentCount!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    dailyCalories!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    deficit!: number;

    @Field(() => Person, {nullable:false})
    Person?: Person;

    @Field(() => String, {nullable:false})
    personId!: string;
}
