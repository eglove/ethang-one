import { allImages } from '@ethang/local-database';
import { NextImageContainer } from '@ethang/react-components';
import { randomBetween } from '@ethang/util-typescript';
import { useEffect, useState } from 'react';

export function Slide5RandomLoad({
  content,
}: {
  content: string;
}): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, randomBetween(3000, 10_000));

    return () => {
      setIsLoading(true);
    };
  }, []);

  if (isLoading) {
    return <NextImageContainer image={allImages.rootImages.loading} />;
  }

  return <div>{content}</div>;
}
