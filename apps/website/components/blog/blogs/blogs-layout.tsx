import { Blog, blogs as staticBlogs } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';
import {
  formatList,
  humanReadableLocalDateTime,
} from '@ethang/util-typescript';

import commonStyles from '../../../styles/common.module.css';
import { HeadTag } from '../../common/head-tag/head-tag';
import styles from './blogs-layout.module.css';

export function BlogsLayout(): JSX.Element {
  const sortedBlogKeys = Object.keys(staticBlogs).sort(
    (firstElement, secondElement) => {
      const firstDate = new Date(staticBlogs[firstElement].updatedAt);
      const secondDate = new Date(staticBlogs[secondElement].updatedAt);

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
      <ol
        itemScope
        className={commonStyles.Breadcrumb}
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/ListItem"
        >
          <NextLink linkProperties={{ href: '/', itemProp: 'item' }}>
            <span itemProp="name">Home</span>
          </NextLink>
          <meta content="1" itemProp="position" />
        </li>
        <li
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/ListItem"
        >
          <NextLink linkProperties={{ href: '/blog', itemProp: 'item' }}>
            <span itemProp="name">Blogs</span>
          </NextLink>
          <meta content="2" itemProp="position" />
        </li>
      </ol>
      {sortedBlogKeys.map(key => {
        const blog = staticBlogs[key] as Blog;
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
