import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { HabitWhereUniqueInput } from './habit-where-unique.input';

@ArgsType()
export class FindUniqueHabitArgs {
  @Field(
    () => {
      return HabitWhereUniqueInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return HabitWhereUniqueInput;
  })
  where!: HabitWhereUniqueInput;
}
