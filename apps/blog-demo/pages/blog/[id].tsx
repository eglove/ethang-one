import { Button, Container } from '@ethang/react-components';
import { swrFetcher } from '@ethang/util-typescript';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { RailsBlog } from '../../components/blogs/blogs-layout';
import {
  CommentForm,
  RailsComment,
} from '../../components/comments/comment-form';
import { API_ROOT } from '../_app';

export function BlogPage(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;

  const { data: blog } = useSWR<RailsBlog>(
    `${API_ROOT}/blogs/${String(id)}`,
    swrFetcher
  );

  const { data: comments } = useSWR<RailsComment[]>(
    `${API_ROOT}/blogs/${String(id)}/comments`,
    swrFetcher
  );

  const handleDelete = async (): Promise<void> => {
    await fetch(`${API_ROOT}/blogs/${blog.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });

    await router.push('/');
  };

  if (typeof blog === 'undefined') {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      <div>
        <Button
          size="small"
          text="Edit"
          buttonProperties={{
            async onClick(): Promise<void> {
              await router.push(`/blog/edit/${blog.id}`);
            },
          }}
        />
        <Button
          buttonProperties={{ onClick: handleDelete }}
          size="small"
          text="Delete"
        />
      </div>
      <CommentForm
        blogId={blog.id}
        postUrl={`${API_ROOT}/blogs/${blog.id}/comments`}
      />
      <div>
        {comments?.map(comment => {
          return (
            <div key={comment.id}>
              <strong>{comment.commenter}:</strong> {comment.body}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default BlogPage;
