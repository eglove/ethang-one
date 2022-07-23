import { Suspense } from 'react';

import { PresumeLayout } from '../../components/presume/presume-layout';

function Presume(): JSX.Element {
  return (
    <Suspense>
      <PresumeLayout />
    </Suspense>
  );
}

export default Presume;
