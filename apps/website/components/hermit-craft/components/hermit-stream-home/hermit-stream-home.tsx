import { useEffect, useMemo } from 'react';

import { Container } from '../../../common/container/container';
import { HermitStream } from '../../api/hermit-stream';
import { useGetHermitStreams } from '../../api/use-get-hermit-streams';
import {
  useHermitDispatchContext,
  useHermitStateContext,
} from '../../context/hermit-context';
import { HermitActionEnum } from '../../context/hermit-reducer';
import { HermitTwitchEmbed } from '../hermit-twitch-embed/hermit-twitch-embed';
import { HermitsCurrentlyStreaming } from '../hermits-currently-streaming/hermits-currently-streaming';

export function HermitStreamHome(): JSX.Element {
  const { availableStreams } = useHermitStateContext();
  const hermitDispatch = useHermitDispatchContext();
  const hermitStream = useMemo(() => {
    return new HermitStream();
  }, []);

  useGetHermitStreams(hermitStream);

  useEffect(() => {
    const getStreams = async (): Promise<void> => {
      await hermitStream.getHermitStreams();

      hermitDispatch({
        payload: hermitStream.availableStreams,
        type: HermitActionEnum.visitHermitHome,
      });
    };

    getStreams().catch((error: Error) => {
      console.error(error);
    });
  }, [hermitDispatch, hermitStream]);

  if (availableStreams && availableStreams.length > 0) {
    return (
      <Container>
        <div>
          <HermitTwitchEmbed />
          <HermitsCurrentlyStreaming />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <p>No streams available.</p>
    </Container>
  );
}
