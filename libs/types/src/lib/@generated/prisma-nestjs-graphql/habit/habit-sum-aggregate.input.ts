import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    dueDate?: true;
}
