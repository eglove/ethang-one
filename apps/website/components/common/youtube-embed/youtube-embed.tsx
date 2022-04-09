import styles from './youtube-embed.module.css';

interface YouTubeEmbedProperties {
  id: string;
  title: string;
}

export function YouTubeEmbed({
  id,
  title,
}: YouTubeEmbedProperties): JSX.Element {
  // Sandbox should be boolean, typescript wants it to be string
  const sandboxValue = true;

  return (
    <>
      <br />
      <div className={styles.YtContainer}>
        <iframe
          allowFullScreen
          sandbox={String(sandboxValue)}
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </>
  );
}
