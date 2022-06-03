import { Injectable } from '@nestjs/common';

import { UnusedKey } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/unused-key/unused-key.model';
import { CreateOneUsedKeyArgs as CreateOneUsedKeyArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/used-key/create-one-used-key.args';
import { DeleteOneUsedKeyArgs as DeleteOneUsedKeyArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/used-key/delete-one-used-key.args';
import { UsedKey } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/used-key/used-key.model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsedKeyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOneUsedKeyArguments): Promise<UsedKey> {
    return this.prisma.usedKey.create(data);
  }

  async delete(data: DeleteOneUsedKeyArguments): Promise<UnusedKey> {
    return this.prisma.usedKey.delete(data);
  }
}
