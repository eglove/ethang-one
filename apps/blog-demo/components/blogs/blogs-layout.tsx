import { Button, Container, NextLink } from '@ethang/react-components';
import { swrFetcher } from '@ethang/util-typescript';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { API_ROOT } from '../../pages/_app';

export type RailsBlog = {
  body: string;
  created_at: string;
  id: number;
  title: string;
  updated_at: string;
};

export function BlogsLayout(): JSX.Element {
  const router = useRouter();
  const { data } = useSWR<RailsBlog[]>(`${API_ROOT}/blogs`, swrFetcher);

  if (typeof data === 'undefined') {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container>
      <>
        {data.map(blog => {
          return (
            <div key={blog.id}>
              <NextLink linkProperties={{ href: `/blog/${blog.id}` }}>
                {blog.title}
              </NextLink>
            </div>
          );
        })}
        <br />
        <Button
          size="small"
          text="Create New Blog"
          buttonProperties={{
            async onClick(): Promise<void> {
              await router.push('/blog/create');
            },
          }}
        />
      </>
    </Container>
  );
}
