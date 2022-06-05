import {
  AffectedRows,
  CreateManyFinanceRecordArgs as CreateManyFinanceRecordArguments,
  CreateOneFinanceRecordArgs,
  FinanceRecord,
  FindManyFinanceRecordArgs as FindManyFinanceRecordArguments,
  FindUniqueFinanceRecordArgs as FindUniqueFinanceRecordArguments,
} from '@ethang/prisma-nestjs-graphql';
import { FinanceGraphData } from '@ethang/types';

import { prismaMock } from '../../../../../prisma/singleton';

export const financeRecordServiceMock = (): unknown => {
  return {
    async create(data: CreateOneFinanceRecordArgs): Promise<FinanceRecord> {
      return prismaMock.financeRecord.create(data);
    },
    async createMany(
      data: CreateManyFinanceRecordArguments
    ): Promise<AffectedRows> {
      return prismaMock.financeRecord.createMany(data);
    },
    async findMany(
      data?: FindManyFinanceRecordArguments
    ): Promise<FinanceRecord[]> {
      return prismaMock.financeRecord.findMany(data);
    },
    async findUnique(
      data: FindUniqueFinanceRecordArguments
    ): Promise<FinanceRecord | undefined> {
      const record = await prismaMock.financeRecord.findUnique(data);

      if (record === null) {
        return;
      }

      return record;
    },
    async getFinanceRecordsInLastYear(): Promise<FinanceGraphData> {
      return {
        financeData: [],
        uniqueAccountNames: [],
      };
    },
  };
};
