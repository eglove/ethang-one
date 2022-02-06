import { Image as Logo } from '@ethang-one/prisma-connection';
import { shuffleArray } from '@ethang-one/util-typescript';
import Image from 'next/image';

import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { LinkComponent } from '../common/link-component/link-component';
import styles from './home.module.css';

interface HomeLayoutProperties {
  logos: Logo[];
}

export const HomeLayout = ({ logos }: HomeLayoutProperties): JSX.Element => {
  return (
    <Container>
      <HeadTag title="Home" />
      <div className={styles.HomeText as string}>
        <h1>I&apos;m Ethan Glover</h1>
        <h2>I&apos;m a developer.</h2>
        <h3>What kind of developer?</h3>
        <p>I&apos;ve worked with these technologies.</p>
        <p>
          <LinkComponent linkProperties={{ href: '/about-me' }}>
            Learn more about me here.
          </LinkComponent>
        </p>
        <div className={styles.Logos as string}>
          {shuffleArray(logos).map(logo => {
            return (
              <div key={logo.id} className={styles.LogoContainer as string}>
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
