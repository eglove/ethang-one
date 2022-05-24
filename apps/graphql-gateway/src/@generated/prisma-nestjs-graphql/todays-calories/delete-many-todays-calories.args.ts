import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesWhereInput } from './todays-calories-where.input';

@ArgsType()
export class DeleteManyTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesWhereInput, {nullable:true})
    where?: TodaysCaloriesWhereInput;
}
