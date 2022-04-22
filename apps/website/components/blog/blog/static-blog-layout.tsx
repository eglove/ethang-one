import { NextLink } from '@ethang/react-components';
import {
  formatList,
  humanReadableLocalDateTime,
} from '@ethang/util-typescript';
import { DiscussionEmbed } from 'disqus-react';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { OGP as Ogp } from 'react-ogp';
import { jsonLdScriptProps } from 'react-schemaorg';
import { Blog as BlogSchema } from 'schema-dts';

import { Blog } from '../../../db/models/blog';
import commonStyles from '../../../styles/common.module.css';
import { BASE_URL } from '../../../util/constants';
import { Container } from '../../common/container/container';
import { HeadTag } from '../../common/head-tag/head-tag';
import { ImageContainer } from '../../common/image-container/image-container';
import styles from './blog-layout.module.css';

interface StaticBlogLayoutProperties {
  blog: Blog;
  children: JSX.Element | JSX.Element[];
}

export function StaticBlogLayout({
  blog,
  children,
}: StaticBlogLayoutProperties): JSX.Element {
  const [authors, setAuthors] = useState<string>();

  useEffect(() => {
    setAuthors(
      formatList(
        blog.authors.map(author => {
          return author.fullName;
        })
      )
    );
  }, [blog.authors]);

  return (
    <Container>
      <HeadTag title={blog.title}>
        <Ogp
          description={blog.description}
          image={blog.featuredImage.url}
          siteName="EthanG"
          title={blog.title}
          type="article"
          url={`https://www.ethang.dev/blog/${blog.slug}`}
        />
      </HeadTag>
      <Script
        {...jsonLdScriptProps<BlogSchema>({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          audience: 'Developers',
          author: {
            '@type': 'Person',
            name: 'Ethan Glover',
            url: 'https://www.ethang.dev/',
          },
          dateModified: blog.updatedAt.toUTCString(),
          datePublished: blog.createdAt.toUTCString(),
          description: blog.description,
          headline: blog.title,
          image: blog.featuredImage.url,
          thumbnailUrl: `${blog.featuredImage.url}`,
        })}
      />
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
        <li
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/ListItem"
        >
          <NextLink
            linkProperties={{ href: `/blog/${blog.slug}`, itemProp: 'item' }}
          >
            <span itemProp="name">{blog.title}</span>
          </NextLink>
          <meta content="3" itemProp="position" />
        </li>
      </ol>
      <div className={styles.BlogInfo}>
        <div>
          <h1 className={styles.Title}>{blog.title}</h1>
          <div>Authors: {authors}</div>
          <div>{`Last Updated: ${humanReadableLocalDateTime(
            blog.updatedAt
          )}`}</div>
        </div>
        <div>
          <ImageContainer image={blog.featuredImage} />
        </div>
      </div>
      <hr />
      <article>{children}</article>
      <DiscussionEmbed
        shortname="ethang"
        config={{
          identifier: blog.slug,
          language: 'en-US',
          url: `${BASE_URL}/blog/${blog.slug}`,
        }}
      />
    </Container>
  );
}
