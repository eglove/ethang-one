import { Link, LinksFunction, MetaFunction } from 'remix';

import stylesUrl from '../styles/index.css';

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: 'stylesheet' }];
};

export const meta: MetaFunction = () => {
  return {
    description: 'Remix jokes app. Learn Remix and laugh at the same time!',
    title: "Remix: So great, it's funny!",
  };
};

const Index = (): JSX.Element => {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Index;
