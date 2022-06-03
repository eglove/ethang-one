import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TodaysCaloriesCountOrderByAggregateInput } from './todays-calories-count-order-by-aggregate.input';
import { TodaysCaloriesAvgOrderByAggregateInput } from './todays-calories-avg-order-by-aggregate.input';
import { TodaysCaloriesMaxOrderByAggregateInput } from './todays-calories-max-order-by-aggregate.input';
import { TodaysCaloriesMinOrderByAggregateInput } from './todays-calories-min-order-by-aggregate.input';
import { TodaysCaloriesSumOrderByAggregateInput } from './todays-calories-sum-order-by-aggregate.input';

@InputType()
export class TodaysCaloriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentCalories?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weight?: keyof typeof SortOrder;

    @Field(() => TodaysCaloriesCountOrderByAggregateInput, {nullable:true})
    _count?: TodaysCaloriesCountOrderByAggregateInput;

    @Field(() => TodaysCaloriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: TodaysCaloriesAvgOrderByAggregateInput;

    @Field(() => TodaysCaloriesMaxOrderByAggregateInput, {nullable:true})
    _max?: TodaysCaloriesMaxOrderByAggregateInput;

    @Field(() => TodaysCaloriesMinOrderByAggregateInput, {nullable:true})
    _min?: TodaysCaloriesMinOrderByAggregateInput;

    @Field(() => TodaysCaloriesSumOrderByAggregateInput, {nullable:true})
    _sum?: TodaysCaloriesSumOrderByAggregateInput;
}
