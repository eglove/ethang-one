import { registerEnumType } from '@nestjs/graphql';

export enum ToReadLinkScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    url = "url",
    userId = "userId"
}


registerEnumType(ToReadLinkScalarFieldEnum, { name: 'ToReadLinkScalarFieldEnum', description: undefined })
