import styles from './youtube-embed.module.css';

interface YouTubeEmbedProperties {
  id: string;
  title: string;
}

export function YouTubeEmbed({
  id,
  title,
}: YouTubeEmbedProperties): JSX.Element {
  return (
    <>
      <br />
      <div className={styles.YtContainer}>
        <iframe
          allowFullScreen
          sandbox
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </>
  );
}
