import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CalorieCountOrderByAggregateInput } from './calorie-count-order-by-aggregate.input';
import { CalorieAvgOrderByAggregateInput } from './calorie-avg-order-by-aggregate.input';
import { CalorieMaxOrderByAggregateInput } from './calorie-max-order-by-aggregate.input';
import { CalorieMinOrderByAggregateInput } from './calorie-min-order-by-aggregate.input';
import { CalorieSumOrderByAggregateInput } from './calorie-sum-order-by-aggregate.input';

@InputType()
export class CalorieOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dailyCalories?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deficit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => CalorieCountOrderByAggregateInput, {nullable:true})
    _count?: CalorieCountOrderByAggregateInput;

    @Field(() => CalorieAvgOrderByAggregateInput, {nullable:true})
    _avg?: CalorieAvgOrderByAggregateInput;

    @Field(() => CalorieMaxOrderByAggregateInput, {nullable:true})
    _max?: CalorieMaxOrderByAggregateInput;

    @Field(() => CalorieMinOrderByAggregateInput, {nullable:true})
    _min?: CalorieMinOrderByAggregateInput;

    @Field(() => CalorieSumOrderByAggregateInput, {nullable:true})
    _sum?: CalorieSumOrderByAggregateInput;
}
