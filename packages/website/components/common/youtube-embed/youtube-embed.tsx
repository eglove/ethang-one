import styles from './youtube-embed.module.css';

interface YouTubeEmbedProperties {
  id: string;
  title: string;
}

export const YouTubeEmbed = ({
  id,
  title,
}: YouTubeEmbedProperties): JSX.Element => (
  <>
    <br />
    <div className={styles.YtContainer}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </>
);
