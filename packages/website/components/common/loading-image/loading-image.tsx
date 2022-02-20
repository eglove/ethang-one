import Image from 'next/image';

import loadingImage from '../../../public/images/loading.svg';

export const LoadingImage = (): JSX.Element => {
  return (
    <div style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
      <Image src={loadingImage} alt="Loading..." />
    </div>
  );
};
