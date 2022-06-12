import { registerEnumType } from '@nestjs/graphql';

export enum HabitScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    recurInterval = "recurInterval",
    dueDate = "dueDate"
}


registerEnumType(HabitScalarFieldEnum, { name: 'HabitScalarFieldEnum', description: undefined })
