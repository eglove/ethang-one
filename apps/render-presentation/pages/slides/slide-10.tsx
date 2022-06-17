import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { Resumability } from '../../components/slides/resumability';

export default function Slide10(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(11)} previousSlide={slideLink(9)}>
      <Resumability />
    </PresentationWrapper>
  );
}
