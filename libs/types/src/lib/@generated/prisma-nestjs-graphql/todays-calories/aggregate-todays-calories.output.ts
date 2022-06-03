import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TodaysCaloriesCountAggregate } from './todays-calories-count-aggregate.output';
import { TodaysCaloriesAvgAggregate } from './todays-calories-avg-aggregate.output';
import { TodaysCaloriesSumAggregate } from './todays-calories-sum-aggregate.output';
import { TodaysCaloriesMinAggregate } from './todays-calories-min-aggregate.output';
import { TodaysCaloriesMaxAggregate } from './todays-calories-max-aggregate.output';

@ObjectType()
export class AggregateTodaysCalories {

    @Field(() => TodaysCaloriesCountAggregate, {nullable:true})
    _count?: TodaysCaloriesCountAggregate;

    @Field(() => TodaysCaloriesAvgAggregate, {nullable:true})
    _avg?: TodaysCaloriesAvgAggregate;

    @Field(() => TodaysCaloriesSumAggregate, {nullable:true})
    _sum?: TodaysCaloriesSumAggregate;

    @Field(() => TodaysCaloriesMinAggregate, {nullable:true})
    _min?: TodaysCaloriesMinAggregate;

    @Field(() => TodaysCaloriesMaxAggregate, {nullable:true})
    _max?: TodaysCaloriesMaxAggregate;
}
