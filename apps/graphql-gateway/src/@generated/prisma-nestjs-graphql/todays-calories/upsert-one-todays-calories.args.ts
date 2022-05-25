import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';
import { Type } from 'class-transformer';
import { TodaysCaloriesCreateInput } from './todays-calories-create.input';
import { TodaysCaloriesUpdateInput } from './todays-calories-update.input';

@ArgsType()
export class UpsertOneTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesWhereUniqueInput, {nullable:false})
    @Type(() => TodaysCaloriesWhereUniqueInput)
    where!: TodaysCaloriesWhereUniqueInput;

    @Field(() => TodaysCaloriesCreateInput, {nullable:false})
    @Type(() => TodaysCaloriesCreateInput)
    create!: TodaysCaloriesCreateInput;

    @Field(() => TodaysCaloriesUpdateInput, {nullable:false})
    @Type(() => TodaysCaloriesUpdateInput)
    update!: TodaysCaloriesUpdateInput;
}
