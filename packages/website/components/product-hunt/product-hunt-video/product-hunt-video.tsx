import {YouTubeEmbed} from '../../common/youtube-embed/youtube-embed';

interface ProductHuntVideoProperties {
  videoTitle: string;
  videoUrl: string;
}

export const ProductHuntVideo = ({videoTitle, videoUrl}: ProductHuntVideoProperties): JSX.Element => {
  return <YouTubeEmbed id={videoTitle} title={videoUrl}/>;
};
