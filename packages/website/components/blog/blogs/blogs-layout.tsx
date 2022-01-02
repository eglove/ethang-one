import {useQuery} from '@apollo/client';
import {formatList} from '@ethang-one/util-typescript';

import {Query} from '../../../graphql/types';
import {CreateUpdateTimes} from '../../common/create-update-times/create-update-times';
import {HeadTag} from '../../common/head-tag/head-tag';
import {LinkComponent} from '../../common/link-component/link-component';
import styles from './blogs-layout.module.css';
import {blogsQuery} from './blogs-layout-gql';

export const BlogsLayout = (): JSX.Element => {
  const {data, error} = useQuery<Query>(blogsQuery, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: {
        createdAt: 'desc',
      },
    },
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <HeadTag title="Blog"/>
      {data?.blogs?.map(blog => (
        <div
          key={blog.id}
          className={styles.BlogsContainer}
          style={{height: '300px'}}
        >
          <LinkComponent
            content={
              <div
                className={styles.BlogContent}
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
                    blog.BlogAuthor.map(author => `${author.Person.firstName} ${author.Person.lastName}`),
                  )}
                </div>
                <CreateUpdateTimes
                  created={blog.createdAt as string}
                  updated={blog.updatedAt as string}
                />
              </div>
            }
            href={`/blog/${blog.slug}`}
            className={styles.BlogLink}
          />
        </div>
      ))}
    </>
  );
};
