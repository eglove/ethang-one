import { registerEnumType } from '@nestjs/graphql';

export enum UnusedKeyScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    key = "key"
}


registerEnumType(UnusedKeyScalarFieldEnum, { name: 'UnusedKeyScalarFieldEnum', description: undefined })
