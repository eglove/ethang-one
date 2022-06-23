import { Test, TestingModule } from '@nestjs/testing';

import { prismaMock } from '../../../../../prisma/singleton';
import { PrismaService } from '../prisma/prisma.service';
import { ToReadLinkResolver } from './to-read-link.resolver';
import { ToReadLinkService } from './to-read-link.service';

describe('ToReadLinkResolver', () => {
  let resolver: ToReadLinkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ToReadLinkResolver,
        ToReadLinkService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    resolver = module.get<ToReadLinkResolver>(ToReadLinkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
