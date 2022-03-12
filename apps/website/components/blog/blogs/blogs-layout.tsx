import {
  formatList,
  humanReadableLocalDateTime,
} from '@ethang/util-typescript';

import { Blog } from '../../../../../graphql/types';
import { HeadTag } from '../../common/head-tag/head-tag';
import { LinkComponent } from '../../common/link-component/link-component';
import styles from './blogs-layout.module.css';

interface BlogsLayoutProperties {
  blogs: Blog[];
}

export const BlogsLayout = ({ blogs }: BlogsLayoutProperties): JSX.Element => {
  return (
    <>
      <HeadTag title="Blog" />
      {blogs.map(blog => {
        return (
          <div key={blog.title} style={{ height: '300px' }}>
            <LinkComponent
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
            </LinkComponent>
          </div>
        );
      })}
    </>
  );
};
