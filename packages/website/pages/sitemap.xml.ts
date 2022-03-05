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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
         <loc>https://www.ethang.dev/</loc>
      </url>
       <url>
         <loc>https://www.ethang.dev/courses</loc>
       </url>
      <url>
         <loc>https://www.ethang.dev/blog</loc>
      </url>
      ${slugs
        .map(slug => {
          return `
          <url>
              <loc>${`https://www.ethang.dev/blog/${slug}`}</loc>
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
