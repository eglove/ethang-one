import {
  CreateOneHabitArgs as CreateOneHabitArguments,
  FindManyHabitArgs as FindManyHabitArguments,
  FindUniqueHabitArgs as FindUniqueHabitArguments,
  UpdateOneHabitArgs as UpdateOneHabitArguments,
} from '@ethang/types';
import { Injectable } from '@nestjs/common';
import { Habit } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HabitService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOneHabitArguments): Promise<Partial<Habit>> {
    return this.prisma.habit.create(data);
  }

  async findUnique(
    data: FindUniqueHabitArguments
  ): Promise<Partial<Habit> | undefined> {
    const habit = await this.prisma.habit.findUnique(data);

    if (habit === null) {
      return;
    }

    return habit;
  }

  async findMany(data?: FindManyHabitArguments): Promise<Habit[]> {
    return this.prisma.habit.findMany(data);
  }

  async update(data: UpdateOneHabitArguments): Promise<Habit> {
    return this.prisma.habit.update(data);
  }
}
