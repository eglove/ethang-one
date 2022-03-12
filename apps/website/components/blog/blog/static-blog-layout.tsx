import {
  formatList,
  humanReadableLocalDateTime,
} from '@ethang/util-typescript';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { OGP as Ogp } from 'react-ogp';
import { jsonLdScriptProps } from 'react-schemaorg';
import { Blog as BlogSchema } from 'schema-dts';

import { Blog } from '../../../../../graphql/types';
import { Container } from '../../common/container/container';
import { HeadTag } from '../../common/head-tag/head-tag';
import { ImageContainer } from '../../common/image-container/image-container';
import styles from './blog-layout.module.css';

interface StaticBlogLayoutProperties {
  blog: Blog;
  children: JSX.Element | JSX.Element[];
}

export const StaticBlogLayout = ({
  blog,
  children,
}: StaticBlogLayoutProperties): JSX.Element => {
  const [authors, setAuthors] = useState<string>();

  useEffect(() => {
    setAuthors(
      formatList(
        blog.authors.items.map(author => {
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
      <Head>
        <script
          {...jsonLdScriptProps<BlogSchema>({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            audience: 'Developers',
            author: {
              '@type': 'Person',
              name: 'Ethan Glover',
              url: 'https://www.ethang.dev/',
            },
            dateModified: blog.updatedAt,
            datePublished: blog.createdAt,
            description: blog.description,
            headline: blog.title,
            image: blog.featuredImage.image.downloadUrl,
            thumbnailUrl: `${blog.featuredImage.image.downloadUrl}`,
          })}
        />
        <Ogp
          description={blog.description}
          image={blog.featuredImage.image.downloadUrl}
          title={blog.title}
          type="article"
          siteName="EthanG"
          url={`https://www.ethang.dev/blog/${blog.slug}`}
        />
      </Head>
      <Script
        src="https://ethang.disqus.com/embed.js"
        data-timestamp={new Date()}
      />
      <div className={styles.BlogInfo}>
        <div>
          <h1 className={styles.Title}>{blog.title}</h1>
          <div>Authors: {authors}</div>
          <div>{`Last Updated: ${humanReadableLocalDateTime(
            blog.orderDate
          )}`}</div>
        </div>
        <div>
          <ImageContainer
            imageProperties={{
              alt: blog.featuredImage.altText,
              height: blog.featuredImage.height,
              src: blog.featuredImage.image.downloadUrl,
              width: blog.featuredImage.width,
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
