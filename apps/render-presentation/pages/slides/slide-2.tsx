import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { ClientSideRendering } from '../../components/slides/client-side-rendering';

export default function Slide2(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(3)} previousSlide={slideLink(1)}>
      <ClientSideRendering />
    </PresentationWrapper>
  );
}
