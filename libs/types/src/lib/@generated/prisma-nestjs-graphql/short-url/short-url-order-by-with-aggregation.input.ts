import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShortUrlCountOrderByAggregateInput } from './short-url-count-order-by-aggregate.input';
import { ShortUrlMaxOrderByAggregateInput } from './short-url-max-order-by-aggregate.input';
import { ShortUrlMinOrderByAggregateInput } from './short-url-min-order-by-aggregate.input';

@InputType()
export class ShortUrlOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    originalUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    usedKeyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;

    @Field(() => ShortUrlCountOrderByAggregateInput, {nullable:true})
    _count?: ShortUrlCountOrderByAggregateInput;

    @Field(() => ShortUrlMaxOrderByAggregateInput, {nullable:true})
    _max?: ShortUrlMaxOrderByAggregateInput;

    @Field(() => ShortUrlMinOrderByAggregateInput, {nullable:true})
    _min?: ShortUrlMinOrderByAggregateInput;
}
