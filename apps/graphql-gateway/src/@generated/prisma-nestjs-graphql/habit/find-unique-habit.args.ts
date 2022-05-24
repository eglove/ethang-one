import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@ArgsType()
export class FindUniqueHabitArgs {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    where!: HabitWhereUniqueInput;
}
