import { Test, TestingModule } from '@nestjs/testing';

import { UsedKeyResolver } from './used-key.resolver';
import { UsedKeyService } from './used-key.service';

describe('UsedKeyResolver', () => {
  let resolver: UsedKeyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsedKeyResolver, UsedKeyService],
    }).compile();

    resolver = module.get<UsedKeyResolver>(UsedKeyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
