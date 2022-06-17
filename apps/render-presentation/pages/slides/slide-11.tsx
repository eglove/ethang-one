import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { Summary } from '../../components/slides/summary';

export default function Slide11(): JSX.Element {
  return (
    <PresentationWrapper previousSlide={slideLink(10)}>
      <Summary />
    </PresentationWrapper>
  );
}
