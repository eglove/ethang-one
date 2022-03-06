import { animationInterval } from '@ethang/util-typescript';
import { useEffect } from 'react';

import { useHermitDispatchContext } from '../context/hermit-context';
import { HermitActionEnum } from '../context/hermit-reducer';
import { HermitStream } from './hermit-stream';

const NEW_HERMIT_INTERVAL = 60_000;

export const useGetHermitStreams = (hermitStream: HermitStream): void => {
  const hermitDispatch = useHermitDispatchContext();

  useEffect(() => {
    console.info('Looking for more hermits...');
    const controller = new AbortController();
    animationInterval(NEW_HERMIT_INTERVAL, controller.signal, () => {
      getStreams().catch((error: Error) => {
        console.error(error);
      });
    });

    const getStreams = async (): Promise<void> => {
      await hermitStream.getHermitStreams();

      hermitDispatch({
        payload: hermitStream.availableStreams,
        type: HermitActionEnum.availableStreams,
      });
    };

    return (): void => {
      controller.abort();
    };
  }, [hermitDispatch, hermitStream]);
};
