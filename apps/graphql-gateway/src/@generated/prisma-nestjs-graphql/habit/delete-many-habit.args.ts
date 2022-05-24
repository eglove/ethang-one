import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitWhereInput } from './habit-where.input';

@ArgsType()
export class DeleteManyHabitArgs {

    @Field(() => HabitWhereInput, {nullable:true})
    where?: HabitWhereInput;
}
