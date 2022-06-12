import { registerEnumType } from '@nestjs/graphql';

export enum PersonScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    firstName = "firstName",
    lastName = "lastName",
    birthday = "birthday",
    weightLbs = "weightLbs",
    heightIn = "heightIn",
    userId = "userId"
}


registerEnumType(PersonScalarFieldEnum, { name: 'PersonScalarFieldEnum', description: undefined })
