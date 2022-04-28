import { NextLink } from '@ethang/react-components';
import { shuffleArray } from '@ethang/util-typescript';

import { technologyImages } from '../../../../libs/local-database/src/lib/data/images/technology-images';
import { Image as ImageModel } from '../../../../libs/local-database/src/lib/models/image';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { ImageComponent } from '../common/image-component/image-component';
import styles from './home.module.css';

export function HomeLayout(): JSX.Element | undefined {
  const techImages = shuffleArray(Object.keys(technologyImages));

  return (
    <Container>
      <HeadTag title="Home" />
      <div className={styles.HomeText}>
        <h1>I&apos;m Ethan Glover</h1>
        <h2>I&apos;m a developer.</h2>
        <h3>What kind of developer?</h3>
        <p>I&apos;ve worked with these technologies.</p>
        <p>
          <NextLink linkProperties={{ href: '/about-me' }}>
            Learn more about me here.
          </NextLink>
        </p>
        <div className={styles.Logos}>
          {techImages.map(imageKey => {
            const logo = technologyImages[imageKey] as ImageModel;

            return (
              <div className={styles.LogoContainer} key={logo.url}>
                <ImageComponent
                  image={logo}
                  imageProperties={{ height: 100, width: 100 }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
