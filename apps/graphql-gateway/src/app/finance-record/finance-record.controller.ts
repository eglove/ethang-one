import { FinanceGraphData } from '@ethang/ethang-db';
import { Controller, Get } from '@nestjs/common';

import { FinanceRecordService } from './finance-record.service';

@Controller('finance-record')
export class FinanceRecordController {
  constructor(private readonly financeRecordService: FinanceRecordService) {}

  @Get('/finance-records-in-last-year')
  async getFinanceRecordsInLastYear(): Promise<FinanceGraphData> {
    return this.financeRecordService.getFinanceRecordsInLastYear();
  }
}
