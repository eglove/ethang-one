import { registerEnumType } from '@nestjs/graphql';

export enum HabitScalarFieldEnum {
  id = 'id',
  name = 'name',
  recurInterval = 'recurInterval',
  dueDate = 'dueDate',
}

registerEnumType(HabitScalarFieldEnum, {
  description: undefined,
  name: 'HabitScalarFieldEnum',
});