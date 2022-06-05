import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesWhereInput } from './todays-calories-where.input';
import { Type } from 'class-transformer';
import { TodaysCaloriesOrderByWithAggregationInput } from './todays-calories-order-by-with-aggregation.input';
import { TodaysCaloriesScalarFieldEnum } from './todays-calories-scalar-field.enum';
import { TodaysCaloriesScalarWhereWithAggregatesInput } from './todays-calories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TodaysCaloriesCountAggregateInput } from './todays-calories-count-aggregate.input';
import { TodaysCaloriesAvgAggregateInput } from './todays-calories-avg-aggregate.input';
import { TodaysCaloriesSumAggregateInput } from './todays-calories-sum-aggregate.input';
import { TodaysCaloriesMinAggregateInput } from './todays-calories-min-aggregate.input';
import { TodaysCaloriesMaxAggregateInput } from './todays-calories-max-aggregate.input';

@ArgsType()
export class TodaysCaloriesGroupByArgs {

    @Field(() => TodaysCaloriesWhereInput, {nullable:true})
    @Type(() => TodaysCaloriesWhereInput)
    where?: TodaysCaloriesWhereInput;

    @Field(() => [TodaysCaloriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TodaysCaloriesOrderByWithAggregationInput>;

    @Field(() => [TodaysCaloriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TodaysCaloriesScalarFieldEnum>;

    @Field(() => TodaysCaloriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: TodaysCaloriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TodaysCaloriesCountAggregateInput, {nullable:true})
    _count?: TodaysCaloriesCountAggregateInput;

    @Field(() => TodaysCaloriesAvgAggregateInput, {nullable:true})
    _avg?: TodaysCaloriesAvgAggregateInput;

    @Field(() => TodaysCaloriesSumAggregateInput, {nullable:true})
    _sum?: TodaysCaloriesSumAggregateInput;

    @Field(() => TodaysCaloriesMinAggregateInput, {nullable:true})
    _min?: TodaysCaloriesMinAggregateInput;

    @Field(() => TodaysCaloriesMaxAggregateInput, {nullable:true})
    _max?: TodaysCaloriesMaxAggregateInput;
}
