import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitUpdateInput } from './habit-update.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@ArgsType()
export class UpdateOneHabitArgs {

    @Field(() => HabitUpdateInput, {nullable:false})
    data!: HabitUpdateInput;

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    where!: HabitWhereUniqueInput;
}
