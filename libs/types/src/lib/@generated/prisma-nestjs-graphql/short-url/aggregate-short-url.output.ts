import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShortUrlCountAggregate } from './short-url-count-aggregate.output';
import { ShortUrlMinAggregate } from './short-url-min-aggregate.output';
import { ShortUrlMaxAggregate } from './short-url-max-aggregate.output';

@ObjectType()
export class AggregateShortUrl {

    @Field(() => ShortUrlCountAggregate, {nullable:true})
    _count?: ShortUrlCountAggregate;

    @Field(() => ShortUrlMinAggregate, {nullable:true})
    _min?: ShortUrlMinAggregate;

    @Field(() => ShortUrlMaxAggregate, {nullable:true})
    _max?: ShortUrlMaxAggregate;
}
