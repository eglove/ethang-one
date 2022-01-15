import { LiveReload } from 'remix';

const App = (): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it&apos;s funny!</title>
      </head>
      <body>
        Hello world
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
};

export default App;
