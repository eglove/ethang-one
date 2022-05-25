import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesUpdateInput } from './todays-calories-update.input';
import { Type } from 'class-transformer';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';

@ArgsType()
export class UpdateOneTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesUpdateInput, {nullable:false})
    @Type(() => TodaysCaloriesUpdateInput)
    data!: TodaysCaloriesUpdateInput;

    @Field(() => TodaysCaloriesWhereUniqueInput, {nullable:false})
    @Type(() => TodaysCaloriesWhereUniqueInput)
    where!: TodaysCaloriesWhereUniqueInput;
}
