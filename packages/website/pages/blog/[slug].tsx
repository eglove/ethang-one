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

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps({
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

export default Blog;
