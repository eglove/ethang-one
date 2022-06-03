import { Test, TestingModule } from '@nestjs/testing';

import { FinanceRecordController } from './finance-record.controller';

describe('FinanceRecordController', () => {
  let controller: FinanceRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceRecordController],
    }).compile();

    controller = module.get<FinanceRecordController>(FinanceRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
