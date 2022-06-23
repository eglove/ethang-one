import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { ToReadLinkResolver } from './to-read-link.resolver';
import { ToReadLinkService } from './to-read-link.service';

@Module({
  providers: [ToReadLinkResolver, ToReadLinkService, PrismaService],
})
export class ToReadLinkModule {}
