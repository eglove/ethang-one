import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesCreateManyInput } from './todays-calories-create-many.input';

@ArgsType()
export class CreateManyTodaysCaloriesArgs {

    @Field(() => [TodaysCaloriesCreateManyInput], {nullable:false})
    data!: Array<TodaysCaloriesCreateManyInput>;
}
