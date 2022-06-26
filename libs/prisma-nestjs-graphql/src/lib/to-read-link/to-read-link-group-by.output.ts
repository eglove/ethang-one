import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ToReadLinkCountAggregate } from './to-read-link-count-aggregate.output';
import { ToReadLinkMinAggregate } from './to-read-link-min-aggregate.output';
import { ToReadLinkMaxAggregate } from './to-read-link-max-aggregate.output';

@ObjectType()
export class ToReadLinkGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ToReadLinkCountAggregate, {nullable:true})
    _count?: ToReadLinkCountAggregate;

    @Field(() => ToReadLinkMinAggregate, {nullable:true})
    _min?: ToReadLinkMinAggregate;

    @Field(() => ToReadLinkMaxAggregate, {nullable:true})
    _max?: ToReadLinkMaxAggregate;
}
