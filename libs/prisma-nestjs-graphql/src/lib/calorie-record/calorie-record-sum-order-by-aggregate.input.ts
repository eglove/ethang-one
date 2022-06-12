import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CalorieRecordSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    leftForToday?: keyof typeof SortOrder;
}
