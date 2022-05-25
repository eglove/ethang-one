import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyWhereInput } from './unused-key-where.input';
import { Type } from 'class-transformer';
import { UnusedKeyOrderByWithAggregationInput } from './unused-key-order-by-with-aggregation.input';
import { UnusedKeyScalarFieldEnum } from './unused-key-scalar-field.enum';
import { UnusedKeyScalarWhereWithAggregatesInput } from './unused-key-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UnusedKeyCountAggregateInput } from './unused-key-count-aggregate.input';
import { UnusedKeyMinAggregateInput } from './unused-key-min-aggregate.input';
import { UnusedKeyMaxAggregateInput } from './unused-key-max-aggregate.input';

@ArgsType()
export class UnusedKeyGroupByArgs {

    @Field(() => UnusedKeyWhereInput, {nullable:true})
    @Type(() => UnusedKeyWhereInput)
    where?: UnusedKeyWhereInput;

    @Field(() => [UnusedKeyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UnusedKeyOrderByWithAggregationInput>;

    @Field(() => [UnusedKeyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UnusedKeyScalarFieldEnum>;

    @Field(() => UnusedKeyScalarWhereWithAggregatesInput, {nullable:true})
    having?: UnusedKeyScalarWhereWithAggregatesInput;

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
