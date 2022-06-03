import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { TodaysCaloriesResolver } from './todays-calories.resolver';
import { TodaysCaloriesService } from './todays-calories.service';

@Module({
  providers: [TodaysCaloriesService, TodaysCaloriesResolver, PrismaService],
})
export class TodaysCaloriesModule {}
