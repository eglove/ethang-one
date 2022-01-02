import {useQuery} from '@apollo/client';
import {formatList} from '@ethang-one/util-typescript';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {default as reactHtmlParser} from 'react-html-parser';

import {Image as image, Person, Project, ProjectContributor, Query} from '../../graphql/types';
import {CreateUpdateTimes} from '../common/create-update-times/create-update-times';
import {HeadTag} from '../common/head-tag/head-tag';
import {LinkComponent} from '../common/link-component/link-component';
import {projectLayoutQuery} from './project-layout-gql';

interface ProjectExtended extends Project {
  contributors: ContributorExtended[];
  featuredImage: image;
}

interface ContributorExtended extends ProjectContributor {
  contributor: Person;
}

export const ProjectLayout = (): JSX.Element => {
  const router = useRouter();
  const [contributorNames, setContributorNames] = useState<string[]>([]);

  const {data, error} = useQuery<Query>(projectLayoutQuery, {
    fetchPolicy: 'cache-and-network',
    onCompleted: data => {
      setContributorNames(
        data.project.ProjectContributor.map(contributor => `${contributor.Person.firstName} ${contributor.Person.lastName}`),
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
      {(data?.project as ProjectExtended) && (
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
              src={data?.project.Image.url}
              alt={data?.project.Image.altText}
              width={data?.project.Image.width}
              height={data?.project.Image.height}
            />
          </div>
        </>
      )}
    </>
  );
};
