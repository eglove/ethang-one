import { formatList } from '@ethang-one/util-typescript';

import { blogs, blogSlug } from '../../../database/data/blogs';
import { Blog } from '../../../database/models/blog';
import { CreateUpdateTimes } from '../../common/create-update-times/create-update-times';
import { HeadTag } from '../../common/head-tag/head-tag';
import { LinkComponent } from '../../common/link-component/link-component';
import styles from './blogs-layout.module.css';

type BlogData = {
  slug: blogSlug;
} & Blog;

export const BlogsLayout = (): JSX.Element => {
  const blogList: BlogData[] = Object.keys(blogs)
    .sort((a: blogSlug, b: blogSlug) => {
      return blogs[b].created.getTime() - blogs[a].updated.getTime();
    })
    .map(key => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return { slug: key, ...blogs[key] } as BlogData;
    });

  return (
    <>
      <HeadTag title="Blog" />
      {blogList.map(blog => {
        return (
          <div key={blog.title} style={{ height: '300px' }}>
            <LinkComponent
              linkProperties={{
                className: styles.BlogLink as string,
                href: `/blog/${blog.slug}`,
              }}
            >
              <div
                className={styles.BlogContent as string}
                style={{
                  background: `url(${blog.image.url}) center no-repeat`,
                  height: `${blog.image.height}px`,
                  maxHeight: '300px',
                  width: '100%',
                }}
              >
                <h2>{blog.title}</h2>
                <div>
                  {formatList(
                    blog.authors.map(author => {
                      let authorName = author.firstName;

                      if (typeof author.lastName !== 'undefined') {
                        authorName += ` ${author.lastName}`;
                      }

                      return authorName;
                    })
                  )}
                </div>
                <CreateUpdateTimes
                  created={blog.created as unknown as string}
                  updated={blog.updated as unknown as string}
                />
              </div>
            </LinkComponent>
          </div>
        );
      })}
    </>
  );
};
