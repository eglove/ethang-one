import { registerEnumType } from '@nestjs/graphql';

export enum UsedKeyScalarFieldEnum {
    id = "id",
    key = "key"
}


registerEnumType(UsedKeyScalarFieldEnum, { name: 'UsedKeyScalarFieldEnum', description: undefined })
