import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateOneHabitArgs as CreateOneHabitArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/create-one-habit.args';
import { FindManyHabitArgs as FindManyHabitArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/find-many-habit.args';
import { FindUniqueHabitArgs as FindUniqueHabitArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/find-unique-habit.args';
import { Habit } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/habit.model';
import { UpdateOneHabitArgs as UpdateOneHabitArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/update-one-habit.args';
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
