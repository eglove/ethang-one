import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FinanceRecordCountAggregate } from './finance-record-count-aggregate.output';
import { FinanceRecordAvgAggregate } from './finance-record-avg-aggregate.output';
import { FinanceRecordSumAggregate } from './finance-record-sum-aggregate.output';
import { FinanceRecordMinAggregate } from './finance-record-min-aggregate.output';
import { FinanceRecordMaxAggregate } from './finance-record-max-aggregate.output';

@ObjectType()
export class FinanceRecordGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    accountName!: string;

    @Field(() => Float, {nullable:false})
    currentValue!: number;

    @Field(() => Date, {nullable:false})
    recordedDate!: Date | string;

    @Field(() => FinanceRecordCountAggregate, {nullable:true})
    _count?: FinanceRecordCountAggregate;

    @Field(() => FinanceRecordAvgAggregate, {nullable:true})
    _avg?: FinanceRecordAvgAggregate;

    @Field(() => FinanceRecordSumAggregate, {nullable:true})
    _sum?: FinanceRecordSumAggregate;

    @Field(() => FinanceRecordMinAggregate, {nullable:true})
    _min?: FinanceRecordMinAggregate;

    @Field(() => FinanceRecordMaxAggregate, {nullable:true})
    _max?: FinanceRecordMaxAggregate;
}
