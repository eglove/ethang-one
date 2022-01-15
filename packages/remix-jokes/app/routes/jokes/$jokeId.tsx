/* eslint-disable unicorn/filename-case */

import { Joke } from '@prisma/client';
import { useLoaderData } from '@remix-run/react';
import {
  ActionFunction,
  Link,
  LoaderFunction,
  MetaFunction,
  redirect,
  useCatch,
  useParams,
} from 'remix';

import { db as database } from '../../utils/db.server';
import { getUserId, requireUserId } from '../../utils/session.server';

type LoaderReturn = {
  isOwner: boolean;
  joke: Pick<Joke, 'content' | 'jokesterId' | 'name'>;
};

export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderReturn | undefined;
}) => {
  if (typeof data === 'undefined') {
    return {
      description: 'No joke found',
      title: 'No joke',
    };
  }

  return {
    description: `Enjoy the "${data.joke.name}" joke and much more`,
    title: `"${data.joke.name}" joke`,
  };
};

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderReturn> => {
  const userId = await getUserId(request);
  const joke = await database.joke.findUnique({
    select: {
      content: true,
      jokesterId: true,
      name: true,
    },
    where: {
      id: params.jokeId!,
    },
  });

  if (joke === null) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('What a joke! Not found.', {
      status: 404,
    });
  }

  return {
    isOwner: userId === joke.jokesterId,
    joke,
  };
};

export const CatchBoundary = (): JSX.Element => {
  const caught = useCatch();
  const parameters = useParams();
  switch (caught.status) {
    case 404: {
      return (
        <div className="error-container">
          Huh? What the heck is {parameters.jokeId}?
        </div>
      );
    }

    case 401: {
      return (
        <div className="error-container">
          Sorry, but {parameters.jokeId} is not your joke.
        </div>
      );
    }

    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
};

export const ErrorBoundary = (): JSX.Element => {
  const { jokeId } = useParams();
  return (
    <div className="error-container">{`There was an error loading joke by the id ${
      jokeId ?? 'unknown'
    }. Sorry.`}</div>
  );
};

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  if (form.get('_method') === 'delete') {
    const userId = await requireUserId(request);
    const joke = await database.joke.findUnique({
      where: { id: params.jokeId },
    });
    if (!joke) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Response("Can't delete what does not exist", { status: 404 });
    }

    if (joke.jokesterId !== userId) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Response("Pssh, nice try. That's not your joke", {
        status: 401,
      });
    }

    await database.joke.delete({ where: { id: params.jokeId } });
    return redirect('/jokes');
  }
};

const JokeId = (): JSX.Element => {
  const data = useLoaderData<LoaderReturn>();

  return (
    <div>
      <p>Here&apos;s your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to=".">{data.joke.name} Permalink</Link>
      {data.isOwner ? (
        <form method="post">
          <input type="hidden" name="_method" value="delete" />
          <button type="submit" className="button">
            Delete
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default JokeId;
