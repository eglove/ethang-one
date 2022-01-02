import {useQuery} from '@apollo/client';
import {formatList} from '@ethang-one/util-typescript';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {default as reactHtmlParser} from 'react-html-parser';

import {Query} from '../../graphql/types';
import {CreateUpdateTimes} from '../common/create-update-times/create-update-times';
import {HeadTag} from '../common/head-tag/head-tag';
import {LinkComponent} from '../common/link-component/link-component';
import {projectLayoutQuery} from './project-layout-gql';

export const ProjectLayout = (): JSX.Element => {
  const router = useRouter();
  const [contributorNames, setContributorNames] = useState<string[]>([]);

  const {data, error} = useQuery<Query>(projectLayoutQuery, {
    fetchPolicy: 'cache-and-network',
    onCompleted: data => {
      setContributorNames(
        data.project.contributors.map(contributor => `${contributor.contributor.firstName} ${contributor.contributor.lastName}`),
      );
    },
    skip: typeof router.query.slug !== 'string',
    variables: {
      where: {
        slug: router.query.slug as string,
      },
    },
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.project && (
        <>
          <HeadTag title={data.project.name}/>
          <h1>{data.project.name}</h1>
          <div>Contributors: {formatList(contributorNames)}</div>
          <CreateUpdateTimes
            created={data.project.createdAt as string}
            updated={data.project.updatedAt as string}
          />
          {data.project.projectUrl && (
            <LinkComponent
              content="See the Project"
              href={data.project.projectUrl}
            />
          )}
          &emsp;
          {data.project.githubUrl && (
            <LinkComponent
              content="See the Code"
              href={data.project.githubUrl}
            />
          )}
          <div>{reactHtmlParser(data.project.summary)}</div>
          <div style={{display: 'grid', placeItems: 'center'}}>
            <Image
              src={data?.project.featuredImage.url}
              alt={data?.project.featuredImage.altText}
              width={data?.project.featuredImage.width}
              height={data?.project.featuredImage.height}
            />
          </div>
        </>
      )}
    </>
  );
};
