import {
  AffectedRows,
  CreateManyFinanceRecordArgs as CreateManyFinanceRecordArguments,
  FinanceRecord,
  FindManyFinanceRecordArgs as FindManyFinanceRecordArguments,
  FindUniqueFinanceRecordArgs as FindUniqueFinanceRecordArguments,
} from '@ethang/types';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

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

  @Mutation(() => {
    return AffectedRows;
  })
  async createFinanceRecords(
    @Args() data: CreateManyFinanceRecordArguments
  ): Promise<AffectedRows> {
    return this.financeRecordService.createMany(data);
  }

  @Query(returnFinanceRecord, { nullable: true })
  async financeRecord(
    @Args() data: FindUniqueFinanceRecordArguments
  ): Promise<Partial<FinanceRecord> | undefined> {
    return this.financeRecordService.findUnique(data);
  }

  @Query(returnFinanceRecordArray, { nullable: 'items' })
  async financeRecords(
    @Args() data?: FindManyFinanceRecordArguments
  ): Promise<FinanceRecord[]> {
    return this.financeRecordService.findMany(data);
  }
}
