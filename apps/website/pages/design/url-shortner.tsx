import { allImages } from '@ethang/local-database';
import { Container } from '@ethang/react-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { HeadTag } from '../../components/common/head-tag/head-tag';
import { NextImageContainer } from '../../../../libs/react-components/src/lib/next-image-container/next-image-container';

function UrlShortner(): JSX.Element {
  const createUrlCode = `createUrl({
  apiKey: string;
  originalUrl: URL;
  customAlias?: string;
  userId?: string;
  expireDate?: Date;
}): string`;

  const deleteUrlCode = `deleteUrl({apiKey: string, urlKey: string}): string`;

  const title = 'URL Shortner Design';

  return (
    <Container>
      <HeadTag title={title} />
      <h1>{title}</h1>
      <h2>Requirements</h2>
      <p>
        URLs can take up a lot of space and can easily be mistyped the longer
        they are. A URL shortner provides a short alias URL to redirect to the
        longer one.
      </p>
      <p>
        URL shortening can also track individual links to analyze audience,
        measure ad campaign&apos;s performance, or hide affiliated original
        URLs.
      </p>
      <h3>Functional Requirements</h3>
      <ul>
        <li>
          Given a URL, our service should generate a short and unique alias of
          it. This new URL will be short enough to be easily copied and pasted
          into applications.
        </li>
        <li>
          When users access a short link, our service should redirect them to
          the original link.
        </li>
        <li>
          Users should optionally be able to pick a custom short link for their
          URL.
        </li>
        <li>
          Links will expire after a standard default timespan. Users should be
          able to specify the expiration time.
        </li>
      </ul>
      <h3>Non Functional Requirements</h3>
      <ul>
        <li>
          The system should be highly available. If the service is down, all URL
          redirections will start failing.
        </li>
        <li>
          URL redirection should happen in real-time with minimal latency.
        </li>
        <li>Shortened links should not be guessable.</li>
      </ul>
      <h3>Extended Requirements</h3>
      <ul>
        <li>
          Analytics such as how many times a redirection from the short link
          occurred.
        </li>
        <li>
          Our service should also be accessible through REST APIs by other
          services.
        </li>
      </ul>
      <h3>Capacity</h3>
      <p>
        The system will be read-heavy. There will be more redirection requests
        than new URL shortenings. Let&apos;s assume a 100:1 ratio between read
        and write.
      </p>
      <p>
        It will also have to store every URL shortening and it&apos;s associated
        original URL for a specified amount of time. Let&apos;s say the default
        is 1 year.
      </p>
      <p>
        The most used URLs should be cached in memory to reduce bandwidth at the
        cost of memory.
      </p>
      <h2>System APIs</h2>
      <SyntaxHighlighter language="typescript">
        {createUrlCode}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="typescript">
        {deleteUrlCode}
      </SyntaxHighlighter>
      <p>
        API Keys should be limited to a certain number of URL creations and
        redirections per time period to prevent abuse.
      </p>
      <h2>Database Design</h2>
      <p>
        Each record stored will be very small and contain at most one
        relationship to an optional user.
      </p>
      <NextImageContainer image={allImages.diagramImages.shortenedUrl} />
      <p>
        Because there are no complex relationships and one table will be doing
        most of the work, a NoSQL DB such as DynamoDB is likely the best option.
      </p>
      <h2>System Design and Algorithm</h2>
      <p>
        The main issue here is generating a unique key for every shortened URL.
        example.com/&lt;uniqueKeyHere&gt;
      </p>
      <h3>Encoding actual URL</h3>
      <p>
        It&apos;s probably best to stick to only base62 characters ([A-Za-z0-9])
        and avoid allowing special characters. By using 8 letter keys this gives
        us 62^8 (
        {new Intl.NumberFormat('en-US', { notation: 'compact' }).format(
          62 ** 8
        )}
        ) possible strings.
      </p>
      <p>We still need to make sure no duplicate URLs can exist.</p>
      <h3>Generating Keys Offline</h3>
      <p>
        It may be beneficial to use a separate Key Generation Service (KGS) that
        can generate keys ahead of time. It would then store unused keys in one
        table, and used keys in another. This reduces the need for this service
        to generate keys, and eliminates the need to check if a key already
        exists. The URL shortner would simply pick key from the KGS and mark it
        as used.
      </p>
      <NextImageContainer image={allImages.diagramImages.keyGenerationService} />
      <p>
        If users specify custom keys for their URL they can be stored in used
        keys with a maximum length of 16 characters.
      </p>
      <h2>Partitioning and Replication</h2>
      <p>
        <strong>Ranged Based Partitioning:</strong> For more efficient storage
        and read access, URLs can be stored based on the key&apos;s first
        letter.
      </p>
      <p>
        <strong>Hash Based Partitioning:</strong> We can also take a hash of the
        key and develop a hashing function such that it will randomly distribute
        URLs evenly to different partitions and map each key to a corresponding
        partition such as with a number between 1 and 256.
      </p>
      <h2>Caching</h2>
      <p>
        URL&apos;s that are most commonly used such as the top 20% can be cached
        in memory with a solution like Redis or Memcached. The top 20% most used
        URLs can be dynamically recalculated after URLs are accessed from the
        database.
      </p>
      <h2>Load Balancing</h2>
      <p>Load balancers can be placed in three places in this system:</p>
      <ul>
        <li>Between clients and application servers.</li>
        <li>Between application servers and database servers.</li>
        <li>Between application servers and cache servers.</li>
      </ul>
      <h2>Purging and DB Cleanup</h2>
      <p>A few things can be done to cleanup unused links from the database.</p>
      <ul>
        <li>
          When a user tries to access an expired link, delete the link and
          return an error to the user.
        </li>
        <li>
          A separate cleanup service can periodically delete expired links from
          both storage and cache. This service should run only when user traffic
          is low.
        </li>
        <li>The default expiration for links is 1 year.</li>
        <li>
          After removing an expired link, the key can be put back in the unused
          keys table in the key table.
        </li>
        <li>
          Optionally, links can be removed if they have not been used in a
          specified amount of time. (Such as the default expiration of 1 year.)
        </li>
      </ul>
      <NextImageContainer image={allImages.diagramImages.shortenedUrlSystem} />
      <h2>Telemetry</h2>
      <p>
        Possible analytics worth tracking: country of visitor, data and time of
        access, web page that referred the click, browser or platform from where
        URL was accessed.
      </p>
      <p>
        These analytics likely need a separate table and possibly a queueing
        system in case URLs get surges in traffic.
      </p>
      <h2>Security</h2>
      <p>
        Can users create private URLs or set permissions for who can access a
        URL? Permission level can be stored with URLs (public/private). And a
        separate table can be used to specify which specific users have access
        to any given private URL.
      </p>
    </Container>
  );
}

export default UrlShortner;
