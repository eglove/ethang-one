import { allImages } from '@ethang/local-database';
import { Container, NextImageComponent } from '@ethang/react-components';

export function LoadingImage(): JSX.Element {
  return (
    <Container>
      <NextImageComponent image={allImages.rootImages.loading} />
    </Container>
  );
}
