import { gql } from '@apollo/client';
import { NextApiResponse } from 'next';

import { Data } from '../graphql/types';
import { apolloClient } from './_app';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SiteMap = (): void => {};

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getServerSideProps = async ({
  res,
}: {
  res: NextApiResponse;
}): Promise<{ props: Record<string, unknown> }> => {
  const { data } = await apolloClient.client.query<Data>({
    query: gql`
      query RssQuery {
        blogsList(orderBy: orderDate_DESC) {
          items {
            slug
          }
        }
      }
    `,
  });
  const rootUrl = 'https://www.ethang.dev';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
         <loc>${rootUrl}</loc>
      </url>
       <url>
         <loc>${rootUrl}/courses</loc>
       </url>
      <url>
         <loc>${rootUrl}/blog</loc>
      </url>
      ${data.blogsList.items
        .map(blog => {
          return `
          <url>
              <loc>${`${rootUrl}/blog/${blog.slug}`}</loc>
          </url>
        `;
        })
        .join('')}
   </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
