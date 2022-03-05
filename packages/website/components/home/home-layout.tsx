import { shuffleArray } from '@ethang-one/util-typescript';
import Image from 'next/image';

import { technologyLogos } from '../../database/data/images/technology-logos';
import { Image as ImageModel } from '../../database/models/image';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { LinkComponent } from '../common/link-component/link-component';
import styles from './home.module.css';

export const HomeLayout = (): JSX.Element | undefined => {
  const logos = shuffleArray(Object.getOwnPropertyNames(technologyLogos));

  return (
    <Container>
      <HeadTag title="Home" />
      <div className={styles.HomeText}>
        <h1>I&apos;m Ethan Glover</h1>
        <h2>I&apos;m a developer.</h2>
        <h3>What kind of developer?</h3>
        <p>I&apos;ve worked with these technologies.</p>
        <p>
          <LinkComponent linkProperties={{ href: '/about-me' }}>
            Learn more about me here.
          </LinkComponent>
        </p>
        <div className={styles.Logos}>
          {logos.map(logoName => {
            const logo = technologyLogos[logoName] as ImageModel;

            return (
              <div key={logoName} className={styles.LogoContainer}>
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
