import { registerEnumType } from '@nestjs/graphql';

export enum UsedKeyScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    key = "key"
}


registerEnumType(UsedKeyScalarFieldEnum, { name: 'UsedKeyScalarFieldEnum', description: undefined })
