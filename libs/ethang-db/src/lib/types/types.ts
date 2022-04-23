import { PrismaClient } from '@prisma/client';

export interface PrismaModel {
  prisma: PrismaClient;
}
