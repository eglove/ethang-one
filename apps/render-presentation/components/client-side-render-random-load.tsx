import { allImages } from '@ethang/local-database';
import { NextImageContainer } from '@ethang/react-components';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

export function ClientSideRenderRandomLoad({
  content,
}: {
  content: string;
}): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, faker.datatype.number({ max: 10_000, min: 3000 }));

    return () => {
      setIsLoading(true);
    };
  }, []);

  if (isLoading) {
    return <NextImageContainer image={allImages.rootImages.loading} />;
  }

  return <div>{content}</div>;
}
