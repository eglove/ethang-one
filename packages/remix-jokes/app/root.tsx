import { Links, LinksFunction, LiveReload, Outlet, useCatch } from 'remix';

import globalStylesUrl from './styles/global.css';
import globalLargeStylesUrl from './styles/global-large.css';
import globalMediumStylesUrl from './styles/global-medium.css';

export const links: LinksFunction = () => {
  return [
    {
      href: globalStylesUrl,
      rel: 'stylesheet',
    },
    {
      href: globalMediumStylesUrl,
      media: 'print, (min-width: 640px)',
      rel: 'stylesheet',
    },
    {
      href: globalLargeStylesUrl,
      media: 'screen and (min-width: 1024px)',
      rel: 'stylesheet',
    },
  ];
};

export const CatchBoundary = (): JSX.Element => {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className="error-container">
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </Document>
  );
};

export const ErrorBoundary = ({ error }: { error: Error }): JSX.Element => {
  return (
    <Document>
      <div className="error-container">
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </div>
    </Document>
  );
};

export const Document = ({
  children,
  title = `Remix: So great, it's funny!`,
}: {
  children: JSX.Element;
  title?: string;
}): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
};

const App = (): JSX.Element => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

export default App;
