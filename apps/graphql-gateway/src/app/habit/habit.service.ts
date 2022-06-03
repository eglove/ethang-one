import { Injectable } from '@nestjs/common';
import { Habit } from '@prisma/client';

import { CreateOneHabitArgs as CreateOneHabitArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/create-one-habit.args';
import { FindManyHabitArgs as FindManyHabitArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/find-many-habit.args';
import { FindUniqueHabitArgs as FindUniqueHabitArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/find-unique-habit.args';
import { UpdateOneHabitArgs as UpdateOneHabitArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/update-one-habit.args';
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
