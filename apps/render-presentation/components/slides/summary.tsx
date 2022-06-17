import styles from '../../styles/render-presentation.module.css';

export function Summary(): JSX.Element {
  return (
    <>
      <h1>Summary</h1>
      <div className={styles.SummaryGrid}>
        {/* Names */}
        <div />
        <div>Classic SSR</div>
        <div>Resumability</div>
        <div>SSR w/ Hydration</div>
        <div>Streaming</div>
        <div>Progressive Hydration</div>
        <div>Static Generation</div>
        <div>Incremental Static Regeneration</div>
        <div>CSR</div>
        {/* HTML Generated On */}
        <div>HTML Generated On</div>
        <div>Server</div>
        <div>Server</div>
        <div>Server</div>
        <div>Server</div>
        <div>Server</div>
        <div>Build Server</div>
        <div>Build Server</div>
        <div>Client</div>
        {/* JavaScript for Hydration */}
        <div>JavaScript for Hydration</div>
        <div>No Hydration</div>
        <div>No Hydration</div>
        <div>All Components</div>
        <div>JS Streamed with HTML</div>
        <div>JS Loaded Progressively</div>
        <div>Minimal JS</div>
        <div>Minimal JS</div>
        <div>No Hydration</div>
        {/* SPA Behavior */}
        <div>SPA Behavior</div>
        <div>Not Possible</div>
        <div>Full</div>
        <div>Limited</div>
        <div>Limited</div>
        <div>Limited</div>
        <div>Not Possible</div>
        <div>Not Possible</div>
        <div>Full</div>
        {/* Crawler Readability */}
        <div>Crawler Readability</div>
        <div>Full</div>
        <div>Full</div>
        <div>Full</div>
        <div>Full</div>
        <div>Full</div>
        <div>Full</div>
        <div>Full</div>
        <div>Limited</div>
        {/* TTFB */}
        <div>TTFB</div>
        <div>Slow</div>
        <div>Fast</div>
        <div>Slow</div>
        <div>Fast and Consistent</div>
        <div>Slow</div>
        <div>Fast</div>
        <div>Fast</div>
        <div>Fast</div>
        {/* Implemented Using */}
        <div>Implemented Using</div>
        <div>PHP, Ruby</div>
        <div>QwikJS</div>
        <div>React, NextJS</div>
        <div>React, (Future Next)</div>
        <div>React</div>
        <div>NextJS</div>
        <div>NextJS</div>
        <div>React, Angular, Vue</div>
        {/* Suitable For */}
        <div>Suitable For</div>
        <div>Static Content</div>
        <div>Highly Interactive</div>
        <div>Mostly Static</div>
        <div>Mostly Static</div>
        <div>Interactive Pages</div>
        <div>Static Content</div>
        <div>Static Content (changes often)</div>
        <div>Highly Interactive</div>
      </div>
    </>
  );
}
