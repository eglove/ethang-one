import { Blog } from '@ethang-one/prisma-connection';
import { formatList } from '@ethang-one/util-typescript';

import { CreateUpdateTimes } from '../../common/create-update-times/create-update-times';
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
          <div key={blog.id} style={{ height: '300px' }}>
            <LinkComponent
              content={
                <div
                  className={styles.BlogContent as string}
                  style={{
                    background: `url(${blog.Image.url}) center no-repeat`,
                    height: `${blog.Image.height}px`,
                    maxHeight: '300px',
                    width: '100%',
                  }}
                >
                  <h2>{blog.title}</h2>
                  <div>
                    {formatList(
                      blog.BlogAuthor.map(author => {
                        return `${author.Person.firstName} ${author.Person.lastName}`;
                      })
                    )}
                  </div>
                  <CreateUpdateTimes
                    created={blog.createdAt as unknown as string}
                    updated={blog.updatedAt as unknown as string}
                  />
                </div>
              }
              href={`/blog/${blog.slug}`}
              className={styles.BlogLink as string}
            />
          </div>
        );
      })}
    </>
  );
};
