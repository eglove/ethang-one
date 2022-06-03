import { FinanceGraphData } from '@ethang/ethang-db';
import {
  AffectedRows,
  CreateManyFinanceRecordArgs as CreateManyFinanceRecordArguments,
  CreateOneFinanceRecordArgs as CreateOneFinanceRecordArguments,
  FinanceRecord,
  FindManyFinanceRecordArgs as FindManyFinanceRecordArguments,
  FindUniqueFinanceRecordArgs as FindUniqueFinanceRecordArguments,
} from '@ethang/types';
import { Injectable } from '@nestjs/common';
import ms from 'ms';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FinanceRecordService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOneFinanceRecordArguments): Promise<FinanceRecord> {
    return this.prisma.financeRecord.create(data);
  }

  async createMany(
    data: CreateManyFinanceRecordArguments
  ): Promise<AffectedRows> {
    return this.prisma.financeRecord.createMany(data);
  }

  async findUnique(
    data: FindUniqueFinanceRecordArguments
  ): Promise<FinanceRecord | undefined> {
    const record = await this.prisma.financeRecord.findUnique(data);

    if (record === null) {
      return;
    }

    return record;
  }

  async findMany(
    data?: FindManyFinanceRecordArguments
  ): Promise<FinanceRecord[]> {
    return this.prisma.financeRecord.findMany(data);
  }

  async getFinanceRecordsInLastYear(): Promise<FinanceGraphData> {
    const data = await this.findMany({
      where: {
        recordedDate: {
          gte: new Date(Date.now() - ms('1y')),
          lte: new Date(Date.now()),
        },
      },
    });

    const restructuredData: Record<string, Record<string, number>> = {};
    let uniqueAccountNames: string[] = [];

    // { recordedDate1: { account1: value1, account2, value2 }, recordedDate2: { ... } }
    for (const item of data) {
      const stringDate = new Date(item.recordedDate).toLocaleDateString();
      if (typeof restructuredData[stringDate] === 'undefined') {
        restructuredData[stringDate] = {
          [item.accountName]: item.currentValue,
        };
      } else {
        restructuredData[stringDate][item.accountName] = item.currentValue;
      }
    }

    // Get list of unique account Names, and total for NetWorth
    for (const key of Object.keys(restructuredData)) {
      let total = 0;
      for (const accountName of Object.keys(restructuredData[key])) {
        if (!uniqueAccountNames.includes(accountName)) {
          uniqueAccountNames = [...uniqueAccountNames, accountName];
        }

        if (typeof restructuredData[key][accountName] === 'number') {
          total += restructuredData[key][accountName];
        }
      }

      restructuredData[key].NetWorth = total;
    }

    uniqueAccountNames = [...uniqueAccountNames, 'NetWorth'];

    // [ { date: recordedDate, { account1: value1, account2: value2 } }, { date2: recordedDate2, { ... } ]
    return {
      financeData: Object.keys(restructuredData).map(itemKey => {
        return {
          date: itemKey,
          ...restructuredData[itemKey],
        };
      }),
      uniqueAccountNames,
    };
  }
}
