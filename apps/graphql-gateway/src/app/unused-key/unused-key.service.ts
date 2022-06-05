import {
  CreateOneUnusedKeyArgs as CreateOneUnusedKeyArguments,
  DeleteOneUnusedKeyArgs as DeleteOneUnusedKeyArguments,
  UnusedKey,
} from '@ethang/prisma-nestjs-graphql';
import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

const MINIMUM_UNUSED_KEYS = 100;

@Injectable()
export class UnusedKeyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOneUnusedKeyArguments): Promise<UnusedKey> {
    return this.prisma.unusedKey.create(data);
  }

  async fillMinimumUnusedKeys(): Promise<void> {
    const count = await this.prisma.unusedKey.count();

    if (count < MINIMUM_UNUSED_KEYS) {
      for (let index = 0; index < MINIMUM_UNUSED_KEYS - count; index++) {
        const key = faker.random.alpha(8);

        this.prisma.unusedKey
          .create({
            data: {
              key,
            },
          })
          .catch((error: Error) => {
            throw error;
          });
      }
    }
  }

  async getUniqueKey(): Promise<UnusedKey | undefined> {
    const unusedKey = await this.prisma.unusedKey.findFirst();

    if (unusedKey === null) {
      return;
    }

    return unusedKey;
  }

  async delete(data: DeleteOneUnusedKeyArguments): Promise<UnusedKey> {
    return this.prisma.unusedKey.delete(data);
  }
}
