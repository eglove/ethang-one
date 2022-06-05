import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlWhereInput } from './short-url-where.input';
import { Type } from 'class-transformer';
import { ShortUrlOrderByWithAggregationInput } from './short-url-order-by-with-aggregation.input';
import { ShortUrlScalarFieldEnum } from './short-url-scalar-field.enum';
import { ShortUrlScalarWhereWithAggregatesInput } from './short-url-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShortUrlCountAggregateInput } from './short-url-count-aggregate.input';
import { ShortUrlMinAggregateInput } from './short-url-min-aggregate.input';
import { ShortUrlMaxAggregateInput } from './short-url-max-aggregate.input';

@ArgsType()
export class ShortUrlGroupByArgs {

    @Field(() => ShortUrlWhereInput, {nullable:true})
    @Type(() => ShortUrlWhereInput)
    where?: ShortUrlWhereInput;

    @Field(() => [ShortUrlOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShortUrlOrderByWithAggregationInput>;

    @Field(() => [ShortUrlScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShortUrlScalarFieldEnum>;

    @Field(() => ShortUrlScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShortUrlScalarWhereWithAggregatesInput;

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
