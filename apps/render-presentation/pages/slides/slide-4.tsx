import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { StaticRendering } from '../../components/slides/static-rendering';

export default function Slide4(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(5)} previousSlide={slideLink(3)}>
      <StaticRendering />
    </PresentationWrapper>
  );
}
