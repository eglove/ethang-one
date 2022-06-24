import { Container } from '@ethang/react-components';
import { CSSProperties } from 'react';

import { BlogForm } from '../../components/blogs/blog-form';
import { API_ROOT } from '../_app';

const BlogCreateContainer: CSSProperties = {
  display: 'grid',
  placeItems: 'center',
};

export function BlogCreate(): JSX.Element {
  return (
    <Container containerProperties={{ style: BlogCreateContainer }}>
      <h2>New Blog</h2>
      <BlogForm postUrl={`${API_ROOT}/blogs`} />
    </Container>
  );
}

export default BlogCreate;
