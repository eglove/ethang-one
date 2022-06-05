import { Test, TestingModule } from '@nestjs/testing';

import { financeRecordServiceMock } from '../../mocks/finance-record/finance-record-service.mock';
import { FinanceRecordController } from './finance-record.controller';
import { FinanceRecordService } from './finance-record.service';

describe('FinanceRecordController', () => {
  let controller: FinanceRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceRecordController],
      providers: [
        { provide: FinanceRecordService, useValue: financeRecordServiceMock() },
      ],
    }).compile();

    controller = module.get(FinanceRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get finance records in the last year', async () => {
    const records = await controller.getFinanceRecordsInLastYear();

    expect(Array.isArray(records.financeData)).toBe(true);
    expect(Array.isArray(records.financeData)).toBe(true);
  });
});
