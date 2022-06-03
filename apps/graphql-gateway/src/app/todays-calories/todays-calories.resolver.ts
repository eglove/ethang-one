import {Args, Query, Resolver} from '@nestjs/graphql';

import {TodaysCalories} from '@ethang/types'
import { FindFirstTodaysCaloriesArgs as FindFirstTodaysCaloriesArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/todays-calories/find-first-todays-calories.args';
import { UpdateOneTodaysCaloriesArgs as UpdateOneTodaysCaloriesArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/todays-calories/update-one-todays-calories.args';
import { TodaysCaloriesService } from './todays-calories.service';

const returnTodaysCalories = (): typeof TodaysCalories => {
  return TodaysCalories;
};

@Resolver()
export class TodaysCaloriesResolver {
  constructor(private readonly todaysCaloriesService: TodaysCaloriesService) {}

  @Query(returnTodaysCalories, {nullable: true})
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
