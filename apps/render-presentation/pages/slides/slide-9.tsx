import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { Resumability } from '../../components/slides/resumability';

export default function Slide9(): JSX.Element {
  return (
    <PresentationWrapper previousSlide={slideLink(8)}>
      <Resumability />
    </PresentationWrapper>
  );
}
