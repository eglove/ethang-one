import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { StreamingServerRendering } from '../../components/slides/streaming-server-rendering';

export default function Slide7(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(8)} previousSlide={slideLink(6)}>
      <StreamingServerRendering />
    </PresentationWrapper>
  );
}
