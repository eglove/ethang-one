import { Blog as BlogItem } from '@ethang-one/prisma-connection';
import { PrismaClient } from '@prisma/client';

import { BlogsLayout } from '../../components/blog/blogs/blogs-layout';
import { Container } from '../../components/common/container/container';

interface BlogProperties {
  blogs: BlogItem[];
}

const Blog = ({ blogs }: BlogProperties): JSX.Element => {
  return (
    <Container>
      <BlogsLayout blogs={blogs} />
    </Container>
  );
};

export default Blog;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<Record<string, unknown>> {
  const prisma = new PrismaClient();

  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      BlogAuthor: {
        select: {
          Person: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
      Image: {
        select: {
          altText: true,
          height: true,
          url: true,
          width: true,
        },
      },
      createdAt: true,
      id: true,
      imageId: true,
      slug: true,
      title: true,
      updatedAt: true,
    },
  });

  return {
    props: {
      blogs: blogs.map(blog => {
        return {
          ...blog,
          createdAt: blog.createdAt.toISOString(),
          updatedAt: blog.updatedAt.toString(),
        };
      }),
    },
    revalidate: 60,
  };
}
