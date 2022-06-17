import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { ServerComponents } from '../../components/slides/server-components';

export default function Slide8(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(9)} previousSlide={slideLink(7)}>
      <ServerComponents />
    </PresentationWrapper>
  );
}
