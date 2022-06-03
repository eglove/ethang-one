import { Module } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";
import { FinanceRecordResolver } from "./finance-record.resolver";
import { FinanceRecordService } from "./finance-record.service";
import { FinanceRecordController } from "./finance-record.controller";

@Module({
  providers: [FinanceRecordService, FinanceRecordResolver, PrismaService],
  controllers: [FinanceRecordController],
})
export class FinanceRecordModule {}
