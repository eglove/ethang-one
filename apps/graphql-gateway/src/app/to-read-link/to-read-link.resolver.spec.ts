import { Test, TestingModule } from '@nestjs/testing';

import { ToReadLinkResolver } from './to-read-link.resolver';
import { ToReadLinkService } from './to-read-link.service';

describe('ToReadLinkResolver', () => {
  let resolver: ToReadLinkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToReadLinkResolver, ToReadLinkService],
    }).compile();

    resolver = module.get<ToReadLinkResolver>(ToReadLinkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
