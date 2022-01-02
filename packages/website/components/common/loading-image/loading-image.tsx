import Image from 'next/image';

import loadingImage from '../../../public/images/loading.svg';

export const LoadingImage = (): JSX.Element => (
  <div style={{display: 'grid', placeItems: 'center'}}>
    <Image src={loadingImage} alt="Loading..."/>
  </div>
);
