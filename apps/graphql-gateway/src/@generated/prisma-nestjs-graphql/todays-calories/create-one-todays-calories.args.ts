import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesCreateInput } from './todays-calories-create.input';

@ArgsType()
export class CreateOneTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesCreateInput, {nullable:false})
    data!: TodaysCaloriesCreateInput;
}
