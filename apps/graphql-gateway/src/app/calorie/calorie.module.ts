import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CalorieResolver } from './calorie.resolver';
import { CalorieService } from './calorie.service';

@Module({
  providers: [CalorieResolver, CalorieService, PrismaService],
})
export class CalorieModule {}
