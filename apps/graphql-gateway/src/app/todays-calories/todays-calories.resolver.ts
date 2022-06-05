import {
  FindFirstTodaysCaloriesArgs as FindFirstTodaysCaloriesArguments,
  TodaysCalories,
  UpdateOneTodaysCaloriesArgs as UpdateOneTodaysCaloriesArguments,
} from '@ethang/prisma-nestjs-graphql';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { TodaysCaloriesService } from './todays-calories.service';

const returnTodaysCalories = (): typeof TodaysCalories => {
  return TodaysCalories;
};

@Resolver()
export class TodaysCaloriesResolver {
  constructor(private readonly todaysCaloriesService: TodaysCaloriesService) {}

  @Query(returnTodaysCalories, { nullable: true })
  async firstTodaysCalories(
    @Args() data: FindFirstTodaysCaloriesArguments
  ): Promise<TodaysCalories | undefined> {
    return this.todaysCaloriesService.findFirst(data);
  }

  async updateTodaysCalories(
    @Args() data: UpdateOneTodaysCaloriesArguments
  ): Promise<TodaysCalories> {
    return this.todaysCaloriesService.update(data);
  }
}
