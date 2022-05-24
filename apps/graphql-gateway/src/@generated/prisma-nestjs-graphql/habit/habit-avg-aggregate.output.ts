import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HabitAvgAggregate {

    @Field(() => Float, {nullable:true})
    dueDate?: number;
}
