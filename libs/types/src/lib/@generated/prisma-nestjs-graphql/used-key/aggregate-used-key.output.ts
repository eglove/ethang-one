import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsedKeyCountAggregate } from './used-key-count-aggregate.output';
import { UsedKeyMinAggregate } from './used-key-min-aggregate.output';
import { UsedKeyMaxAggregate } from './used-key-max-aggregate.output';

@ObjectType()
export class AggregateUsedKey {

    @Field(() => UsedKeyCountAggregate, {nullable:true})
    _count?: UsedKeyCountAggregate;

    @Field(() => UsedKeyMinAggregate, {nullable:true})
    _min?: UsedKeyMinAggregate;

    @Field(() => UsedKeyMaxAggregate, {nullable:true})
    _max?: UsedKeyMaxAggregate;
}
