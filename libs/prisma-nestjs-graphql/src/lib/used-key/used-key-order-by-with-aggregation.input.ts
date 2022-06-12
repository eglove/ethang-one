import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsedKeyCountOrderByAggregateInput } from './used-key-count-order-by-aggregate.input';
import { UsedKeyMaxOrderByAggregateInput } from './used-key-max-order-by-aggregate.input';
import { UsedKeyMinOrderByAggregateInput } from './used-key-min-order-by-aggregate.input';

@InputType()
export class UsedKeyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => UsedKeyCountOrderByAggregateInput, {nullable:true})
    _count?: UsedKeyCountOrderByAggregateInput;

    @Field(() => UsedKeyMaxOrderByAggregateInput, {nullable:true})
    _max?: UsedKeyMaxOrderByAggregateInput;

    @Field(() => UsedKeyMinOrderByAggregateInput, {nullable:true})
    _min?: UsedKeyMinOrderByAggregateInput;
}
