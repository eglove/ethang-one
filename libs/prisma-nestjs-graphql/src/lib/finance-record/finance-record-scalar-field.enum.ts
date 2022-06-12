import { registerEnumType } from '@nestjs/graphql';

export enum FinanceRecordScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    accountName = "accountName",
    currentValue = "currentValue",
    recordedDate = "recordedDate"
}


registerEnumType(FinanceRecordScalarFieldEnum, { name: 'FinanceRecordScalarFieldEnum', description: undefined })
