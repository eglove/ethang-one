import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitUpdateManyMutationInput } from './habit-update-many-mutation.input';
import { HabitWhereInput } from './habit-where.input';

@ArgsType()
export class UpdateManyHabitArgs {

    @Field(() => HabitUpdateManyMutationInput, {nullable:false})
    data!: HabitUpdateManyMutationInput;

    @Field(() => HabitWhereInput, {nullable:true})
    where?: HabitWhereInput;
}
