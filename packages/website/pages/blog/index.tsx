import { addApolloState } from '@ethang-one/apollo';

import { BlogsLayout } from '../../components/blog/blogs/blogs-layout';
import { Container } from '../../components/common/container/container';
import { BlogsQuery, blogsQuery } from '../../graphql-queries/blogs-query';
import { apolloClient } from '../_app';

const Blog = (): JSX.Element => {
  return (
    <Container>
      <BlogsLayout />
    </Container>
  );
};

export default Blog;

// eslint-disable-next-line unicorn/prevent-abbreviations,@typescript-eslint/no-unused-vars
async function getServerSideProps(): Promise<Record<string, unknown>> {
  await apolloClient.client.query<BlogsQuery>({
    query: blogsQuery,
  });

  return addApolloState(apolloClient.client, {
    props: {},
  });
}
