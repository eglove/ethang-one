import { blogs as staticBlogs } from '@ethang/local-database';
import { Breadcrumbs, NextLink } from '@ethang/react-components';
import {
  formatList,
  humanReadableLocalDateTime,
} from '@ethang/util-typescript';

import { HeadTag } from '../../common/head-tag/head-tag';
import styles from './blogs-layout.module.css';

export function BlogsLayout(): JSX.Element {
  const sortedBlogKeys = Object.keys(staticBlogs).sort(
    (firstElement, secondElement) => {
      const firstDate = new Date(
        staticBlogs[firstElement as keyof typeof staticBlogs].updatedAt
      );
      const secondDate = new Date(
        staticBlogs[secondElement as keyof typeof staticBlogs].updatedAt
      );

      if (firstDate > secondDate) {
        return -1;
      }

      if (firstDate < secondDate) {
        return 1;
      }

      return 0;
    }
  );

  return (
    <>
      <HeadTag title="Blog" />
      <Breadcrumbs
        links={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blogs' },
        ]}
      />
      {sortedBlogKeys.map(key => {
        const blog = staticBlogs[key as keyof typeof staticBlogs];
        return (
          <div key={blog.title} style={{ height: '300px' }}>
            <NextLink
              linkProperties={{
                className: styles.BlogLink,
                href: `/blog/${blog.slug}`,
              }}
            >
              <div
                className={styles.BlogContent}
                style={{
                  background: `url(${blog.featuredImage.url}) center no-repeat`,
                  height: `${blog.featuredImage.height}px`,
                  maxHeight: '300px',
                  width: '100%',
                }}
              >
                <h2>{blog.title}</h2>
                <div>
                  {formatList(
                    blog.authors.map(author => {
                      return author.fullName;
                    })
                  )}
                </div>
                <div>{`Last Updated: ${humanReadableLocalDateTime(
                  blog.updatedAt
                )}`}</div>
              </div>
            </NextLink>
          </div>
        );
      })}
    </>
  );
}
