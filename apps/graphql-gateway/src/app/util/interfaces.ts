import { Prisma } from '@prisma/client';

export interface PrismaCrud<ModelType, SelectType> {
  create: (data: never, select?: SelectType) => Promise<Partial<ModelType>>;
  createMany: (data: never) => Promise<Prisma.BatchPayload>;
  delete: (data: never, select?: SelectType) => Promise<Partial<ModelType>>;
  deleteMany: (data: never) => Promise<Prisma.BatchPayload>;
  findFirst: (
    data: never,
    select?: SelectType
  ) => Promise<Partial<ModelType> | undefined>;
  findMany: (
    data: never,
    select?: SelectType
  ) => Promise<Array<Partial<ModelType>>>;
  findUnique: (
    data: never,
    select?: SelectType
  ) => Promise<Partial<ModelType | undefined>>;
  update: (data: never, select?: SelectType) => Promise<Partial<ModelType>>;
  updateMany: (data: never) => Promise<Prisma.BatchPayload>;
  upsert: (data: never, select?: SelectType) => Promise<Partial<ModelType>>;
}
