import {
  FinanceRecord as FinanceRecordObject,
  Prisma,
  PrismaClient,
} from '@prisma/client';

import { PrismaModel } from '../types/types';

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
}
