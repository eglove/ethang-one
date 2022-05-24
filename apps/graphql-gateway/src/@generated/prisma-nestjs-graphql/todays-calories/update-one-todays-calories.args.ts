import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesUpdateInput } from './todays-calories-update.input';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';

@ArgsType()
export class UpdateOneTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesUpdateInput, {nullable:false})
    data!: TodaysCaloriesUpdateInput;

    @Field(() => TodaysCaloriesWhereUniqueInput, {nullable:false})
    where!: TodaysCaloriesWhereUniqueInput;
}
