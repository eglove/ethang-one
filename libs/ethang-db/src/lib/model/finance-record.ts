import {
  FinanceRecord as FinanceRecordObject,
  Prisma,
  PrismaClient,
} from '@prisma/client';
import ms from 'ms';

import { FinanceGraphData, PrismaModel } from '../types/types';

export class FinanceRecord implements PrismaModel {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(
    parameters: Prisma.FinanceRecordCreateInput
  ): Promise<FinanceRecordObject> {
    await this.prisma.$connect();

    return this.prisma.financeRecord.create({
      data: parameters,
    });
  }

  async createMany(
    parameters: Prisma.FinanceRecordCreateManyInput[]
  ): Promise<FinanceRecordObject[]> {
    await this.prisma.$connect();

    const promises = [];
    for (const input of parameters) {
      promises.push(this.create(input));
    }

    return Promise.all(promises);
  }

  async getFinanceRecordsInLastYear(): Promise<FinanceGraphData> {
    await this.prisma.$connect();

    const data = await this.prisma.financeRecord.findMany({
      where: {
        recordedDate: {
          gte: Date.now() - ms('1y'),
          lte: Date.now(),
        },
      },
    });

    const restructuredData: Record<string, Record<string, number>> = {};
    let uniqueAccountNames: string[] = [];

    // { recordedDate1: { account1: value1, account2, value2 }, recordedDate2: { ... } }
    for (const item of data) {
      const stringDate = new Date(item.recordedDate).toLocaleDateString();
      if (restructuredData[stringDate]) {
        restructuredData[stringDate][item.accountName] = item.currentValue;
      } else {
        restructuredData[stringDate] = {
          [item.accountName]: item.currentValue,
        };
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
