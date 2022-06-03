import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyWhereInput } from './unused-key-where.input';
import { Type } from 'class-transformer';
import { UnusedKeyOrderByWithRelationInput } from './unused-key-order-by-with-relation.input';
import { UnusedKeyWhereUniqueInput } from './unused-key-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UnusedKeyCountAggregateInput } from './unused-key-count-aggregate.input';
import { UnusedKeyMinAggregateInput } from './unused-key-min-aggregate.input';
import { UnusedKeyMaxAggregateInput } from './unused-key-max-aggregate.input';

@ArgsType()
export class UnusedKeyAggregateArgs {

    @Field(() => UnusedKeyWhereInput, {nullable:true})
    @Type(() => UnusedKeyWhereInput)
    where?: UnusedKeyWhereInput;

    @Field(() => [UnusedKeyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UnusedKeyOrderByWithRelationInput>;

    @Field(() => UnusedKeyWhereUniqueInput, {nullable:true})
    cursor?: UnusedKeyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UnusedKeyCountAggregateInput, {nullable:true})
    _count?: UnusedKeyCountAggregateInput;

    @Field(() => UnusedKeyMinAggregateInput, {nullable:true})
    _min?: UnusedKeyMinAggregateInput;

    @Field(() => UnusedKeyMaxAggregateInput, {nullable:true})
    _max?: UnusedKeyMaxAggregateInput;
}
