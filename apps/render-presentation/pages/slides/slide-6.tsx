import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { ProgressiveHydration } from '../../components/slides/progressive-hydration';

export default function Slide6(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(7)} previousSlide={slideLink(5)}>
      <ProgressiveHydration />
    </PresentationWrapper>
  );
}
