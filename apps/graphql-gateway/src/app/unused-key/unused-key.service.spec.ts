import { Test, TestingModule } from '@nestjs/testing';

import { UnusedKeyService } from './unused-key.service';

describe('UnusedKeyService', () => {
  let service: UnusedKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnusedKeyService],
    }).compile();

    service = module.get<UnusedKeyService>(UnusedKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
