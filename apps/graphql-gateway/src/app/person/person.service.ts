import {
  CreateManyPersonArgs,
  CreateOnePersonArgs,
  DeleteManyPersonArgs,
  DeleteOnePersonArgs,
  FindFirstPersonArgs,
  FindManyPersonArgs,
  FindUniquePersonArgs,
  Person,
  UpdateManyPersonArgs,
  UpdateOnePersonArgs,
  UpsertOnePersonArgs,
} from '@ethang/prisma-nestjs-graphql';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { PrismaCrud } from '../util/interfaces';

@Injectable()
export class PersonService implements PrismaCrud<Person, Prisma.PersonSelect> {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOnePersonArgs): Promise<Person> {
    return this.prisma.person.create(data);
  }

  async createMany(data: CreateManyPersonArgs): Promise<Prisma.BatchPayload> {
    return this.prisma.person.createMany(data);
  }

  async delete(
    data: DeleteOnePersonArgs,
    select?: Prisma.PersonSelect
  ): Promise<Partial<Person>> {
    return this.prisma.person.delete({
      ...data,
      select,
    });
  }

  async deleteMany(data: DeleteManyPersonArgs): Promise<Prisma.BatchPayload> {
    return this.prisma.person.deleteMany(data);
  }

  async findFirst(
    data: FindFirstPersonArgs,
    select?: Prisma.PersonSelect
  ): Promise<Partial<Person> | undefined> {
    const person = await this.prisma.person.findFirst({
      ...data,
      select,
    });

    if (person === null) {
      return;
    }

    return person;
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

  async findUnique(
    data: FindUniquePersonArgs,
    select?: Prisma.PersonSelect | undefined
  ): Promise<Partial<Person | undefined>> {
    const person = await this.prisma.person.findUnique({
      ...data,
      select,
    });

    if (person === null) {
      return;
    }

    return person;
  }

  async update(
    data: UpdateOnePersonArgs,
    select?: Prisma.PersonSelect
  ): Promise<Partial<Person>> {
    return this.prisma.person.update({
      ...data,
      select,
    });
  }

  async updateMany(data: UpdateManyPersonArgs): Promise<Prisma.BatchPayload> {
    return this.prisma.person.updateMany(data);
  }

  async upsert(
    data: UpsertOnePersonArgs,
    select?: Prisma.PersonSelect | undefined
  ): Promise<Partial<Person>> {
    return this.prisma.person.upsert({
      ...data,
      select,
    });
  }
}
