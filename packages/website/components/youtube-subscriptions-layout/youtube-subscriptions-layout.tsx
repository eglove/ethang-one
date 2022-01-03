import {xmlToJson} from '@ethang-one/util-typescript';
import {useEffect} from 'react';

import {Container} from '../common/container/container';

export const YoutubeSubscriptionsLayout = (): JSX.Element => {
  useEffect(() => {
    const getRssData = async (): Promise<void> => {
      const response = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UCepq9z9ovYGxhNrvf6VMSjg');
      const data = await response.text();
      console.log(xmlToJson(data));
    };

    getRssData().catch((error: Error) => {
      console.error(error);
    });
  }, []);

  return <Container><p>hi</p></Container>;
};
