import { NextLink } from '@ethang/react-components';
import {
  formatList,
  humanReadableLocalDateTime,
} from '@ethang/util-typescript';

import { Blog } from '../../../graphql/types';
import commonStyles from '../../../styles/common.module.css';
import { HeadTag } from '../../common/head-tag/head-tag';
import styles from './blogs-layout.module.css';

interface BlogsLayoutProperties {
  blogs: Blog[];
}

export function BlogsLayout({ blogs }: BlogsLayoutProperties): JSX.Element {
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
      {blogs.map(blog => {
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
                  background: `url(${blog.featuredImage.image.downloadUrl}) center no-repeat`,
                  height: `${blog.featuredImage.height}px`,
                  maxHeight: '300px',
                  width: '100%',
                }}
              >
                <h2>{blog.title}</h2>
                <div>
                  {formatList(
                    blog.authors.items.map(author => {
                      let authorName = author.firstName;

                      if (typeof author.lastName !== 'undefined') {
                        authorName += ` ${author.lastName}`;
                      }

                      return authorName;
                    })
                  )}
                </div>
                <div>{`Last Updated: ${humanReadableLocalDateTime(
                  blog.orderDate
                )}`}</div>
              </div>
            </NextLink>
          </div>
        );
      })}
    </>
  );
}
