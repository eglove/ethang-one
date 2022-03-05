import { formatList } from '@ethang-one/util-typescript';
import Script from 'next/script';
import { useEffect, useState } from 'react';

import { blogs, blogSlug } from '../../../database/data/blogs';
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
      <Script
        src="https://ethang.disqus.com/embed.js"
        data-timestamp={new Date()}
      />
      <div className={styles.BlogInfo}>
        <div>
          <h1 className={styles.Title}>{blog.title}</h1>
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
      <div id="disqus_thread" />
    </Container>
  );
};
