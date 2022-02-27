import { formatList } from '@ethang-one/util-typescript';
import { useEffect, useState } from 'react';

import { blogs } from '../../../json/blogs';
import { blogSlug } from '../../../json/models/blog';
import { Container } from '../../common/container/container';
import { CreateUpdateTimes } from '../../common/create-update-times/create-update-times';
import { HeadTag } from '../../common/head-tag/head-tag';
import { ImageContainer } from '../../common/image-container/image-container';
import styles from './blog-layout.module.css';

interface StaticBlogLayoutProperties {
  children: JSX.Element | JSX.Element[];
  slug: blogSlug;
}

export const StaticBlogLayout = ({
  children,
  slug,
}: StaticBlogLayoutProperties): JSX.Element => {
  const blog = blogs[slug];

  const [authors, setAuthors] = useState<string>();

  useEffect(() => {
    setAuthors(
      formatList(
        blog.authors.map(author => {
          let authorName = author.firstName;

          if (typeof author.lastName !== 'undefined') {
            authorName += ` ${author.lastName}`;
          }

          return authorName;
        })
      )
    );
  }, [blog.authors]);

  return (
    <Container>
      <HeadTag title={blog.title} />
      <div className={styles.BlogInfo as string}>
        <div>
          <h1 className={styles.Title as string}>{blog.title}</h1>
          <div>Authors: {authors}</div>
          <CreateUpdateTimes created={blog.created} updated={blog.updated} />
        </div>
        <div>
          <ImageContainer
            imageProperties={{
              alt: blog.image.altText,
              height: blog.image.height,
              src: blog.image.url,
              width: blog.image.width,
            }}
          />
        </div>
      </div>
      <hr />
      <article>{children}</article>
    </Container>
  );
};
