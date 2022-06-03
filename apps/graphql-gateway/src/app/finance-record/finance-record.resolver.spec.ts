import { Test, TestingModule } from '@nestjs/testing';

import { FinanceRecordResolver } from './finance-record.resolver';

describe('FinanceRecordResolver', () => {
  let resolver: FinanceRecordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceRecordResolver],
    }).compile();

    resolver = module.get<FinanceRecordResolver>(FinanceRecordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
