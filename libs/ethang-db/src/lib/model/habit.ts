import { habitFormatTime } from '@ethang/util-typescript';
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
        dueDate: habitFormatTime(
          new Date(Date.now() + Number(ms(recurInterval)))
        ),
      },
      where: {
        name,
      },
    });
  }

  async getDueHabits(): Promise<HabitObject[]> {
    await this.prisma.$connect();

    return this.prisma.habit.findMany({
      where: {
        dueDate: {
          lt: habitFormatTime(),
        },
      },
    });
  }

  async create(parameters: Prisma.HabitCreateInput): Promise<HabitObject> {
    await this.prisma.$connect();

    return this.prisma.habit.create({
      data: {
        ...parameters,
        dueDate: habitFormatTime(new Date(parameters.dueDate)),
      },
    });
  }
}