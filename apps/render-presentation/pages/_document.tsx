import { Head, Html, Main, NextScript } from 'next/document';

function Document(): JSX.Element {
  return (
    <Html lang="en-US" style={{ backgroundColor: 'hsl(215deg 68% 27%)' }}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
