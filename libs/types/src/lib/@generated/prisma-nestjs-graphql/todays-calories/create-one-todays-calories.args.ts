import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesCreateInput } from './todays-calories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesCreateInput, {nullable:false})
    @Type(() => TodaysCaloriesCreateInput)
    data!: TodaysCaloriesCreateInput;
}
