import {useQuery} from '@apollo/client';
import {formatList} from '@ethang-one/util-typescript';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {default as reactHtmlParser} from 'react-html-parser';

import {Query} from '../../../graphql/types';
import {CreateUpdateTimes} from '../../common/create-update-times/create-update-times';
import {HeadTag} from '../../common/head-tag/head-tag';
import styles from './blog-layout.module.css';
import {blogQuery} from './blog-layout-gql';

export const BlogLayout = (): JSX.Element | undefined => {
  const router = useRouter();
  const [authors, setAuthors] = useState<string>();

  useEffect(() => {
    hljs.registerLanguage('typescript', typescript);
    hljs.highlightAll();
  }, []);

  const {data, error} = useQuery<Query>(blogQuery, {
    fetchPolicy: 'cache-and-network',
    onCompleted: data => {
      if (data?.blog?.authors && data.blog.authors.length > 0) {
        setAuthors(
          formatList(
            data.blog.authors.map(author => `${author.author.firstName} ${author.author.lastName}`),
          ),
        );
      }
    },
    skip: typeof router.query.slug !== 'string',
    variables: {
      where: {
        slug: router.query.slug as string,
      },
    },
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data?.blog) {
    return (
      <>
        <HeadTag title={data.blog.title}/>
        <div className={styles.BlogInfo}>
          <div>
            <h1 style={{color: 'var(--primary-color)'}}>{data.blog.title}</h1>
            <div>Authors: {authors}</div>
            <CreateUpdateTimes
              created={data.blog.createdAt as string}
              updated={data.blog.updatedAt as string}
            />
          </div>
          <div>
            <Image
              alt={data.blog.featuredImage.altText}
              src={data.blog.featuredImage.url}
              height={data.blog.featuredImage.height}
              width={data.blog.featuredImage.width}
            />
          </div>
        </div>
        <hr/>
        <div>{reactHtmlParser(data.blog.content)}</div>
      </>
    );
  }

  return null;
};
