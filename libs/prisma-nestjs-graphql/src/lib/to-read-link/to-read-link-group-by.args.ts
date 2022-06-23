import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkWhereInput } from './to-read-link-where.input';
import { Type } from 'class-transformer';
import { ToReadLinkOrderByWithAggregationInput } from './to-read-link-order-by-with-aggregation.input';
import { ToReadLinkScalarFieldEnum } from './to-read-link-scalar-field.enum';
import { ToReadLinkScalarWhereWithAggregatesInput } from './to-read-link-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ToReadLinkCountAggregateInput } from './to-read-link-count-aggregate.input';
import { ToReadLinkMinAggregateInput } from './to-read-link-min-aggregate.input';
import { ToReadLinkMaxAggregateInput } from './to-read-link-max-aggregate.input';

@ArgsType()
export class ToReadLinkGroupByArgs {

    @Field(() => ToReadLinkWhereInput, {nullable:true})
    @Type(() => ToReadLinkWhereInput)
    where?: ToReadLinkWhereInput;

    @Field(() => [ToReadLinkOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ToReadLinkOrderByWithAggregationInput>;

    @Field(() => [ToReadLinkScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ToReadLinkScalarFieldEnum>;

    @Field(() => ToReadLinkScalarWhereWithAggregatesInput, {nullable:true})
    having?: ToReadLinkScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ToReadLinkCountAggregateInput, {nullable:true})
    _count?: ToReadLinkCountAggregateInput;

    @Field(() => ToReadLinkMinAggregateInput, {nullable:true})
    _min?: ToReadLinkMinAggregateInput;

    @Field(() => ToReadLinkMaxAggregateInput, {nullable:true})
    _max?: ToReadLinkMaxAggregateInput;
}
