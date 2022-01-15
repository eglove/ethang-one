/* eslint-disable unicorn/filename-case */

import { Joke } from '@prisma/client';
import { useLoaderData } from '@remix-run/react';
import { LoaderFunction } from 'remix';

import { db as database } from '../../utils/db.server';

export const loader: LoaderFunction = async ({
  params,
}): Promise<Pick<Joke, 'content'>> => {
  const joke = await database.joke.findUnique({
    select: {
      content: true,
    },
    where: {
      id: params.jokeId!,
    },
  });

  if (joke === null) {
    throw new Error('Joke not found.');
  }

  return joke;
};

const JokeId = (): JSX.Element => {
  const data = useLoaderData<Pick<Joke, 'content'>>();

  return (
    <div>
      <p>Here&apos;s your hilarious joke:</p>
      <p>{data.content}</p>
    </div>
  );
};

export default JokeId;
