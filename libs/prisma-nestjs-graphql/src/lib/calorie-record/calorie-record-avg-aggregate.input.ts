import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CalorieRecordAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    calories?: true;

    @Field(() => Boolean, {nullable:true})
    leftForToday?: true;
}
