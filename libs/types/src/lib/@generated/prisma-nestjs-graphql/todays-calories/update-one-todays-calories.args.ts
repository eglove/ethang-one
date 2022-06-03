import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { TodaysCaloriesUpdateInput } from './todays-calories-update.input';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';

@ArgsType()
export class UpdateOneTodaysCaloriesArgs {
  @Field(
    () => {
      return TodaysCaloriesUpdateInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return TodaysCaloriesUpdateInput;
  })
  data!: TodaysCaloriesUpdateInput;

  @Field(
    () => {
      return TodaysCaloriesWhereUniqueInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return TodaysCaloriesWhereUniqueInput;
  })
  where!: TodaysCaloriesWhereUniqueInput;
}
