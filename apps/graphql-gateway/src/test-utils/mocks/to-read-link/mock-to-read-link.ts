import {
  DeleteManyToReadLinkArgs,
  DeleteOneToReadLinkArgs,
  FindFirstToReadLinkArgs,
  FindManyToReadLinkArgs,
  FindUniqueToReadLinkArgs,
  ToReadLink,
  ToReadLinkCreateInput,
  ToReadLinkCreateManyInput,
  UpdateManyToReadLinkArgs,
  UpdateOneToReadLinkArgs,
  UpsertOneToReadLinkArgs,
} from '@ethang/prisma-nestjs-graphql';
import { faker } from '@faker-js/faker';
import { Prisma } from '@prisma/client';

import { prismaMock } from '../../../../../../prisma/singleton';
import { MockUser } from '../user/mock-user';

export type InputOutput<InputType, OutputType> = {
  input: InputType;
  output: OutputType;
};

export type Overwrites<InputType, OutputType> = Partial<
  InputOutput<Partial<InputType>, Partial<OutputType>>
>;

export const MockToReadLink = {
  create(
    overwrites?: Overwrites<ToReadLinkCreateInput, ToReadLink>
  ): InputOutput<ToReadLinkCreateInput, ToReadLink> {
    const user = MockUser.create();
    const today = new Date();
    const id = faker.datatype.string();

    const input: ToReadLinkCreateInput = {
      createdAt: today,
      id,
      updatedAt: today,
      url: faker.internet.url(),
      user: {
        connect: {
          id: user.output.id,
        },
      },
      ...overwrites?.input,
    };

    const output: ToReadLink = {
      createdAt: today,
      id,
      updatedAt: today,
      url: input.url,
      userId: user.output.id,
    };

    prismaMock.toReadLink.create.mockResolvedValue({
      createdAt: today,
      id,
      updatedAt: today,
      url: input.url,
      userId: user.output.id,
      ...overwrites?.output,
    });

    return { input, output };
  },
  createMany(
    amount: number,
    overwrites?: Overwrites<ToReadLinkCreateManyInput, Prisma.BatchPayload>
  ): InputOutput<ToReadLinkCreateManyInput[], Prisma.BatchPayload> {
    if (amount < 2) {
      throw new Error('Use createToReadLink of amount is less than 2.');
    }

    const input: ToReadLinkCreateManyInput[] = [];
    for (let index = 0; index < amount; index++) {
      input.push({
        id: faker.datatype.string(),
        url: faker.internet.url(),
        userId: faker.datatype.string(),
        ...overwrites?.input,
      });
    }

    const output = { count: amount };

    prismaMock.toReadLink.createMany.mockResolvedValue(output);

    return { input, output };
  },
  delete(): { input: DeleteOneToReadLinkArgs; output: ToReadLink } {
    const link = MockToReadLink.create();

    const input = {
      where: {
        id: link.output.id,
      },
    };

    const { output } = link;

    prismaMock.toReadLink.delete.mockResolvedValue(output);

    return { input, output };
  },
  deleteMany(amount: number): {
    input: DeleteManyToReadLinkArgs;
    output: Prisma.BatchPayload;
  } {
    const links = MockToReadLink.createMany(amount);

    const input = {
      where: {
        OR: links.input.map(link => {
          return {
            id: {
              equals: link.id,
            },
          };
        }),
      },
    };

    const output = { count: amount };

    prismaMock.toReadLink.deleteMany.mockResolvedValue(output);

    return { input, output };
  },
  findFirst(): { input: FindFirstToReadLinkArgs; output: ToReadLink } {
    const user = MockUser.create();
    const linkInputOverwrite = {
      user: {
        connect: {
          id: user.output.id,
        },
      },
    };

    const one = MockToReadLink.create({ input: linkInputOverwrite });
    MockToReadLink.create({ input: linkInputOverwrite });
    const three = MockToReadLink.create({ input: linkInputOverwrite });

    const input = {
      where: {
        userId: {
          equals: one.output.userId,
        },
      },
    };

    prismaMock.toReadLink.findFirst.mockResolvedValue(three.output);

    return { input, output: three.output };
  },
  findMany(
    overwrites?: Overwrites<FindManyToReadLinkArgs, ToReadLink[]>
  ): InputOutput<FindManyToReadLinkArgs, ToReadLink[]> {
    const user = MockUser.create();

    const inputOverwrite = {
      user: {
        connect: {
          id: user.output.id,
        },
      },
    };
    const linkOne = MockToReadLink.create({ input: inputOverwrite });
    const linkTwo = MockToReadLink.create({ input: inputOverwrite });
    const linkThree = MockToReadLink.create({ input: inputOverwrite });

    const input: FindManyToReadLinkArgs = {
      where: {
        userId: {
          equals: user.output.id,
        },
      },
      ...overwrites?.input,
    };

    let output = [];
    if (Array.isArray(overwrites?.output)) {
      for (const overwrite of overwrites?.output ?? []) {
        if (typeof overwrite !== 'undefined') {
          output.push(overwrite);
        }
      }
    } else {
      output = [linkOne.output, linkTwo.output, linkThree.output];
    }

    prismaMock.toReadLink.findMany.mockResolvedValue(output);

    return { input, output };
  },
  findUnique(): InputOutput<FindUniqueToReadLinkArgs, ToReadLink> {
    const link = MockToReadLink.create();

    const input = {
      where: {
        id: link.output.id,
      },
    };

    prismaMock.toReadLink.findUnique.mockResolvedValue(link.output);

    return { input, output: link.output };
  },
  update(): InputOutput<UpdateOneToReadLinkArgs, ToReadLink> {
    const link = MockToReadLink.create();
    const newUrl = faker.internet.url();

    const input = {
      data: {
        url: {
          set: newUrl,
        },
      },
      where: {
        id: link.output.id,
      },
    };

    const output = {
      ...link.output,
      url: newUrl,
    };

    prismaMock.toReadLink.update.mockResolvedValue(output);

    return { input, output };
  },
  updateMany(
    amount: number
  ): InputOutput<UpdateManyToReadLinkArgs, Prisma.BatchPayload> {
    const user = MockUser.create();
    MockToReadLink.createMany(amount, {
      input: {
        userId: user.output.id,
      },
    });

    const input: UpdateManyToReadLinkArgs = {
      data: {
        url: { set: faker.internet.url() },
      },
      where: {
        userId: {
          equals: user.output.id,
        },
      },
    };

    const output = { count: amount };

    prismaMock.toReadLink.updateMany.mockResolvedValue(output);

    return { input, output };
  },
  upsert(): InputOutput<UpsertOneToReadLinkArgs, ToReadLink> {
    const { output: user } = MockUser.create();
    const { output: link } = MockToReadLink.create();
    const url = faker.internet.url();

    const input: UpsertOneToReadLinkArgs = {
      create: {
        url,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
      update: {
        url: { set: url },
      },
      where: {
        id: link.id,
      },
    };

    prismaMock.toReadLink.upsert.mockResolvedValue(link);

    return { input, output: link };
  },
};
