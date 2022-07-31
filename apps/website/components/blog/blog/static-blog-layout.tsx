import { Blog, Course } from '@ethang/local-database';
import {
  Breadcrumbs,
  Container,
  NextImageContainer,
} from '@ethang/react-components';
import { useKnuthPlassLineBreaks } from '@ethang/react-hooks';
import {
  formatList,
  humanReadableLocalDateTime,
} from '@ethang/util-typescript';
import { DiscussionEmbed } from 'disqus-react';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { JsonLd, jsonLdScriptProps } from 'react-schemaorg';
import { Blog as BlogSchema, Review } from 'schema-dts';

import { BASE_URL } from '../../../util/constants';
import { HeadTag } from '../../common/head-tag/head-tag';
import styles from './blog-layout.module.css';

type StaticBlogLayoutProperties = {
  blog: Blog;
  children: JSX.Element | JSX.Element[];
  courseReviewed?: Course;
};

export function StaticBlogLayout({
  blog,
  children,
  courseReviewed,
}: StaticBlogLayoutProperties): JSX.Element {
  useKnuthPlassLineBreaks('p');
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
      <HeadTag title={blog.title} />
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
      {typeof courseReviewed === 'undefined' ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
      ) : (
        <JsonLd<Review>
          item={{
            '@context': 'https://schema.org',
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: blog.authors[0].fullName,
            },
            creator: courseReviewed.instructors?.[0].fullName,
            itemReviewed: {
              '@type': 'Course',
              image: blog.featuredImage.url,
            },
            name: courseReviewed.title,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: courseReviewed.rating,
            },
          }}
        />
      )}
      <Breadcrumbs
        links={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blogs' },
          { href: `/blog/${blog.slug}`, label: blog.title },
        ]}
      />
      <div className={styles.BlogInfo}>
        <div>
          <h1 className={styles.Title}>{blog.title}</h1>
          <div>
            Author{blog.authors.length > 1 ? 's' : ''}: {authors}
          </div>
          <div>{`Last Updated: ${humanReadableLocalDateTime(
            blog.updatedAt
          )}`}</div>
        </div>
        <div>
          <NextImageContainer image={blog.featuredImage} />
        </div>
      </div>
      <hr />
      <article>{children}</article>
      <DiscussionEmbed
        shortname="ethang"
        config={{
          identifier: blog.slug,
          language: 'en-US',
          title: blog.title,
          url: `${BASE_URL}/blog/${blog.slug}`,
        }}
      />
    </Container>
  );
}
