import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitCreateInput } from './habit-create.input';

@ArgsType()
export class CreateOneHabitArgs {

    @Field(() => HabitCreateInput, {nullable:false})
    data!: HabitCreateInput;
}
