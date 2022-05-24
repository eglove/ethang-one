import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    dueDate?: true;
}
