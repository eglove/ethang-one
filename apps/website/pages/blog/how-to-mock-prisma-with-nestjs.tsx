import { blogs } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

const createUserCode = `constructor(private readonly prisma: PrismaService) {}

async create(
  data: CreateOneUserArgs,
  select?: Prisma.UserSelect
): Promise<Partial<User>> {
  return this.prisma.user.create({
    ...data,
    select,
  });
}`;

const singletonCode = `import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import prisma from './client';

jest.mock('./client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>`;

const providerInUnitTestCode = `let service: UserService;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      UserService,
      { provide: PrismaService, useValue: prismaMock },
    ],
  }).compile();

  service = module.get<UserService>(UserService);
});`;

const createUserTestCode = `test('should create new user ', async () => {
  const user = {
    id: 1,
    name: 'Jill',
    email: 'hello@example.com',
    acceptTermsAndConditions: true,
  }

  prismaMock.user.create.mockResolvedValue(user)

  await expect(service.create(user)).resolves.toEqual({
    id: 1,
    name: 'Jill',
    email: 'hello@example.com',
  })
})`;

export default function HowToMockPrismaWithNestjs(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.howToMockPrismaWithNestJs}>
      <p>
        When working with NestJS it can sometimes be difficult to figure out how
        to write tests around the dependency injection system. In searching for
        how I could write unit tests for services when using Prisma I found a
        lot of wild and hacky workarounds. But by consulting Prisma
        documentation I found a very simple, and clean answer.
      </p>
      <p>
        First thing, let&apos;s say we have this code that creates a new user.
        You&apos;ll notice we&apos;re using dependency injection to bring in a
        PrismaService which connects to the database.
      </p>
      <SyntaxHighlighter language="typescript">
        {createUserCode}
      </SyntaxHighlighter>
      <p>
        First we need to{' '}
        <NextLink
          linkProperties={{
            href: 'https://www.prisma.io/docs/guides/testing/unit-testing',
          }}
        >
          follow the Prisma documentation
        </NextLink>{' '}
        to create mock objects. Most importantly for our case is creating the
        singleton.ts file.
      </p>
      <SyntaxHighlighter language="typescript">
        {singletonCode}
      </SyntaxHighlighter>
      <p>
        We can then use the exported prismaMock as a provider in our unit test.
      </p>
      <SyntaxHighlighter language="typescript">
        {providerInUnitTestCode}
      </SyntaxHighlighter>
      <p>
        Then just return to the Prisma documentation to keep following their
        example to write a test for creating a new user with the singleton
        method.
      </p>
      <SyntaxHighlighter language="typescript">
        {createUserTestCode}
      </SyntaxHighlighter>
    </StaticBlogLayout>
  );
}
