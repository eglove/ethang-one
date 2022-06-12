import { registerEnumType } from '@nestjs/graphql';

export enum CalorieRecordScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    calories = "calories",
    leftForToday = "leftForToday",
    personId = "personId"
}


registerEnumType(CalorieRecordScalarFieldEnum, { name: 'CalorieRecordScalarFieldEnum', description: undefined })
