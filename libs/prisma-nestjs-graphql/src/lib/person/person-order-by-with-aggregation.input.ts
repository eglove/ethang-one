import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PersonCountOrderByAggregateInput } from './person-count-order-by-aggregate.input';
import { PersonAvgOrderByAggregateInput } from './person-avg-order-by-aggregate.input';
import { PersonMaxOrderByAggregateInput } from './person-max-order-by-aggregate.input';
import { PersonMinOrderByAggregateInput } from './person-min-order-by-aggregate.input';
import { PersonSumOrderByAggregateInput } from './person-sum-order-by-aggregate.input';

@InputType()
export class PersonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weightLbs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    heightIn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => PersonCountOrderByAggregateInput, {nullable:true})
    _count?: PersonCountOrderByAggregateInput;

    @Field(() => PersonAvgOrderByAggregateInput, {nullable:true})
    _avg?: PersonAvgOrderByAggregateInput;

    @Field(() => PersonMaxOrderByAggregateInput, {nullable:true})
    _max?: PersonMaxOrderByAggregateInput;

    @Field(() => PersonMinOrderByAggregateInput, {nullable:true})
    _min?: PersonMinOrderByAggregateInput;

    @Field(() => PersonSumOrderByAggregateInput, {nullable:true})
    _sum?: PersonSumOrderByAggregateInput;
}
