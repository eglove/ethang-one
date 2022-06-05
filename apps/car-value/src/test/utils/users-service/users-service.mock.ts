import { NotFoundException } from '@nestjs/common';

import { User } from '../../../app/users/user.entity';
import { createUser } from './create-user';

export const usersServiceMock = (users: User[] = []): unknown => {
  return {
    async create(email: string, password: string): Promise<User> {
      const user = createUser({ email, password });

      users.push(user);
      return user;
    },
    async find(email: string): Promise<User[]> {
      let filteredUsers: User[] = [];

      if (users.length > 0) {
        filteredUsers = users.filter(user => {
          return user.email === email;
        });
      }

      if (filteredUsers.length > 0) {
        return [filteredUsers[0]];
      }

      return [];
    },
    async findOne(id: number): Promise<User | undefined> {
      const foundUser = users.find(user => {
        return user.id === id;
      });

      if (typeof foundUser === 'undefined') {
        throw new NotFoundException('User not found.');
      }

      return foundUser;
    },
  };
};
