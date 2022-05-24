import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@ArgsType()
export class DeleteOneHabitArgs {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    where!: HabitWhereUniqueInput;
}
