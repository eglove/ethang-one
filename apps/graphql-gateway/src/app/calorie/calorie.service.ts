import {
  Calorie,
  CreateOneCalorieArgs,
  FindManyCalorieArgs,
} from '@ethang/prisma-nestjs-graphql';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CalorieService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreateOneCalorieArgs,
    select: Prisma.CalorieSelect
  ): Promise<Partial<Calorie>> {
    return this.prisma.calorie.create({
      ...data,
      select,
    });
  }

  async findMany(
    data: FindManyCalorieArgs,
    select?: Prisma.CalorieSelect
  ): Promise<Array<Partial<Calorie>>> {
    return this.prisma.calorie.findMany({
      ...data,
      select,
    });
  }
}
