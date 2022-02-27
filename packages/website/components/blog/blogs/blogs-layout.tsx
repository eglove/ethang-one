import { formatList } from '@ethang-one/util-typescript';

import { blogs } from '../../../json/blogs';
import { Blog, blogSlug } from '../../../json/models/blog';
import { CreateUpdateTimes } from '../../common/create-update-times/create-update-times';
import { HeadTag } from '../../common/head-tag/head-tag';
import { LinkComponent } from '../../common/link-component/link-component';
import styles from './blogs-layout.module.css';

export const BlogsLayout = (): JSX.Element => {
  const blogSlugs = Object.getOwnPropertyNames(blogSlug);

  return (
    <>
      <HeadTag title="Blog" />
      {blogSlugs.map((slug: string) => {
        const blog = blogs[blogSlug[slug]] as Blog;
        return (
          <div key={slug} style={{ height: '300px' }}>
            <LinkComponent
              linkProperties={{
                className: styles.BlogLink as string,
                href: `/blog/${blogSlug[slug] as blogSlug}`,
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
