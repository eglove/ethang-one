import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordWhereInput } from './calorie-record-where.input';
import { Type } from 'class-transformer';
import { CalorieRecordOrderByWithRelationInput } from './calorie-record-order-by-with-relation.input';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CalorieRecordCountAggregateInput } from './calorie-record-count-aggregate.input';
import { CalorieRecordAvgAggregateInput } from './calorie-record-avg-aggregate.input';
import { CalorieRecordSumAggregateInput } from './calorie-record-sum-aggregate.input';
import { CalorieRecordMinAggregateInput } from './calorie-record-min-aggregate.input';
import { CalorieRecordMaxAggregateInput } from './calorie-record-max-aggregate.input';

@ArgsType()
export class CalorieRecordAggregateArgs {

    @Field(() => CalorieRecordWhereInput, {nullable:true})
    @Type(() => CalorieRecordWhereInput)
    where?: CalorieRecordWhereInput;

    @Field(() => [CalorieRecordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CalorieRecordOrderByWithRelationInput>;

    @Field(() => CalorieRecordWhereUniqueInput, {nullable:true})
    cursor?: CalorieRecordWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CalorieRecordCountAggregateInput, {nullable:true})
    _count?: CalorieRecordCountAggregateInput;

    @Field(() => CalorieRecordAvgAggregateInput, {nullable:true})
    _avg?: CalorieRecordAvgAggregateInput;

    @Field(() => CalorieRecordSumAggregateInput, {nullable:true})
    _sum?: CalorieRecordSumAggregateInput;

    @Field(() => CalorieRecordMinAggregateInput, {nullable:true})
    _min?: CalorieRecordMinAggregateInput;

    @Field(() => CalorieRecordMaxAggregateInput, {nullable:true})
    _max?: CalorieRecordMaxAggregateInput;
}
