import { useQuery } from '@apollo/client';
import Image from 'next/image';

import {
  HomePageQuery,
  homePageQuery,
  homePageQueryVariables,
} from '../../graphql-queries';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { LinkComponent } from '../common/link-component/link-component';
import styles from './home.module.css';

export const HomeLayout = (): JSX.Element | undefined => {
  const { data, loading } = useQuery<HomePageQuery>(homePageQuery, {
    variables: homePageQueryVariables(),
  });

  if (loading) {
    return null;
  }

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
          {data.TechnologyLogo?.map(logo => {
            return (
              <div
                key={logo.id as string}
                className={styles.LogoContainer as string}
              >
                <Image
                  src={logo.Image.url}
                  alt={logo.Image.altText}
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
