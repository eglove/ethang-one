import Image from 'next/image';

import loadingImage from '../../../public/images/loading.svg';
import { Container } from '../container/container';

export function LoadingImage(): JSX.Element {
  return (
    <Container>
      <Image alt="Loading..." src={loadingImage as string} />
    </Container>
  );
}
