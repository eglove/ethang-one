import { NextApiResponse } from 'next';

import { blogsSortedByUpdate } from '../../../libs/local-database/src/lib/data/blogs/blogs';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SiteMap = (): void => {};

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getServerSideProps = async ({
  res,
}: {
  res: NextApiResponse;
}): Promise<{ props: Record<string, unknown> }> => {
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
      ${blogsSortedByUpdate()
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
