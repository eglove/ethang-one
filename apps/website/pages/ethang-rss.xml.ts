import { convertTimeZone, rssDateFormat } from '@ethang/util-typescript';
import { NextApiResponse } from 'next';

import { blogs, blogSlug } from '../database/data/blogs';
import { Blog } from '../database/models/blog';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const EthangRss = (): void => {};

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getServerSideProps = ({
  res,
}: {
  res: NextApiResponse;
}): Record<string, unknown> => {
  const rootUrl = 'https://www.ethang.dev';
  const slugs = Object.keys(blogs).sort((a: blogSlug, b: blogSlug) => {
    return blogs[b].created.getTime() - blogs[a].created.getTime();
  });

  const mostRecentBlog = blogs[slugs[0]] as Blog;

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>EthanG Blog</title>
        <link>${rootUrl}/blog</link>
        <description>Ethan Glover's Personal Blog</description>
        <language>en-us</language>
        <pubDate>${rssDateFormat(mostRecentBlog.created)}</pubDate>
        ${slugs
          .map(slug => {
            const blog = blogs[slug] as Blog;

            return `
            <item>
              <title>${blog.title.replaceAll('&', '&#38;')}</title>
              <link>${`${rootUrl}/blog/${slug.replaceAll('&', '&#38;')}`}</link>
              <description>${blog.description.replaceAll(
                '&',
                '&#38;'
              )}</description>
              <author>${blog.authors[0].firstName} ${
              blog.authors[0].lastName ?? ''
            }</author>
              <pubDate>${rssDateFormat(blog.created)}</pubDate>
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
