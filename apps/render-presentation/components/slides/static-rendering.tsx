export function StaticRendering(): JSX.Element {
  return (
    <>
      <h1>Static Rendering</h1>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        controls
        height={400}
        src="https://res.cloudinary.com/ddxwdqwkr/video/upload/v1617496085/patterns.dev/static-generation-2.mov"
        width={800}
      />
      <ul>
        <li>
          The process of pulling data and rendering HTML at build time to static
          files. The server only has to deliver plain HTML.
        </li>
        <li>Faster TTFB than SSR.</li>
        <li>
          Great for pages with static content that don&apos;t get changed often.
          (Sales pages, About Us, Contact Us, etc.)
        </li>
      </ul>
    </>
  );
}
