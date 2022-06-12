import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieWhereInput } from './calorie-where.input';
import { Type } from 'class-transformer';
import { CalorieOrderByWithRelationInput } from './calorie-order-by-with-relation.input';
import { CalorieWhereUniqueInput } from './calorie-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CalorieCountAggregateInput } from './calorie-count-aggregate.input';
import { CalorieAvgAggregateInput } from './calorie-avg-aggregate.input';
import { CalorieSumAggregateInput } from './calorie-sum-aggregate.input';
import { CalorieMinAggregateInput } from './calorie-min-aggregate.input';
import { CalorieMaxAggregateInput } from './calorie-max-aggregate.input';

@ArgsType()
export class CalorieAggregateArgs {

    @Field(() => CalorieWhereInput, {nullable:true})
    @Type(() => CalorieWhereInput)
    where?: CalorieWhereInput;

    @Field(() => [CalorieOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CalorieOrderByWithRelationInput>;

    @Field(() => CalorieWhereUniqueInput, {nullable:true})
    cursor?: CalorieWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CalorieCountAggregateInput, {nullable:true})
    _count?: CalorieCountAggregateInput;

    @Field(() => CalorieAvgAggregateInput, {nullable:true})
    _avg?: CalorieAvgAggregateInput;

    @Field(() => CalorieSumAggregateInput, {nullable:true})
    _sum?: CalorieSumAggregateInput;

    @Field(() => CalorieMinAggregateInput, {nullable:true})
    _min?: CalorieMinAggregateInput;

    @Field(() => CalorieMaxAggregateInput, {nullable:true})
    _max?: CalorieMaxAggregateInput;
}
