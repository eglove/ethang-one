import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitCreateManyInput } from './habit-create-many.input';

@ArgsType()
export class CreateManyHabitArgs {

    @Field(() => [HabitCreateManyInput], {nullable:false})
    data!: Array<HabitCreateManyInput>;
}
