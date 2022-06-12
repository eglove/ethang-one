import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordWhereInput } from './calorie-record-where.input';
import { Type } from 'class-transformer';
import { CalorieRecordOrderByWithAggregationInput } from './calorie-record-order-by-with-aggregation.input';
import { CalorieRecordScalarFieldEnum } from './calorie-record-scalar-field.enum';
import { CalorieRecordScalarWhereWithAggregatesInput } from './calorie-record-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CalorieRecordCountAggregateInput } from './calorie-record-count-aggregate.input';
import { CalorieRecordAvgAggregateInput } from './calorie-record-avg-aggregate.input';
import { CalorieRecordSumAggregateInput } from './calorie-record-sum-aggregate.input';
import { CalorieRecordMinAggregateInput } from './calorie-record-min-aggregate.input';
import { CalorieRecordMaxAggregateInput } from './calorie-record-max-aggregate.input';

@ArgsType()
export class CalorieRecordGroupByArgs {

    @Field(() => CalorieRecordWhereInput, {nullable:true})
    @Type(() => CalorieRecordWhereInput)
    where?: CalorieRecordWhereInput;

    @Field(() => [CalorieRecordOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CalorieRecordOrderByWithAggregationInput>;

    @Field(() => [CalorieRecordScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CalorieRecordScalarFieldEnum>;

    @Field(() => CalorieRecordScalarWhereWithAggregatesInput, {nullable:true})
    having?: CalorieRecordScalarWhereWithAggregatesInput;

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
