import { registerEnumType } from '@nestjs/graphql';

export enum FinanceRecordScalarFieldEnum {
    id = "id",
    accountName = "accountName",
    currentValue = "currentValue",
    recordedDate = "recordedDate"
}


registerEnumType(FinanceRecordScalarFieldEnum, { name: 'FinanceRecordScalarFieldEnum', description: undefined })
