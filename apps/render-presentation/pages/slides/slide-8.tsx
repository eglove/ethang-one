import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { BlazorServer } from '../../components/slides/blazor-server';

export default function Slide8(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(9)} previousSlide={slideLink(7)}>
      <BlazorServer />
    </PresentationWrapper>
  );
}
