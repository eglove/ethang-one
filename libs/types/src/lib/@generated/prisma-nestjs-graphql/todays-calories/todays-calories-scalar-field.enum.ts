import { registerEnumType } from '@nestjs/graphql';

export enum TodaysCaloriesScalarFieldEnum {
  id = 'id',
  birthday = 'birthday',
  currentCalories = 'currentCalories',
  height = 'height',
  weight = 'weight',
}

registerEnumType(TodaysCaloriesScalarFieldEnum, {
  description: undefined,
  name: 'TodaysCaloriesScalarFieldEnum',
});
