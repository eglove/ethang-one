import { renderToString } from 'react-dom/server';
import type { EntryContext } from 'remix';
import { RemixServer } from 'remix';

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
): Response => {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
};

export default handleRequest;
