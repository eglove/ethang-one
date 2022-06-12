import { registerEnumType } from '@nestjs/graphql';

export enum CalorieScalarFieldEnum {
    id = "id",
    currentCount = "currentCount",
    dailyCalories = "dailyCalories",
    deficit = "deficit",
    personId = "personId"
}


registerEnumType(CalorieScalarFieldEnum, { name: 'CalorieScalarFieldEnum', description: undefined })
