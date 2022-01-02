import {useQuery} from '@apollo/client';
import {randomizedArray} from '@ethang-one/util-typescript';
import Image from 'next/image';

import {Query} from '../../graphql/types';
import {Container} from '../common/container/container';
import {HeadTag} from '../common/head-tag/head-tag';
import {LinkComponent} from '../common/link-component/link-component';
import styles from './home.module.css';
import {homeQuery} from './home-gql';

export const HomeLayout = (): JSX.Element => {
  const {data} = useQuery<Query>(homeQuery, {
    fetchPolicy: 'cache-and-network',
    variables: {
      where: {
        isOnHomepage: {
          equals: true,
        },
      },
    },
  });

  return (
    <Container>
      <HeadTag title="Home"/>
      <div className={styles.HomeText}>
        <h1>I&apos;m Ethan Glover</h1>
        <h2>I&apos;m a developer.</h2>
        <h3>What kind of developer?</h3>
        <p>I&apos;ve worked with these technologies.</p>
        <p>
          <LinkComponent content="Learn more about me here." href="/about-me"/>
        </p>
        <div className={styles.Logos}>
          {data?.technologyLogos
            && randomizedArray(data.technologyLogos.length).map(logoIndex => {
              const {logo} = data.technologyLogos[logoIndex];

              return (
                <div
                  key={logo.id}
                  style={{
                    backgroundColor: 'rgba(255,255,255, 0.1)',
                    padding: 'var(--small-space)',
                  }}
                >
                  <Image
                    src={logo.url}
                    alt={logo.altText}
                    width={100}
                    height={100}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </Container>
  );
};
