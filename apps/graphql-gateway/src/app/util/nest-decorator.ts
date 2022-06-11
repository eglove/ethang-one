import { User } from '@ethang/prisma-nestjs-graphql';

export const nestReturnBoolean = (): typeof Boolean => {
  return Boolean;
};

export const nestReturnString = (): typeof String => {
  return String;
};

export const nestReturnUser = (): typeof User => {
  return User;
};
