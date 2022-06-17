import {
  CreateOneHabitArgs as CreateOneHabitArguments,
  FindManyHabitArgs as FindManyHabitArguments,
  FindUniqueHabitArgs as FindUniqueHabitArguments,
  Habit,
  UpdateOneHabitArgs as UpdateOneHabitArguments,
} from '@ethang/prisma-nestjs-graphql';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { HabitService } from './habit.service';

const returnHabit = (): typeof Habit => {
  return Habit;
};

const returnHabitArray = (): [typeof Habit] => {
  return [Habit];
};

@Resolver(() => {
  return Habit;
})
export class HabitResolver {
  constructor(private readonly habitService: HabitService) {}

  @Mutation(returnHabit)
  async createHabit(
    @Args() data: CreateOneHabitArguments
  ): Promise<Partial<Habit>> {
    return this.habitService.create(data);
  }

  @Mutation(returnHabit)
  async updateHabit(
    @Args() data: UpdateOneHabitArguments
  ): Promise<Partial<Habit>> {
    return this.habitService.update(data);
  }

  @Query(returnHabit, { nullable: true })
  async habit(
    @Args() data: FindUniqueHabitArguments
  ): Promise<Partial<Habit> | undefined> {
    return this.habitService.findUnique(data);
  }

  @Query(returnHabitArray, { nullable: 'items' })
  async habits(@Args() data?: FindManyHabitArguments): Promise<Habit[]> {
    return this.habitService.findMany(data);
  }
}
