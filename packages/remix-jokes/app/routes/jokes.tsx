import { Joke } from '@prisma/client';
import { useLoaderData } from '@remix-run/react';
import { Link, LinksFunction, LoaderFunction, Outlet } from 'remix';

import stylesUrl from '../styles/jokes.css';
import { db as database } from '../utils/db.server';

export const links: LinksFunction = () => {
  return [
    {
      href: stylesUrl,
      rel: 'stylesheet',
    },
  ];
};

export const loader: LoaderFunction = async (): Promise<
  Array<Pick<Joke, 'id' | 'name'>>
> => {
  return database.joke.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
    },
    take: 5,
  });
};

const Jokes = (): JSX.Element => {
  const data = useLoaderData<Array<Pick<Joke, 'id' | 'name'>>>();

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
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {data.map(joke => {
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
