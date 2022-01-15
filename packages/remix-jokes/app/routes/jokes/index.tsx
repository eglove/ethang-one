import { Joke } from '@prisma/client';
import { useLoaderData } from '@remix-run/react';
import { Link, LoaderFunction } from 'remix';

import { db as database } from '../../utils/db.server';

export const loader: LoaderFunction = async (): Promise<Joke> => {
  const count = await database.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);

  const jokes = await database.joke.findMany({
    skip: randomRowNumber,
    take: 1,
  });

  return jokes[0];
};

export const ErrorBoundary = (): JSX.Element => {
  return <div className="error-container">I did a whoopsies.</div>;
};

const JokesIndex = (): JSX.Element => {
  const data = useLoaderData<Joke>();

  return (
    <div>
      <p>Here&apos;s a random joke:</p>
      <p>{data.content}</p>
      <Link to={data.id}>&ldquo;{data.name}&rdquo; Permalink</Link>
    </div>
  );
};

export default JokesIndex;
