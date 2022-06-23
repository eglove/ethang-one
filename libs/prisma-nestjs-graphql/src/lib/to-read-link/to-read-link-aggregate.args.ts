import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkWhereInput } from './to-read-link-where.input';
import { Type } from 'class-transformer';
import { ToReadLinkOrderByWithRelationInput } from './to-read-link-order-by-with-relation.input';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToReadLinkCountAggregateInput } from './to-read-link-count-aggregate.input';
import { ToReadLinkMinAggregateInput } from './to-read-link-min-aggregate.input';
import { ToReadLinkMaxAggregateInput } from './to-read-link-max-aggregate.input';

@ArgsType()
export class ToReadLinkAggregateArgs {

    @Field(() => ToReadLinkWhereInput, {nullable:true})
    @Type(() => ToReadLinkWhereInput)
    where?: ToReadLinkWhereInput;

    @Field(() => [ToReadLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToReadLinkOrderByWithRelationInput>;

    @Field(() => ToReadLinkWhereUniqueInput, {nullable:true})
    cursor?: ToReadLinkWhereUniqueInput;

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
