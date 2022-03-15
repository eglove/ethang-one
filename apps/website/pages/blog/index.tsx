import { gql } from '@apollo/client';

import { BlogsLayout } from '../../components/blog/blogs/blogs-layout';
import { Container } from '../../components/common/container/container';
import { Blog, Data } from '../../graphql/types';
import { apolloClient } from '../_app';

export type BlogsData = { blogs: Blog[] };

const Blogs = ({ blogs }: BlogsData): JSX.Element => {
  return (
    <Container>
      <BlogsLayout blogs={blogs} />
    </Container>
  );
};

export default Blogs;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<{ props: BlogsData }> {
  const { data } = await apolloClient.client.query<Data>({
    query: gql`
      query BlogsQuery {
        blogsList(orderBy: orderDate_DESC) {
          items {
            authors {
              items {
                firstName
                lastName
              }
            }
            featuredImage {
              height
              image {
                downloadUrl
              }
            }
            orderDate
            slug
            title
            orderDate
          }
        }
      }
    `,
  });

  return {
    props: {
      blogs: data.blogsList.items,
    },
  };
}
