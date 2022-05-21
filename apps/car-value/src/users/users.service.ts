import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>
  ) {}

  async create(email: string, password: string): Promise<User> {
    const user = this.repository.create({ email, password });

    return this.repository.save(user);
  }

  async findOne(id: number): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { id } });

    if (user === null) {
      return undefined;
    }

    return user;
  }

  async find(email: string): Promise<User[]> {
    return this.repository.find({ where: { email } });
  }

  async update(id: number, attributes: Partial<User>): Promise<User> {
    const user = await this.findOne(id);

    if (typeof user === 'undefined') {
      throw new NotFoundException(`User ${id} not found.`);
    }

    Object.assign(user, attributes);

    return this.repository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);

    if (typeof user === 'undefined') {
      throw new NotFoundException(`User ${id} not found.`);
    }

    return this.repository.remove(user);
  }
}
