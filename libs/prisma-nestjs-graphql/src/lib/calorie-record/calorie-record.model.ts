import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Person } from '../person/person.model';

@ObjectType()
export class CalorieRecord {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    calories!: number;

    @Field(() => Int, {nullable:true})
    leftForToday!: number | null;

    @Field(() => Person, {nullable:false})
    Person?: Person;

    @Field(() => String, {nullable:false})
    personId!: string;
}
