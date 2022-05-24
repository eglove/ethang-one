import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { HabitResolver } from './habit.resolver';
import { HabitService } from './habit.service';

@Module({
  providers: [HabitService, HabitResolver, PrismaService],
})
export class HabitModule {}
