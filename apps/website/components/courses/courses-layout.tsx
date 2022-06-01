import { Breadcrumbs, NextLink } from '@ethang/react-components';
import { useKnuthPlassLineBreaks } from '@ethang/react-hooks';
import { DiscussionEmbed } from 'disqus-react';

import { BASE_URL } from '../../util/constants';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { SortedCourses } from './course/sorted-courses';

export function CoursesLayout(): JSX.Element {
  useKnuthPlassLineBreaks('p');

  return (
    <Container>
      <HeadTag title="Courses" />
      <div>
        <Breadcrumbs
          links={[
            { href: '/', label: 'Home' },
            { href: '/courses', label: 'Courses' },
          ]}
        />
        <h1>The Recommended Courses</h1>
        <p>
          This page changes often, lock in your plan by{' '}
          <NextLink
            linkProperties={{
              href: 'https://drive.google.com/file/d/1EZMNkMMsBJLpPsYuCU1XCmsJhcpH8Hkf/view?usp=sharing',
            }}
          >
            downloading the June 2022 snapshot
          </NextLink>{' '}
          (PDF).
        </p>
        <p>
          This page is my attempt to put the best coding courses out there in
          one list. They are put in an order so that someone new to coding can
          start at the top, learn from scratch and end up knowing more than a
          college degree could ever provide. This list can take 2-3 years to
          complete and will cost money, but I believe there is nothing that
          brings so much quality together in one place.
        </p>
        <SortedCourses />
      </div>
      <DiscussionEmbed
        shortname="ethang"
        config={{
          identifier: 'courses',
          language: 'en-US',
          url: `${BASE_URL}/courses`,
        }}
      />
    </Container>
  );
}
