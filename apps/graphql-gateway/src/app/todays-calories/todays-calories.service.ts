import {
  FindFirstTodaysCaloriesArgs as FindFirstTodaysCaloriesArguments,
  UpdateOneTodaysCaloriesArgs as UpdateOneTodaysCaloriesArguments,
} from '@ethang/types';
import { Injectable } from '@nestjs/common';
import { TodaysCalories } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodaysCaloriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findFirst(
    data: FindFirstTodaysCaloriesArguments
  ): Promise<TodaysCalories | undefined> {
    const todaysCalories = await this.prismaService.todaysCalories.findFirst(
      data
    );

    if (todaysCalories === null) {
      return;
    }

    return todaysCalories;
  }

  async update(
    data: UpdateOneTodaysCaloriesArguments
  ): Promise<TodaysCalories> {
    return this.prismaService.todaysCalories.update(data);
  }
}
