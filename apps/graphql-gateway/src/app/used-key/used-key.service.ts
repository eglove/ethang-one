import {
  CreateOneUsedKeyArgs as CreateOneUsedKeyArguments,
  DeleteOneUsedKeyArgs as DeleteOneUsedKeyArguments,
  UnusedKey,
  UsedKey,
} from '@ethang/types';
import { Injectable } from '@nestjs/common';

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
