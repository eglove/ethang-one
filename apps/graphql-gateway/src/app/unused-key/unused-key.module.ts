import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { UsedKeyService } from '../used-key/used-key.service';
import { UnusedKeyResolver } from './unused-key.resolver';
import { UnusedKeyService } from './unused-key.service';

@Module({
  providers: [
    PrismaService,
    UnusedKeyResolver,
    UnusedKeyService,
    UsedKeyService,
  ],
})
export class UnusedKeyModule {}
