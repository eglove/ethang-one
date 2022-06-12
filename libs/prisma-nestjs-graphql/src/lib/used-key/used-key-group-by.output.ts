import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsedKeyCountAggregate } from './used-key-count-aggregate.output';
import { UsedKeyMinAggregate } from './used-key-min-aggregate.output';
import { UsedKeyMaxAggregate } from './used-key-max-aggregate.output';

@ObjectType()
export class UsedKeyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => UsedKeyCountAggregate, {nullable:true})
    _count?: UsedKeyCountAggregate;

    @Field(() => UsedKeyMinAggregate, {nullable:true})
    _min?: UsedKeyMinAggregate;

    @Field(() => UsedKeyMaxAggregate, {nullable:true})
    _max?: UsedKeyMaxAggregate;
}
