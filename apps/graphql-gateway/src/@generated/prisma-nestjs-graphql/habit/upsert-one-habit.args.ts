import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitCreateInput } from './habit-create.input';
import { HabitUpdateInput } from './habit-update.input';

@ArgsType()
export class UpsertOneHabitArgs {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateInput, {nullable:false})
    create!: HabitCreateInput;

    @Field(() => HabitUpdateInput, {nullable:false})
    update!: HabitUpdateInput;
}
