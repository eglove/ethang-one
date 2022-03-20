import { shuffleArray } from '@ethang/util-typescript';
import Image from 'next/image';

import { TechnologyLogo } from '../../graphql/types';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { LinkComponent } from '../common/link-component/link-component';
import styles from './home.module.css';

interface HomeLayoutProperties {
  technologyLogos: TechnologyLogo[];
}

export function HomeLayout({
  technologyLogos,
}: HomeLayoutProperties): JSX.Element | undefined {
  const indexArray = shuffleArray(
    Array.from({ length: technologyLogos.length })
      .fill(null)
      .map((_, index) => {
        return index;
      })
  );

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
          {indexArray.map((index: number) => {
            const logo = technologyLogos[index];

            return (
              <div key={logo.id} className={styles.LogoContainer}>
                <Image
                  src={logo.image.image.downloadUrl}
                  alt={logo.image.altText}
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
}
