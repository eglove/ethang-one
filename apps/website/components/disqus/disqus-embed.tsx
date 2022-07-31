import { DiscussionEmbed } from 'disqus-react';
import { useEffect } from 'react';

import { BASE_URL } from '../../util/constants';

type DisqusEmbedProperties = {
  id: string;
  title: string;
  url: string;
};

export function DisqusEmbed({
  id,
  title,
  url,
}: DisqusEmbedProperties): JSX.Element {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const disqusRecommendations = document.querySelector(
        '#disqus_recommendations'
      );
      disqusRecommendations?.remove();
    }
  }, []);

  return (
    <DiscussionEmbed
      shortname="ethang"
      config={{
        identifier: id,
        language: 'en-US',
        title,
        url: `${BASE_URL}${url}`,
      }}
    />
  );
}
