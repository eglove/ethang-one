import { Test, TestingModule } from '@nestjs/testing';

import { FinanceRecordService } from './finance-record.service';

describe('FinanceRecordService', () => {
  let service: FinanceRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceRecordService],
    }).compile();

    service = module.get<FinanceRecordService>(FinanceRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
