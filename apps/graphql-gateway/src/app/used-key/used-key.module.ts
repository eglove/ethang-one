import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { UnusedKeyService } from '../unused-key/unused-key.service';
import { UsedKeyResolver } from './used-key.resolver';
import { UsedKeyService } from './used-key.service';

@Module({
  providers: [UnusedKeyService, UsedKeyResolver, UsedKeyService, PrismaService],
})
export class UsedKeyModule {}
