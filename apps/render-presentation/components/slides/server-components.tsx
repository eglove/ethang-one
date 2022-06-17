export function ServerComponents(): JSX.Element {
  return (
    <>
      <h1>Server Components</h1>
      <ul>
        <li>React and Next have been working on Server Components</li>
        <li>
          Individual components to be rendered to HTML on the server with zero
          client-side JavaScript needed.
        </li>
        <li>
          This is still an alpha feature in Next and considered testing for
          React 18.
        </li>
      </ul>
      <h1>Nested Routes</h1>
      <ul>
        <li>
          In a pivot away from Server Components, Remix introduced the idea of
          nested routing.
        </li>
        <li>
          Instead of individual components loading data, all requests are loaded
          in parallel on the server and sent to the client statically.
        </li>
        <li>Faster load times, it can also mean slower TTFB.</li>
        <li>
          Next 13 will also be releasing with nested routes and more support for
          streaming.
        </li>
      </ul>
    </>
  );
}
