import { registerEnumType } from '@nestjs/graphql';

export enum CompleteCourseScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    userId = "userId"
}


registerEnumType(CompleteCourseScalarFieldEnum, { name: 'CompleteCourseScalarFieldEnum', description: undefined })
