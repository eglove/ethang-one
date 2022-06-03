import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { FinanceRecordResolver } from './finance-record.resolver';
import { FinanceRecordService } from './finance-record.service';

@Module({
  providers: [FinanceRecordService, FinanceRecordResolver, PrismaService],
})
export class FinanceRecordModule {}
