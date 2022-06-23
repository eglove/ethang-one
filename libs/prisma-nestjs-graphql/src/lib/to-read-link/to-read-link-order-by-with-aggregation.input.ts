import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ToReadLinkCountOrderByAggregateInput } from './to-read-link-count-order-by-aggregate.input';
import { ToReadLinkMaxOrderByAggregateInput } from './to-read-link-max-order-by-aggregate.input';
import { ToReadLinkMinOrderByAggregateInput } from './to-read-link-min-order-by-aggregate.input';

@InputType()
export class ToReadLinkOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ToReadLinkCountOrderByAggregateInput, {nullable:true})
    _count?: ToReadLinkCountOrderByAggregateInput;

    @Field(() => ToReadLinkMaxOrderByAggregateInput, {nullable:true})
    _max?: ToReadLinkMaxOrderByAggregateInput;

    @Field(() => ToReadLinkMinOrderByAggregateInput, {nullable:true})
    _min?: ToReadLinkMinOrderByAggregateInput;
}
