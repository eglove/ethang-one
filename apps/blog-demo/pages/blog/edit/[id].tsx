import { Container } from '@ethang/react-components';
import { swrFetcher } from '@ethang/util-typescript';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
import useSWR from 'swr';

import { BlogForm } from '../../../components/blogs/blog-form';
import { RailsBlog } from '../../../components/blogs/blogs-layout';
import { API_ROOT } from '../../_app';

const BlogCreateContainer: CSSProperties = {
  display: 'grid',
  placeItems: 'center',
};

export function BlogEditById(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;

  const { data: blog } = useSWR<RailsBlog>(
    `${API_ROOT}/blogs/${String(id)}`,
    swrFetcher
  );

  if (typeof blog === 'undefined') {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container containerProperties={{ style: BlogCreateContainer }}>
      <h2>New Blog</h2>
      <BlogForm
        httpMethod="PATCH"
        postUrl={`${API_ROOT}/blogs/${String(id)}`}
        initialState={{
          Body: blog.body,
          Title: blog.title,
        }}
      />
    </Container>
  );
}

export default BlogEditById;
