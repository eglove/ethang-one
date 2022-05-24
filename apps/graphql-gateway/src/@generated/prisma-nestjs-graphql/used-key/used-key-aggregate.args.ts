import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyWhereInput } from './used-key-where.input';
import { UsedKeyOrderByWithRelationInput } from './used-key-order-by-with-relation.input';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsedKeyCountAggregateInput } from './used-key-count-aggregate.input';
import { UsedKeyMinAggregateInput } from './used-key-min-aggregate.input';
import { UsedKeyMaxAggregateInput } from './used-key-max-aggregate.input';

@ArgsType()
export class UsedKeyAggregateArgs {

    @Field(() => UsedKeyWhereInput, {nullable:true})
    where?: UsedKeyWhereInput;

    @Field(() => [UsedKeyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsedKeyOrderByWithRelationInput>;

    @Field(() => UsedKeyWhereUniqueInput, {nullable:true})
    cursor?: UsedKeyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UsedKeyCountAggregateInput, {nullable:true})
    _count?: UsedKeyCountAggregateInput;

    @Field(() => UsedKeyMinAggregateInput, {nullable:true})
    _min?: UsedKeyMinAggregateInput;

    @Field(() => UsedKeyMaxAggregateInput, {nullable:true})
    _max?: UsedKeyMaxAggregateInput;
}
