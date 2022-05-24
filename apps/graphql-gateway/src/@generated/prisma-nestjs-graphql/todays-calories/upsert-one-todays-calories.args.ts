import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';
import { TodaysCaloriesCreateInput } from './todays-calories-create.input';
import { TodaysCaloriesUpdateInput } from './todays-calories-update.input';

@ArgsType()
export class UpsertOneTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesWhereUniqueInput, {nullable:false})
    where!: TodaysCaloriesWhereUniqueInput;

    @Field(() => TodaysCaloriesCreateInput, {nullable:false})
    create!: TodaysCaloriesCreateInput;

    @Field(() => TodaysCaloriesUpdateInput, {nullable:false})
    update!: TodaysCaloriesUpdateInput;
}
