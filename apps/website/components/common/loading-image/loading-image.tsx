import Image from 'next/image';

import loadingImage from '../../../public/images/loading.svg';
import { Container } from '../container/container';

export const LoadingImage = (): JSX.Element => {
  return (
    <Container>
      <Image src={loadingImage as string} alt="Loading..." />
    </Container>
  );
};
