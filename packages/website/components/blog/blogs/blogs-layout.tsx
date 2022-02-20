import { useQuery } from '@apollo/client';
import { formatList } from '@ethang-one/util-typescript';

import { BlogsQuery, blogsQuery } from '../../../graphql-queries/blogs-query';
import { CreateUpdateTimes } from '../../common/create-update-times/create-update-times';
import { HeadTag } from '../../common/head-tag/head-tag';
import { LinkComponent } from '../../common/link-component/link-component';
import { LoadingImage } from '../../common/loading-image/loading-image';
import styles from './blogs-layout.module.css';

export const BlogsLayout = (): JSX.Element => {
  const { data } = useQuery<BlogsQuery>(blogsQuery, {
    fetchPolicy: 'cache-and-network',
  });

  if (typeof data === 'undefined') {
    return <LoadingImage />;
  }

  return (
    <>
      <HeadTag title="Blog" />
      {data.Blog.map(blog => {
        return (
          <div key={blog.id as string} style={{ height: '300px' }}>
            <LinkComponent
              linkProperties={{
                className: styles.BlogLink as string,
                href: `/blog/${blog.slug}`,
              }}
            >
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
                    blog.BlogAuthors.map(author => {
                      return `${author.Person.firstName} ${author.Person.lastName}`;
                    })
                  )}
                </div>
                <CreateUpdateTimes
                  created={blog.createdAt as unknown as string}
                  updated={blog.updatedAt as unknown as string}
                />
              </div>
            </LinkComponent>
          </div>
        );
      })}
    </>
  );
};
