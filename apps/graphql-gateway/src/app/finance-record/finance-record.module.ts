import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { FinanceRecordController } from './finance-record.controller';
import { FinanceRecordResolver } from './finance-record.resolver';
import { FinanceRecordService } from './finance-record.service';

@Module({
  controllers: [FinanceRecordController],
  providers: [FinanceRecordService, FinanceRecordResolver, PrismaService],
})
export class FinanceRecordModule {}
