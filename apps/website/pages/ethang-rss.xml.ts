import { rssDateFormat } from '@ethang/util-typescript';
import { NextApiResponse } from 'next';

import { blogsSortedByUpdate } from '../db/data/blogs/blogs';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const EthangRss = (): void => {};

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getServerSideProps = async ({
  res,
}: {
  res: NextApiResponse;
}): Promise<Record<string, unknown>> => {
  const rootUrl = 'https://www.ethang.dev';

  const blogArray = blogsSortedByUpdate();
  const mostRecentBlog = blogArray[0];

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>EthanG Blog</title>
        <link>${rootUrl}/blog</link>
        <description>Ethan Glover's Personal Blog</description>
        <language>en-us</language>
        <pubDate>${rssDateFormat(mostRecentBlog.updatedAt)}</pubDate>
        ${blogArray
          .map(blog => {
            return `
            <item>
              <title>${blog.title.replaceAll('&', '&#38;')}</title>
              <link>${`${rootUrl}/blog/${blog.slug.replaceAll(
                '&',
                '&#38;'
              )}`}</link>
              <description>${blog.description.replaceAll(
                '&',
                '&#38;'
              )}</description>
              <author>${blog.authors[0].fullName}</author>
              <pubDate>${rssDateFormat(blog.updatedAt)}</pubDate>
            </item>
          `;
          })
          .join('')}
      </channel>
    </rss>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(rss);
  res.end();

  return {
    props: {},
  };
};

export default EthangRss;
