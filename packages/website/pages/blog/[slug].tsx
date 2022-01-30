import { Blog as BlogItem } from '@ethang-one/prisma-connection';
import { PrismaClient } from '@prisma/client';

import { BlogLayout } from '../../components/blog/blog/blog-layout';
import { Container } from '../../components/common/container/container';

interface BlogProperties {
  blog: BlogItem;
}

const Blog = ({ blog }: BlogProperties): JSX.Element => {
  return (
    <Container>
      <BlogLayout blog={blog} />
    </Container>
  );
};

export default Blog;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}): Promise<Record<string, unknown>> {
  const prisma = new PrismaClient();

  const blog = await prisma.blog.findUnique({
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
      content: true,
      createdAt: true,
      imageId: true,
      title: true,
      updatedAt: true,
    },
    where: {
      slug: params.slug,
    },
  });

  return {
    props: {
      blog: {
        ...blog,
        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
      },
    },
    revalidate: 60,
  };
}

export async function getStaticPaths(): Promise<Record<string, unknown>> {
  const prisma = new PrismaClient();

  const blogs = await prisma.blog.findMany({
    select: {
      slug: true,
    },
  });

  const paths = blogs.map(blog => {
    return {
      params: {
        slug: blog.slug,
      },
    };
  });

  return { fallback: 'blocking', paths };
}
