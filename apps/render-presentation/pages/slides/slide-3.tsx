import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { ServerSideRendering } from '../../components/slides/server-side-rendering';

export default function Slide3(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(4)} previousSlide={slideLink(2)}>
      <ServerSideRendering />
    </PresentationWrapper>
  );
}
