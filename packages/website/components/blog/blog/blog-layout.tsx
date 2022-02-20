import { useQuery } from '@apollo/client';
import { formatList } from '@ethang-one/util-typescript';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { default as reactHtmlParser } from 'react-html-parser';

import {
  BlogQuery,
  blogQuery,
  blogQueryVariables,
} from '../../../graphql-queries/blog-query';
import { CreateUpdateTimes } from '../../common/create-update-times/create-update-times';
import { HeadTag } from '../../common/head-tag/head-tag';
import { LoadingImage } from '../../common/loading-image/loading-image';
import styles from './blog-layout.module.css';

export const BlogLayout = (): JSX.Element | undefined => {
  const router = useRouter();
  const { data } = useQuery<BlogQuery>(blogQuery, {
    fetchPolicy: 'cache-and-network',
    variables: blogQueryVariables(router.query.slug as string),
  });
  const [authors, setAuthors] = useState<string>();

  useEffect(() => {
    hljs.registerLanguage('typescript', typescript);
    hljs.highlightAll();

    if (typeof data !== 'undefined') {
      setAuthors(
        formatList(
          data.Blog[0].BlogAuthors.map(author => {
            return `${author.Person.firstName as string} ${
              author.Person.lastName as string
            }`;
          })
        )
      );
    }
  }, [data]);

  if (typeof data === 'undefined') {
    return <LoadingImage />;
  }

  return (
    <>
      <HeadTag title={data.Blog[0].title} />
      <div className={styles.BlogInfo as string}>
        <div>
          <h1 style={{ color: 'var(--primary-color)' }}>
            {data.Blog[0].title}
          </h1>
          <div>Authors: {authors}</div>
          <CreateUpdateTimes
            created={data.Blog[0].createdAt as unknown as string}
            updated={data.Blog[0].updatedAt as unknown as string}
          />
        </div>
        <div>
          <Image
            alt={data.Blog[0].Image.altText}
            src={data.Blog[0].Image.url}
            height={data.Blog[0].Image.height}
            width={data.Blog[0].Image.width}
          />
        </div>
      </div>
      <hr />
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
      <div>{reactHtmlParser(data.Blog[0].content)}</div>
    </>
  );
};
