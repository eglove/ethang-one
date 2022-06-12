import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CalorieCountAggregate } from './calorie-count-aggregate.output';
import { CalorieAvgAggregate } from './calorie-avg-aggregate.output';
import { CalorieSumAggregate } from './calorie-sum-aggregate.output';
import { CalorieMinAggregate } from './calorie-min-aggregate.output';
import { CalorieMaxAggregate } from './calorie-max-aggregate.output';

@ObjectType()
export class AggregateCalorie {

    @Field(() => CalorieCountAggregate, {nullable:true})
    _count?: CalorieCountAggregate;

    @Field(() => CalorieAvgAggregate, {nullable:true})
    _avg?: CalorieAvgAggregate;

    @Field(() => CalorieSumAggregate, {nullable:true})
    _sum?: CalorieSumAggregate;

    @Field(() => CalorieMinAggregate, {nullable:true})
    _min?: CalorieMinAggregate;

    @Field(() => CalorieMaxAggregate, {nullable:true})
    _max?: CalorieMaxAggregate;
}
