import { Link, LinksFunction } from 'remix';

import stylesUrl from '../styles/index.css';

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: 'stylesheet' }];
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
