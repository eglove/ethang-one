import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UnusedKeyCountOrderByAggregateInput } from './unused-key-count-order-by-aggregate.input';
import { UnusedKeyMaxOrderByAggregateInput } from './unused-key-max-order-by-aggregate.input';
import { UnusedKeyMinOrderByAggregateInput } from './unused-key-min-order-by-aggregate.input';

@InputType()
export class UnusedKeyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => UnusedKeyCountOrderByAggregateInput, {nullable:true})
    _count?: UnusedKeyCountOrderByAggregateInput;

    @Field(() => UnusedKeyMaxOrderByAggregateInput, {nullable:true})
    _max?: UnusedKeyMaxOrderByAggregateInput;

    @Field(() => UnusedKeyMinOrderByAggregateInput, {nullable:true})
    _min?: UnusedKeyMinOrderByAggregateInput;
}
