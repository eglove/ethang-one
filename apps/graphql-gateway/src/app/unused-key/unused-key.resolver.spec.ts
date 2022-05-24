import { Test, TestingModule } from '@nestjs/testing';

import { UnusedKeyResolver } from './unused-key.resolver';
import { UnusedKeyService } from './unused-key.service';

describe('UnusedKeyResolver', () => {
  let resolver: UnusedKeyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnusedKeyResolver, UnusedKeyService],
    }).compile();

    resolver = module.get<UnusedKeyResolver>(UnusedKeyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
