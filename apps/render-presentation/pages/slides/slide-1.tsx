import 'react-vertical-timeline-component/style.min.css';

import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import { Timeline } from '../../components/slides/timeline';

export default function Slide1(): JSX.Element {
  return (
    <PresentationWrapper nextSlide={slideLink(2)} previousSlide="/">
      <Timeline />
    </PresentationWrapper>
  );
}
