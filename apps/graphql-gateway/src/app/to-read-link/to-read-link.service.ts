import {
  CreateManyToReadLinkArgs,
  CreateOneToReadLinkArgs,
  DeleteManyToReadLinkArgs,
  DeleteOneToReadLinkArgs,
  FindFirstToReadLinkArgs,
  FindManyToReadLinkArgs,
  FindUniqueToReadLinkArgs,
  ToReadLink,
  UpdateManyToReadLinkArgs,
  UpdateOneToReadLinkArgs,
  UpsertOneToReadLinkArgs,
} from '@ethang/prisma-nestjs-graphql';
import { isValidUrl } from '@ethang/util-typescript';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { PrismaCrud } from '../util/interfaces';

const invalidUrl = 'Invalid URL';

@Injectable()
export class ToReadLinkService
  implements PrismaCrud<ToReadLink, Prisma.ToReadLinkSelect>
{
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreateOneToReadLinkArgs,
    select?: Prisma.ToReadLinkSelect
  ): Promise<Partial<ToReadLink>> {
    if (!isValidUrl(data.data.url)) {
      throw new BadRequestException(invalidUrl);
    }

    return this.prisma.toReadLink.create({
      ...data,
      select,
    });
  }

  async createMany(
    data: CreateManyToReadLinkArgs
  ): Promise<Prisma.BatchPayload> {
    for (const datum of data.data) {
      if (!isValidUrl(datum.url)) {
        throw new BadRequestException(invalidUrl);
      }
    }

    return this.prisma.toReadLink.createMany(data);
  }

  async delete(
    data: DeleteOneToReadLinkArgs,
    select?: Prisma.ToReadLinkSelect
  ): Promise<Partial<ToReadLink>> {
    return this.prisma.toReadLink.delete({
      ...data,
      select,
    });
  }

  async deleteMany(
    data: DeleteManyToReadLinkArgs
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.toReadLink.deleteMany(data);
  }

  async findFirst(
    data: FindFirstToReadLinkArgs,
    select?: Prisma.ToReadLinkSelect
  ): Promise<Partial<ToReadLink> | undefined> {
    const link = await this.prisma.toReadLink.findFirst({
      ...data,
      select,
    });

    if (link === null) {
      return;
    }

    return link;
  }

  async findMany(
    data: FindManyToReadLinkArgs,
    select?: Prisma.ToReadLinkSelect
  ): Promise<Array<Partial<ToReadLink>>> {
    return this.prisma.toReadLink.findMany({
      ...data,
      select,
    });
  }

  async findUnique(
    data: FindUniqueToReadLinkArgs,
    select?: Prisma.ToReadLinkSelect
  ): Promise<Partial<ToReadLink | undefined>> {
    const link = await this.prisma.toReadLink.findUnique({
      ...data,
      select,
    });

    if (link === null) {
      return;
    }

    return link;
  }

  async update(
    data: UpdateOneToReadLinkArgs,
    select?: Prisma.ToReadLinkSelect
  ): Promise<Partial<ToReadLink>> {
    return this.prisma.toReadLink.update({
      ...data,
      select,
    });
  }

  async updateMany(
    data: UpdateManyToReadLinkArgs
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.toReadLink.updateMany(data);
  }

  async upsert(
    data: UpsertOneToReadLinkArgs,
    select?: Prisma.ToReadLinkSelect
  ): Promise<Partial<ToReadLink>> {
    return this.prisma.toReadLink.upsert({
      ...data,
      select,
    });
  }
}
