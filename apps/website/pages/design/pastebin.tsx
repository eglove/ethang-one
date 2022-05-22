import { allImages } from '@ethang/local-database';
import { LinkComponent } from '@ethang/react-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Container } from '../../components/common/container/container';
import { HeadTag } from '../../components/common/head-tag/head-tag';
import { ImageContainer } from '../../components/common/image-container/image-container';

function Pastebin(): JSX.Element {
  const addPaste = `addPaste({
  apiKey: string,
  pasteData: string,
  customUrl?: URL,
  username?: string,
  pasteName?: string,
  expireDate?: Date
}): URL`;

  const getPaste = `getPaste({apiKey: string, pasteKey: string}): string`;

  const deletePaste = `deletePaste({apiKey: string, pasteKey: string}): string`;

  const title = 'Designing Pastebin';

  return (
    <Container>
      <HeadTag title={title} />
      <h1>{title}</h1>
      <p>
        Pastebin allows users to store plain text or images and generate unique
        URLs to access the uploaded data. Such services allow information to be
        shared quickly, as you only have to give a URL to others for them to see
        it.
      </p>
      <h2>Requirements</h2>
      <p>
        <strong>Functional Requirements</strong>
      </p>
      <ul>
        <li>
          Users should be able to upload or paste their data and get a unique
          URL to access it.
        </li>
        <li>Users will only be able to upload text.</li>
        <li>
          Data and links will expire after a specific timespan automatically;
          users should also be able to specify expiration time.
        </li>
        <li>
          Users should optionally be able to pick a custom alias for their
          paste.
        </li>
      </ul>
      <p>
        <strong>Non-Functional Requirements</strong>
      </p>
      <ul>
        <li>
          The system should be highly reliable, and data uploaded should not be
          lost.
        </li>
        <li>
          The system should be highly available. If the service is down, users
          will not be able to access their pastes.
        </li>
        <li>
          Users should be able to access their pastes in real-time with minimum
          latency.
        </li>
        <li>Paste links should not be guessable.</li>
      </ul>
      <p>
        <strong>Extended Requirements</strong>
      </p>
      <ul>
        <li>Analytics such as how many times a paste was accessed.</li>
        <li>
          Service should be accessible through REST APIs by other services.
        </li>
      </ul>
      <h2>Design Considerations</h2>
      <p>
        Pastebin shares a lot of requirements with{' '}
        <LinkComponent linkProperties={{ href: '/design/url-shortner' }}>
          URL Shortening Service
        </LinkComponent>
        .
      </p>
      <p>
        To prevent abuse of the service, pastes shoulbe be limited to 10MB in
        size.
      </p>
      <p>Limits should be imposed on the length of custom URLs.</p>
      <h2>Capacity Estimation and Constraints</h2>
      <p>
        The service will be read heavy and there will likely be around a 5 to
        one ratio between read and write.
      </p>
      <h2>System APIs</h2>
      <SyntaxHighlighter language="typescript">{addPaste}</SyntaxHighlighter>
      <SyntaxHighlighter language="typescript">{getPaste}</SyntaxHighlighter>
      <SyntaxHighlighter language="typescript">{deletePaste}</SyntaxHighlighter>
      <h2>Database Design</h2>
      <p>
        The system is read heavy and has no complex relationships. Pastes
        optionally have a relationship to a user. Content will be stored as a
        separate object from the database.
      </p>
      <ImageContainer image={allImages.diagramImages.pastebinTable} />
      <h2>High Level Design</h2>
      <p>
        This service will need an application layer to server read adn write
        requests. It will talk to the storage later to store adn retrieve data.
        The storage layer can be segregated with one database storing metadata
        related to each paste and its user, while the other can store the paste
        contents with object storage like Amazon S3.
      </p>
      <ImageContainer image={allImages.diagramImages.pastebinHighLevel} />
      <h2>Component Design</h2>
      <p>
        <strong>Application Layer:</strong> We can use the same Key Generation
        Service mentioned in{' '}
        <LinkComponent linkProperties={{ href: '/design/url-shortner' }}>
          URL Shortner
        </LinkComponent>{' '}
        to generate unique keys for the Pastebin URLs ahead of time in an
        efficient manner.
      </p>
      <p>
        <strong>Datastore Layer</strong>:
        <ul>
          <li>Metadata Database: Relational or Key-Value database.</li>
          <li>
            Object storage: Contents of pastes can be stored in something like
            Amazon S3.
          </li>
        </ul>
      </p>
      <h2>Reusing Design from URL Shortner</h2>
      <p>
        Many other design implementations can be reused from the previously
        mentioned URL shortner. Such as DB Cleanup (expired pastes), data
        partitioning, cache, load balancers, security and permissions.
      </p>
      <ImageContainer image={allImages.diagramImages.pastebinLayerDesign} />
    </Container>
  );
}

export default Pastebin;
