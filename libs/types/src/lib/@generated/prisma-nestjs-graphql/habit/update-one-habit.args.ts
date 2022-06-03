import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { HabitUpdateInput } from './habit-update.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@ArgsType()
export class UpdateOneHabitArgs {
  @Field(
    () => {
      return HabitUpdateInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return HabitUpdateInput;
  })
  data!: HabitUpdateInput;

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
