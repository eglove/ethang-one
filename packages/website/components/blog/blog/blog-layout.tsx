import { Blog } from '@ethang-one/prisma-connection';
import { formatList } from '@ethang-one/util-typescript';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { default as reactHtmlParser } from 'react-html-parser';

import { CreateUpdateTimes } from '../../common/create-update-times/create-update-times';
import { HeadTag } from '../../common/head-tag/head-tag';
import styles from './blog-layout.module.css';

interface BlogLayoutProperties {
  blog: Blog;
}

export const BlogLayout = ({
  blog,
}: BlogLayoutProperties): JSX.Element | undefined => {
  const [authors, setAuthors] = useState<string>();

  useEffect(() => {
    hljs.registerLanguage('typescript', typescript);
    hljs.highlightAll();

    setAuthors(
      formatList(
        blog.BlogAuthor.map(author => {
          return `${author.Person.firstName} ${author.Person.lastName}`;
        })
      )
    );
  }, [blog.BlogAuthor]);

  return (
    <>
      <HeadTag title={blog.title} />
      <div className={styles.BlogInfo as string}>
        <div>
          <h1 style={{ color: 'var(--primary-color)' }}>{blog.title}</h1>
          <div>Authors: {authors}</div>
          <CreateUpdateTimes
            created={blog.createdAt as unknown as string}
            updated={blog.updatedAt as unknown as string}
          />
        </div>
        <div>
          <Image
            alt={blog.Image.altText}
            src={blog.Image.url}
            height={blog.Image.height}
            width={blog.Image.width}
          />
        </div>
      </div>
      <hr />
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
      <div>{reactHtmlParser(blog.content)}</div>
    </>
  );
};
