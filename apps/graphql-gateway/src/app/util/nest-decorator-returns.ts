import { Calorie, Person, User } from '@ethang/prisma-nestjs-graphql';

export const nestReturnBoolean = (): typeof Boolean => {
  return Boolean;
};

export const nestReturnCalorie = (): typeof Calorie => {
  return Calorie;
};

export const nestReturnCalorieArray = (): Array<typeof Calorie> => {
  return [Calorie];
};

export const nestReturnPerson = (): typeof Person => {
  return Person;
};

export const nestReturnPersonArray = (): Array<typeof Person> => {
  return [Person];
};

export const nestReturnString = (): typeof String => {
  return String;
};

export const nestReturnUser = (): typeof User => {
  return User;
};
