import { Injectable } from '@nestjs/common';
import { Habit } from '@prisma/client';

import { CreateOneHabitArgs as CreateOneHabitArguments } from '../../@generated/prisma-nestjs-graphql/habit/create-one-habit.args';
import { FindManyHabitArgs as FindManyHabitArguments } from '../../@generated/prisma-nestjs-graphql/habit/find-many-habit.args';
import { FindUniqueHabitArgs as FindUniqueHabitArguments } from '../../@generated/prisma-nestjs-graphql/habit/find-unique-habit.args';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HabitService {
  constructor(private readonly prisma: PrismaService) {}

  async createHabit(data: CreateOneHabitArguments): Promise<Partial<Habit>> {
    return this.prisma.habit.create(data);
  }

  async habit(
    data: FindUniqueHabitArguments
  ): Promise<Partial<Habit> | undefined> {
    const habit = await this.prisma.habit.findUnique(data);

    if (habit === null) {
      return;
    }

    return habit;
  }

  async habits(data?: FindManyHabitArguments): Promise<Habit[]> {
    return this.prisma.habit.findMany(data);
  }
}
