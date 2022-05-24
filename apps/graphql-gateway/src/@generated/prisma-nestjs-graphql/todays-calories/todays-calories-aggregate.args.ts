import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesWhereInput } from './todays-calories-where.input';
import { TodaysCaloriesOrderByWithRelationInput } from './todays-calories-order-by-with-relation.input';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodaysCaloriesCountAggregateInput } from './todays-calories-count-aggregate.input';
import { TodaysCaloriesAvgAggregateInput } from './todays-calories-avg-aggregate.input';
import { TodaysCaloriesSumAggregateInput } from './todays-calories-sum-aggregate.input';
import { TodaysCaloriesMinAggregateInput } from './todays-calories-min-aggregate.input';
import { TodaysCaloriesMaxAggregateInput } from './todays-calories-max-aggregate.input';

@ArgsType()
export class TodaysCaloriesAggregateArgs {

    @Field(() => TodaysCaloriesWhereInput, {nullable:true})
    where?: TodaysCaloriesWhereInput;

    @Field(() => [TodaysCaloriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodaysCaloriesOrderByWithRelationInput>;

    @Field(() => TodaysCaloriesWhereUniqueInput, {nullable:true})
    cursor?: TodaysCaloriesWhereUniqueInput;

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
