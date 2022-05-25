import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlWhereInput } from './short-url-where.input';
import { ShortUrlOrderByWithRelationInput } from './short-url-order-by-with-relation.input';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShortUrlCountAggregateInput } from './short-url-count-aggregate.input';
import { ShortUrlMinAggregateInput } from './short-url-min-aggregate.input';
import { ShortUrlMaxAggregateInput } from './short-url-max-aggregate.input';

@ArgsType()
export class ShortUrlAggregateArgs {

    @Field(() => ShortUrlWhereInput, {nullable:true})
    where?: ShortUrlWhereInput;

    @Field(() => [ShortUrlOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShortUrlOrderByWithRelationInput>;

    @Field(() => ShortUrlWhereUniqueInput, {nullable:true})
    cursor?: ShortUrlWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShortUrlCountAggregateInput, {nullable:true})
    _count?: ShortUrlCountAggregateInput;

    @Field(() => ShortUrlMinAggregateInput, {nullable:true})
    _min?: ShortUrlMinAggregateInput;

    @Field(() => ShortUrlMaxAggregateInput, {nullable:true})
    _max?: ShortUrlMaxAggregateInput;
}
