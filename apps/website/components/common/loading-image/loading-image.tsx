import { allImages } from '@ethang/local-database';

import { Container } from '../container/container';
import { ImageComponent } from '../image-component/image-component';

export function LoadingImage(): JSX.Element {
  return (
    <Container>
      <ImageComponent image={allImages.rootImages.loading} />
    </Container>
  );
}
