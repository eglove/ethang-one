import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesWhereInput } from './todays-calories-where.input';
import { Type } from 'class-transformer';
import { TodaysCaloriesOrderByWithRelationInput } from './todays-calories-order-by-with-relation.input';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodaysCaloriesScalarFieldEnum } from './todays-calories-scalar-field.enum';

@ArgsType()
export class FindFirstTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesWhereInput, {nullable:true})
    @Type(() => TodaysCaloriesWhereInput)
    where?: TodaysCaloriesWhereInput;

    @Field(() => [TodaysCaloriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodaysCaloriesOrderByWithRelationInput>;

    @Field(() => TodaysCaloriesWhereUniqueInput, {nullable:true})
    cursor?: TodaysCaloriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TodaysCaloriesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodaysCaloriesScalarFieldEnum>;
}
