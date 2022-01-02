import {useQuery} from '@apollo/client';
import {randomizedArray, uuid} from '@ethang-one/util-typescript';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

import {Query} from '../../graphql/types';
import githubImage from '../../public/images/github.png';
import globeImage from '../../public/images/globe.svg';
import {HeadTag} from '../common/head-tag/head-tag';
import {LinkComponent} from '../common/link-component/link-component';
import {LoadingImage} from '../common/loading-image/loading-image';
import styles from './portfolios-layout.module.css';
import {portfoliosLayoutQuery} from './portfolios-layout-gql';

export const PortfoliosLayout = (): JSX.Element => {
  const {data, loading, error} = useQuery<Query>(portfoliosLayoutQuery);

  const [columns, setColumns] = useState<number>(2);

  useEffect(() => {
    const handleResize = (): void => {
      if (globalThis.innerWidth <= 768) {
        setColumns(1);
      } else {
        setColumns(2);
      }
    };

    // Initial call
    handleResize();

    globalThis.addEventListener('resize', handleResize);

    return (): void => {
      globalThis.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) {
    return <LoadingImage/>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <HeadTag title="Portfolio"/>
      <Masonry
        gutter="10"
        columnscount={columns}
        className={styles.MasonryContainer}
      >
        {data?.projects
          && randomizedArray(data.projects.length).map(projectIndex => {
            const project = data.projects?.[projectIndex];

            return (
              <ResponsiveMasonry key={uuid()}>
                <div className={styles.ProjectContainer}>
                  <Image
                    className={styles.ProjectImage}
                    src={project.featuredImage.url}
                    alt={project.featuredImage.altText}
                    width={project.featuredImage.width}
                    height={project.featuredImage.height}
                  />
                  <div className={styles.ProjectInfo}>
                    {project.githubUrl && (
                      <div className={styles.IconContainer}>
                        <LinkComponent
                          content={
                            <Image
                              src={githubImage}
                              alt={`${project.name} GitHub Repo`}
                            />
                          }
                          href={project.githubUrl}
                        />
                      </div>
                    )}
                    <div>
                      <LinkComponent
                        content={project.name}
                        href={`/portfolio/${project.slug}`}
                      />
                    </div>
                    {project.projectUrl && (
                      <div className={styles.IconContainer}>
                        <LinkComponent
                          content={
                            <Image
                              src={globeImage}
                              alt={`${project.name} URL`}
                            />
                          }
                          href={project.projectUrl}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </ResponsiveMasonry>
            );
          })}
      </Masonry>
    </>
  );
};
