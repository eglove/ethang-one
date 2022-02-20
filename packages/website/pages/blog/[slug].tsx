import { addApolloState } from '@ethang-one/apollo';

import { BlogLayout } from '../../components/blog/blog/blog-layout';
import { Container } from '../../components/common/container/container';
import {
  BlogQuery,
  blogQuery,
  blogQueryVariables,
} from '../../graphql-queries/blog-query';
import { apolloClient } from '../_app';

const Blog = (): JSX.Element => {
  return (
    <Container>
      <BlogLayout />
    </Container>
  );
};

export default Blog;

// eslint-disable-next-line unicorn/prevent-abbreviations,@typescript-eslint/no-unused-vars
async function getServerSideProps({
  params,
}): Promise<Record<string, unknown>> {
  await apolloClient.client.query<BlogQuery>({
    query: blogQuery,
    variables: blogQueryVariables(params.slug),
  });

  return addApolloState(apolloClient.client, {
    props: {},
  });
}
