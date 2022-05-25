import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordWhereInput } from './finance-record-where.input';
import { Type } from 'class-transformer';
import { FinanceRecordOrderByWithAggregationInput } from './finance-record-order-by-with-aggregation.input';
import { FinanceRecordScalarFieldEnum } from './finance-record-scalar-field.enum';
import { FinanceRecordScalarWhereWithAggregatesInput } from './finance-record-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FinanceRecordCountAggregateInput } from './finance-record-count-aggregate.input';
import { FinanceRecordAvgAggregateInput } from './finance-record-avg-aggregate.input';
import { FinanceRecordSumAggregateInput } from './finance-record-sum-aggregate.input';
import { FinanceRecordMinAggregateInput } from './finance-record-min-aggregate.input';
import { FinanceRecordMaxAggregateInput } from './finance-record-max-aggregate.input';

@ArgsType()
export class FinanceRecordGroupByArgs {

    @Field(() => FinanceRecordWhereInput, {nullable:true})
    @Type(() => FinanceRecordWhereInput)
    where?: FinanceRecordWhereInput;

    @Field(() => [FinanceRecordOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FinanceRecordOrderByWithAggregationInput>;

    @Field(() => [FinanceRecordScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FinanceRecordScalarFieldEnum>;

    @Field(() => FinanceRecordScalarWhereWithAggregatesInput, {nullable:true})
    having?: FinanceRecordScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FinanceRecordCountAggregateInput, {nullable:true})
    _count?: FinanceRecordCountAggregateInput;

    @Field(() => FinanceRecordAvgAggregateInput, {nullable:true})
    _avg?: FinanceRecordAvgAggregateInput;

    @Field(() => FinanceRecordSumAggregateInput, {nullable:true})
    _sum?: FinanceRecordSumAggregateInput;

    @Field(() => FinanceRecordMinAggregateInput, {nullable:true})
    _min?: FinanceRecordMinAggregateInput;

    @Field(() => FinanceRecordMaxAggregateInput, {nullable:true})
    _max?: FinanceRecordMaxAggregateInput;
}
