import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UnusedKeyCountAggregate } from './unused-key-count-aggregate.output';
import { UnusedKeyMinAggregate } from './unused-key-min-aggregate.output';
import { UnusedKeyMaxAggregate } from './unused-key-max-aggregate.output';

@ObjectType()
export class UnusedKeyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => UnusedKeyCountAggregate, {nullable:true})
    _count?: UnusedKeyCountAggregate;

    @Field(() => UnusedKeyMinAggregate, {nullable:true})
    _min?: UnusedKeyMinAggregate;

    @Field(() => UnusedKeyMaxAggregate, {nullable:true})
    _max?: UnusedKeyMaxAggregate;
}
