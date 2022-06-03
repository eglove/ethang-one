import { Args, Query, Resolver } from '@nestjs/graphql';

import { FinanceRecord } from '../../@generated/prisma-nestjs-graphql/finance-record/finance-record.model';
import { FindManyFinanceRecordArgs as FindManyFinanceRecordArguments } from '../../@generated/prisma-nestjs-graphql/finance-record/find-many-finance-record.args';
import { FindUniqueFinanceRecordArgs as FindUniqueFinanceRecordArguments } from '../../@generated/prisma-nestjs-graphql/finance-record/find-unique-finance-record.args';
import { FinanceRecordService } from './finance-record.service';

const returnFinanceRecord = (): typeof FinanceRecord => {
  return FinanceRecord;
};

const returnFinanceRecordArray = (): [typeof FinanceRecord] => {
  return [FinanceRecord];
};

@Resolver()
export class FinanceRecordResolver {
  constructor(private readonly financeRecordService: FinanceRecordService) {}

  @Query(returnFinanceRecord, { nullable: true })
  async financeRecord(
    @Args() data: FindUniqueFinanceRecordArguments
  ): Promise<Partial<FinanceRecord> | undefined> {
    return this.financeRecordService.financeRecord(data);
  }

  @Query(returnFinanceRecordArray, { nullable: 'items' })
  async financeRecords(
    @Args() data?: FindManyFinanceRecordArguments
  ): Promise<FinanceRecord[]> {
    return this.financeRecordService.financeRecords(data);
  }
}
