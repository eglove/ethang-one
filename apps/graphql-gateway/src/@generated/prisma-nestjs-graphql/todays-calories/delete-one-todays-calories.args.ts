import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';

@ArgsType()
export class DeleteOneTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesWhereUniqueInput, {nullable:false})
    where!: TodaysCaloriesWhereUniqueInput;
}
