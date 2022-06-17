import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { ServerComponents } from '../../components/slides/server-components';

export default function Slide9(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(10)} previousSlide={slideLink(8)}>
      <ServerComponents />
    </PresentationWrapper>
  );
}
