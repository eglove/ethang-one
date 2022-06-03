import { registerEnumType } from '@nestjs/graphql';

export enum UnusedKeyScalarFieldEnum {
    id = "id",
    key = "key"
}


registerEnumType(UnusedKeyScalarFieldEnum, { name: 'UnusedKeyScalarFieldEnum', description: undefined })
