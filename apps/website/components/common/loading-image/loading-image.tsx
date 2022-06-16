import { allImages } from '@ethang/local-database';
import { Container } from '@ethang/react-components';

import { NextImageComponent } from '../../../../../libs/react-components/src/lib/next-image-component/next-image-component';

export function LoadingImage(): JSX.Element {
  return (
    <Container>
      <NextImageComponent image={allImages.rootImages.loading} />
    </Container>
  );
}
