import { Injectable } from '@angular/core';
import { BadRequestException } from '@nestjs/common';
import { randomBytes, scrypt as scrypt_ } from 'node:crypto';
import { promisify } from 'node:util';

import { User } from './user.entity';
import { UsersService } from './users.service';

const scrypt = promisify(scrypt_);

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(email: string, password: string): Promise<User> {
    const users = await this.usersService.find(email);

    if (users.length > 0) {
      throw new BadRequestException('Email already in use.');
    }

    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    const result = `${salt}.${hash.toString('hex')}`;

    return this.usersService.create(email, result);
  }

  signin() {}
}
