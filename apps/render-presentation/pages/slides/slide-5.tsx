import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { IncrementalStaticRegeneration } from '../../components/slides/incremental-static-regeneration';

export default function Slide5(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(6)} previousSlide={slideLink(4)}>
      <IncrementalStaticRegeneration />
    </PresentationWrapper>
  );
}
