export function IncrementalStaticRegeneration(): JSX.Element {
  return (
    <>
      <h1>Incremental Static Generation</h1>
      <ul>
        <li>
          NextJs automatically statically generates all pages that do not
          include client side data fetching.
        </li>
        <li>
          You can also specify a state-while-revalidate time. For example, if
          set to 10 minutes if you visit the same page multiple times within a
          period of 10 minutes, you&apos;ll see a cached version. After that 10
          minutes, the page will be statically built with fresh data.
        </li>
        <li>
          Great for apps with static content that get updated often (Blogs,
          Wikis, Documentation)
        </li>
      </ul>
    </>
  );
}
