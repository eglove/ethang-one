import { Joke, User } from '@prisma/client';
import { useLoaderData } from '@remix-run/react';
import { Link, LinksFunction, LoaderFunction, Outlet } from 'remix';

import stylesUrl from '../styles/jokes.css';
import { db as database } from '../utils/db.server';
import { getUser } from '../utils/session.server';

export const links: LinksFunction = () => {
  return [
    {
      href: stylesUrl,
      rel: 'stylesheet',
    },
  ];
};

export const loader: LoaderFunction = async ({
  request,
}): Promise<{
  jokes: Array<Pick<Joke, 'id' | 'name'>>;
  user: User | undefined;
}> => {
  const jokes = await database.joke.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
    },
    take: 5,
  });
  const user = await getUser(request);

  return {
    jokes,
    user,
  };
};

const Jokes = (): JSX.Element => {
  const data = useLoaderData<{
    jokes: Array<Pick<Joke, 'id' | 'name'>>;
    user: User | undefined;
  }>();

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
          {typeof data.user === 'undefined' ? (
            <Link to="/login">Login</Link>
          ) : (
            <div className="user-info">
              <span>{`Hi ${data.user.username}`}</span>
              <form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </form>
            </div>
          )}
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {data.jokes.map(joke => {
                return (
                  <li key={joke.id}>
                    <Link to={joke.id}>{joke.name}</Link>
                  </li>
                );
              })}
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jokes;
