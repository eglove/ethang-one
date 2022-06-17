import {
  PresentationWrapper,
  slideLink,
} from '../components/presentation-wrapper';

export function Index(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(1)}>
      <>
        <h1>Render Patterns</h1>
        <div
          style={{
            display: 'grid',
            fontSize: '2rem',
            gap: '1rem',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <div>Client-Side Rendering</div>
          <div>Server-Side Rendering</div>
          <div>Static Rendering</div>
          <div>Incremental Static Regeneration</div>
          <div>Progressive Hydration</div>
          <div>Streaming Server Rendering</div>
          <div>Server Components</div>
          <div>Nested Routes</div>
          <div>Resumability</div>
        </div>
      </>
    </PresentationWrapper>
  );
}

export default Index;
