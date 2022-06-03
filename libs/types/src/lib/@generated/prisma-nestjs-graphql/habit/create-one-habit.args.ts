import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { HabitCreateInput } from './habit-create.input';

@ArgsType()
export class CreateOneHabitArgs {
  @Field(
    () => {
      return HabitCreateInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return HabitCreateInput;
  })
  data!: HabitCreateInput;
}
