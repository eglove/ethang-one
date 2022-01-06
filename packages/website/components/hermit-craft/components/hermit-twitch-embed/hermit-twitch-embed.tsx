import ReactPlayer from 'react-player';

import {useHermitStateContext} from '../../context/hermit-context';
import {HermitStreamLink} from '../hermit-stream-link/hermit-stream-link';

export const HermitTwitchEmbed = (): JSX.Element => {
  const hermitState = useHermitStateContext();
  const {availableStreams, currentlyWatching} = hermitState;

  if (availableStreams) {
    let username: string;
    for (const availableStream of availableStreams) {
      if (availableStream.id === currentlyWatching) {
        username = availableStream.user_name;
      }
    }

    if (typeof username === 'string') {
      const currentlyWatchingData = availableStreams.find(stream => {
        return stream.id === currentlyWatching;
      });

      return (
        <>
          {currentlyWatchingData && (<HermitStreamLink hermitStream={currentlyWatchingData}/>)}
          <ReactPlayer playing width="100%" url={`https://twitch.tv/${username}`}/>
        </>
      );
    }
  }

  return <p>Stream not available.</p>;
};
