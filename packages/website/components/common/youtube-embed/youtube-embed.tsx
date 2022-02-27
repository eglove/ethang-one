import styles from './youtube-embed.module.css';

interface YouTubeEmbedProperties {
  id: string;
  title: string;
}

export const YouTubeEmbed = ({
  id,
  title,
}: YouTubeEmbedProperties): JSX.Element => {
  return (
    <>
      <br />
      <div className={styles.YtContainer as string}>
        <iframe
          allowFullScreen
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </>
  );
};
