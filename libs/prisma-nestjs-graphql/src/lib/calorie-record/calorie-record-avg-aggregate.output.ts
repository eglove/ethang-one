import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CalorieRecordAvgAggregate {

    @Field(() => Float, {nullable:true})
    calories?: number;

    @Field(() => Float, {nullable:true})
    leftForToday?: number;
}
