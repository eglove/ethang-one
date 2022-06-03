import { Injectable } from '@nestjs/common';

import { FinanceRecord } from '../../@generated/prisma-nestjs-graphql/finance-record/finance-record.model';
import { FindManyFinanceRecordArgs as FindManyFinanceRecordArguments } from '../../@generated/prisma-nestjs-graphql/finance-record/find-many-finance-record.args';
import { FindUniqueFinanceRecordArgs as FindUniqueFinanceRecordArguments } from '../../@generated/prisma-nestjs-graphql/finance-record/find-unique-finance-record.args';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FinanceRecordService {
  constructor(private readonly prisma: PrismaService) {}

  async financeRecord(
    data: FindUniqueFinanceRecordArguments
  ): Promise<FinanceRecord | undefined> {
    const record = await this.prisma.financeRecord.findUnique(data);

    if (record === null) {
      return;
    }

    return record;
  }

  async financeRecords(
    data?: FindManyFinanceRecordArguments
  ): Promise<FinanceRecord[]> {
    return this.prisma.financeRecord.findMany(data);
  }
}
