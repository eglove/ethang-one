import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateManyFinanceRecordArgs as CreateManyFinanceRecordArguments } from '../../@generated/prisma-nestjs-graphql/finance-record/create-many-finance-record.args';
import { FinanceRecord } from '../../@generated/prisma-nestjs-graphql/finance-record/finance-record.model';
import { FindManyFinanceRecordArgs as FindManyFinanceRecordArguments } from '../../@generated/prisma-nestjs-graphql/finance-record/find-many-finance-record.args';
import { FindUniqueFinanceRecordArgs as FindUniqueFinanceRecordArguments } from '../../@generated/prisma-nestjs-graphql/finance-record/find-unique-finance-record.args';
import { AffectedRows } from '../../@generated/prisma-nestjs-graphql/prisma/affected-rows.output';
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
