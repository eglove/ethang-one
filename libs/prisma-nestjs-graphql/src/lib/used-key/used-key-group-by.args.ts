import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyWhereInput } from './used-key-where.input';
import { Type } from 'class-transformer';
import { UsedKeyOrderByWithAggregationInput } from './used-key-order-by-with-aggregation.input';
import { UsedKeyScalarFieldEnum } from './used-key-scalar-field.enum';
import { UsedKeyScalarWhereWithAggregatesInput } from './used-key-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UsedKeyCountAggregateInput } from './used-key-count-aggregate.input';
import { UsedKeyMinAggregateInput } from './used-key-min-aggregate.input';
import { UsedKeyMaxAggregateInput } from './used-key-max-aggregate.input';

@ArgsType()
export class UsedKeyGroupByArgs {

    @Field(() => UsedKeyWhereInput, {nullable:true})
    @Type(() => UsedKeyWhereInput)
    where?: UsedKeyWhereInput;

    @Field(() => [UsedKeyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UsedKeyOrderByWithAggregationInput>;

    @Field(() => [UsedKeyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UsedKeyScalarFieldEnum>;

    @Field(() => UsedKeyScalarWhereWithAggregatesInput, {nullable:true})
    having?: UsedKeyScalarWhereWithAggregatesInput;

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
