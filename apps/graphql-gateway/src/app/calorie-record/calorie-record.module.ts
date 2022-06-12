import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CalorieRecordResolver } from './calorie-record.resolver';
import { CalorieRecordService } from './calorie-record.service';

@Module({
  providers: [CalorieRecordResolver, CalorieRecordService, PrismaService],
})
export class CalorieRecordModule {}
