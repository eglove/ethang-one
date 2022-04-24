import { Habit as HabitObject, Prisma, PrismaClient } from '@prisma/client';
import ms from 'ms';

import { PrismaModel } from '../types/types';

export class Habit implements PrismaModel {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async completeHabit(name: string, recurInterval: string): Promise<void> {
    await this.prisma.$connect();

    await this.prisma.habit.update({
      data: {
        dueDate: Date.now() + Number(ms(recurInterval)),
      },
      where: {
        name,
      },
    });
  }

  async getDueHabits(): Promise<HabitObject[]> {
    await this.prisma.$connect();

    const tonightMidnight = new Date();
    tonightMidnight.setHours(24, 0, 0, 0);

    return this.prisma.habit.findMany({
      where: {
        dueDate: {
          lte: tonightMidnight.getTime() - 1,
        },
      },
    });
  }

  async create(parameters: Prisma.HabitCreateInput): Promise<HabitObject> {
    await this.prisma.$connect();

    return this.prisma.habit.create({
      data: parameters,
    });
  }
}
