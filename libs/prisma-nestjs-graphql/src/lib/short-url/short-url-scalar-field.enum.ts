import { registerEnumType } from '@nestjs/graphql';

export enum ShortUrlScalarFieldEnum {
    id = "id",
    originalUrl = "originalUrl",
    usedKeyId = "usedKeyId",
    expirationDate = "expirationDate"
}


registerEnumType(ShortUrlScalarFieldEnum, { name: 'ShortUrlScalarFieldEnum', description: undefined })
