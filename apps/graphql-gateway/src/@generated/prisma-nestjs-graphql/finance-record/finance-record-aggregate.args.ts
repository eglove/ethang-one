import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordWhereInput } from './finance-record-where.input';
import { FinanceRecordOrderByWithRelationInput } from './finance-record-order-by-with-relation.input';
import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FinanceRecordCountAggregateInput } from './finance-record-count-aggregate.input';
import { FinanceRecordAvgAggregateInput } from './finance-record-avg-aggregate.input';
import { FinanceRecordSumAggregateInput } from './finance-record-sum-aggregate.input';
import { FinanceRecordMinAggregateInput } from './finance-record-min-aggregate.input';
import { FinanceRecordMaxAggregateInput } from './finance-record-max-aggregate.input';

@ArgsType()
export class FinanceRecordAggregateArgs {

    @Field(() => FinanceRecordWhereInput, {nullable:true})
    where?: FinanceRecordWhereInput;

    @Field(() => [FinanceRecordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FinanceRecordOrderByWithRelationInput>;

    @Field(() => FinanceRecordWhereUniqueInput, {nullable:true})
    cursor?: FinanceRecordWhereUniqueInput;

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
