import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CalorieRecordCountOrderByAggregateInput } from './calorie-record-count-order-by-aggregate.input';
import { CalorieRecordAvgOrderByAggregateInput } from './calorie-record-avg-order-by-aggregate.input';
import { CalorieRecordMaxOrderByAggregateInput } from './calorie-record-max-order-by-aggregate.input';
import { CalorieRecordMinOrderByAggregateInput } from './calorie-record-min-order-by-aggregate.input';
import { CalorieRecordSumOrderByAggregateInput } from './calorie-record-sum-order-by-aggregate.input';

@InputType()
export class CalorieRecordOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    leftForToday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => CalorieRecordCountOrderByAggregateInput, {nullable:true})
    _count?: CalorieRecordCountOrderByAggregateInput;

    @Field(() => CalorieRecordAvgOrderByAggregateInput, {nullable:true})
    _avg?: CalorieRecordAvgOrderByAggregateInput;

    @Field(() => CalorieRecordMaxOrderByAggregateInput, {nullable:true})
    _max?: CalorieRecordMaxOrderByAggregateInput;

    @Field(() => CalorieRecordMinOrderByAggregateInput, {nullable:true})
    _min?: CalorieRecordMinOrderByAggregateInput;

    @Field(() => CalorieRecordSumOrderByAggregateInput, {nullable:true})
    _sum?: CalorieRecordSumOrderByAggregateInput;
}
