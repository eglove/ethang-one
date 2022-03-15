import { BlogProperties, blogQuery } from './query';

export async function getBlog(slug: string): Promise<{
  props: BlogProperties;
  revalidate?: number;
}> {
  const blog = await blogQuery(slug);

  return {
    props: {
      blog,
    },
  };
}
