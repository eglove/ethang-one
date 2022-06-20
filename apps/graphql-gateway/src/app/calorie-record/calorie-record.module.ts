import { Module } from '@nestjs/common';

import { PersonService } from '../person/person.service';
import { PrismaService } from '../prisma/prisma.service';
import { CalorieRecordResolver } from './calorie-record.resolver';
import { CalorieRecordService } from './calorie-record.service';

@Module({
  providers: [
    CalorieRecordResolver,
    CalorieRecordService,
    PersonService,
    PrismaService,
  ],
})
export class CalorieRecordModule {}
