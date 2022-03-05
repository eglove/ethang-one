import { NextApiResponse } from 'next';

import { blogs, blogSlug } from '../database/data/blogs';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SiteMap = (): void => {};

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getServerSideProps = ({
  res,
}: {
  res: NextApiResponse;
}): { props: Record<string, unknown> } => {
  const slugs = Object.keys(blogs).sort((a: blogSlug, b: blogSlug) => {
    return blogs[b].created.getTime() - blogs[a].created.getTime();
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
      ${slugs
        .map(slug => {
          return `
          <url>
              <loc>${`${rootUrl}/blog/${slug}`}</loc>
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
