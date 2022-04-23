import { PrismaClient } from '@prisma/client';

export interface PrismaModel {
  prisma: PrismaClient;
}

export type FinanceGraphData = {
  financeData: Array<Record<string, string | number>>;
  uniqueAccountNames: string[];
};
