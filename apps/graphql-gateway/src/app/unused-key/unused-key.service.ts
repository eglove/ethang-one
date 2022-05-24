import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';

import { CreateOneUnusedKeyArgs as CreateOneUnusedKeyArguments } from '../../@generated/prisma-nestjs-graphql/unused-key/create-one-unused-key.args';
import { DeleteOneUnusedKeyArgs as DeleteOneUnusedKeyArguments } from '../../@generated/prisma-nestjs-graphql/unused-key/delete-one-unused-key.args';
import { UnusedKey } from '../../@generated/prisma-nestjs-graphql/unused-key/unused-key.model';
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
