import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    recurInterval!: number;

    @Field(() => Int, {nullable:false})
    dueDate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
