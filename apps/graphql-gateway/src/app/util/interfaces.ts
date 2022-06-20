import { Prisma } from '@prisma/client';

export interface PrismaCrud<ModelType, SelectType> {
  create: (data: any, select?: SelectType) => Promise<Partial<ModelType>>;
  createMany: (data: any) => Promise<Prisma.BatchPayload>;
  delete: (data: any, select?: SelectType) => Promise<Partial<ModelType>>;
  deleteMany: (data: any) => Promise<Prisma.BatchPayload>;
  findFirst: (
    data: any,
    select?: SelectType
  ) => Promise<Partial<ModelType> | undefined>;
  findMany: (
    data: any,
    select?: SelectType
  ) => Promise<Array<Partial<ModelType>>>;
  findUnique: (
    data: any,
    select?: SelectType
  ) => Promise<Partial<ModelType | undefined>>;
  update: (data: any, select?: SelectType) => Promise<Partial<ModelType>>;
  updateMany: (data: any) => Promise<Prisma.BatchPayload>;
  upsert: (data: any, select?: SelectType) => Promise<Partial<ModelType>>;
}
