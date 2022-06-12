import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CalorieRecordCountAggregate } from './calorie-record-count-aggregate.output';
import { CalorieRecordAvgAggregate } from './calorie-record-avg-aggregate.output';
import { CalorieRecordSumAggregate } from './calorie-record-sum-aggregate.output';
import { CalorieRecordMinAggregate } from './calorie-record-min-aggregate.output';
import { CalorieRecordMaxAggregate } from './calorie-record-max-aggregate.output';

@ObjectType()
export class CalorieRecordGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    calories!: number;

    @Field(() => Int, {nullable:true})
    leftForToday?: number;

    @Field(() => String, {nullable:false})
    personId!: string;

    @Field(() => CalorieRecordCountAggregate, {nullable:true})
    _count?: CalorieRecordCountAggregate;

    @Field(() => CalorieRecordAvgAggregate, {nullable:true})
    _avg?: CalorieRecordAvgAggregate;

    @Field(() => CalorieRecordSumAggregate, {nullable:true})
    _sum?: CalorieRecordSumAggregate;

    @Field(() => CalorieRecordMinAggregate, {nullable:true})
    _min?: CalorieRecordMinAggregate;

    @Field(() => CalorieRecordMaxAggregate, {nullable:true})
    _max?: CalorieRecordMaxAggregate;
}
