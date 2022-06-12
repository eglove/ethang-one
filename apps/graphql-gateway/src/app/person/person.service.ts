import {
  CreateOnePersonArgs,
  FindManyPersonArgs,
  Person,
} from '@ethang/prisma-nestjs-graphql';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PersonService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOnePersonArgs): Promise<Person> {
    return this.prisma.person.create(data);
  }

  async findMany(
    data: FindManyPersonArgs,
    select?: Prisma.PersonSelect
  ): Promise<Array<Partial<Person>>> {
    return this.prisma.person.findMany({
      ...data,
      select,
    });
  }
}
