import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CalorieRecordSumAggregate {

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Int, {nullable:true})
    leftForToday?: number;
}
