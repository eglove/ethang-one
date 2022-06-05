import {
  FindFirstTodaysCaloriesArgs as FindFirstTodaysCaloriesArguments,
  TodaysCalories,
  UpdateOneTodaysCaloriesArgs as UpdateOneTodaysCaloriesArguments,
} from '@ethang/prisma-nestjs-graphql';
import { Injectable } from '@nestjs/common';

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
