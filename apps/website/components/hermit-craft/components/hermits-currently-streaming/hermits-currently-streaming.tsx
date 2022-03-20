import { useEffect, useState } from 'react';

import { useHermitStateContext } from '../../context/hermit-context';
import { DataEntity } from '../../types/hermit-craft-types';
import { HermitStreamLink } from '../hermit-stream-link/hermit-stream-link';

export function HermitsCurrentlyStreaming(): JSX.Element {
  const { notCurrentlyWatching } = useHermitStateContext();
  const [otherHermits, setOtherHermits] = useState<DataEntity[]>();

  useEffect(() => {
    setOtherHermits(notCurrentlyWatching);
  }, [notCurrentlyWatching]);

  return (
    <div>
      {otherHermits?.map(hermitStreaming => {
        if (typeof hermitStreaming !== 'undefined') {
          return (
            <div key={hermitStreaming.id}>
              <HermitStreamLink hermitStream={hermitStreaming} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
