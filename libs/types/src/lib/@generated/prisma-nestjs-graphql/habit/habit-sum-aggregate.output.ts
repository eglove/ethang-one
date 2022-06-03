import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitSumAggregate {

    @Field(() => Int, {nullable:true})
    dueDate?: number;
}
