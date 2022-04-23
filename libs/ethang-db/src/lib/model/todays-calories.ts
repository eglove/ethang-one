import {
  Prisma,
  PrismaClient,
  TodaysCalories as TodaysCaloriesObject,
} from '@prisma/client';

import { PrismaModel } from '../types/types';

export class TodaysCalories implements PrismaModel {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getFirst(): Promise<TodaysCaloriesObject | undefined> {
    await this.prisma.$connect();

    return this.prisma.todaysCalories.findFirst();
  }

  async update(
    parameters: Prisma.TodaysCaloriesUpdateInput
  ): Promise<TodaysCaloriesObject> {
    await this.prisma.$connect();

    const current = await this.prisma.todaysCalories.findFirst();

    return this.prisma.todaysCalories.update({
      data: parameters,
      where: {
        id: current?.id,
      },
    });
  }
}
