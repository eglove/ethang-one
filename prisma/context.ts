import { PrismaClient } from '@prisma/client'
import { mockDeep, DeepMockProxy } from 'jest-mock-extended'

export type Context = {
  prisma: PrismaClient
}

export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>
}

export const createMockContext = (): MockContext => {
  // @ts-ignore https://www.prisma.io/docs/guides/testing/unit-testing
  return {
    prisma: mockDeep<PrismaClient>(),
  }
}
