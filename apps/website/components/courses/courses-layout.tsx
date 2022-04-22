import { NextLink } from '@ethang/react-components';
import { formatList } from '@ethang/util-typescript';
import { DiscussionEmbed } from 'disqus-react';
import Image from 'next/image';

import { sortedCourses } from '../../db/data/courses/sourted-courses';
import commonStyles from '../../styles/common.module.css';
import { BASE_URL } from '../../util/constants';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { CourseRating } from './course-rating';
import styles from './courses.module.css';

const getYearClass = (yearUpdated: number): string => {
  const thisYear = new Date().getFullYear();

  switch (yearUpdated) {
    case thisYear: {
      return `${styles.ThisYear}`;
    }

    case thisYear - 1: {
      return `${styles.LastYear}`;
    }

    case thisYear - 2: {
      return `${styles.TwoYears}`;
    }

    case 0: {
      return `${styles.CourseItem}`;
    }

    default: {
      return `${styles.Outdated}`;
    }
  }
};

export function CoursesLayout(): JSX.Element {
  return (
    <Container>
      <HeadTag title="Courses" />

      <div>
        <ol
          itemScope
          className={commonStyles.Breadcrumb}
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <NextLink linkProperties={{ href: '/', itemProp: 'item' }}>
              <span itemProp="name">Home</span>
            </NextLink>
            <meta content="1" itemProp="position" />
          </li>
          <li
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <NextLink linkProperties={{ href: '/courses', itemProp: 'item' }}>
              <span itemProp="name">Courses</span>
            </NextLink>
            <meta content="2" itemProp="position" />
          </li>
        </ol>
        <h1 className={styles.Title}>The Recommended Courses</h1>
        <p>
          <NextLink linkProperties={{ href: '/blog/the-recommended-courses' }}>
            How to use this guide.
          </NextLink>
        </p>
        <p>
          This page changes often, lock in your plan by{' '}
          <NextLink
            linkProperties={{ href: '/documents/Development_Curriculum.pdf' }}
          >
            downloading the April 2022 snapshot
          </NextLink>{' '}
          (PDF).
        </p>
        {sortedCourses.map(course => {
          return (
            <div className={styles.CourseContainer} key={course.title}>
              <div className={styles.CourseItem}>
                <CourseRating
                  rating={course.rating}
                  ratingUrl={course.ratingUrl?.toString()}
                />
              </div>
              <div className={styles.CourseItem}>
                <NextLink
                  linkProperties={{ href: course.school.url.toString() }}
                >
                  <Image
                    alt={course.school.image.altText}
                    height={25}
                    src={course.school.image.url}
                    width={25}
                  />
                </NextLink>
              </div>

              <div className={styles.CourseItem}>
                <div>{course.title}</div>
                <div className={styles.CourseUrls}>
                  {course.courseUrls?.map(courseUrl => {
                    return (
                      <div key={courseUrl.url.toString()}>
                        <NextLink
                          linkProperties={{ href: courseUrl.url.toString() }}
                        >
                          {courseUrl.school.name}
                        </NextLink>
                        &ensp;
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.CourseItem}>
                {Array.isArray(course.instructors) &&
                  formatList(
                    course.instructors?.map(instructor => {
                      return instructor.fullName;
                    })
                  )}
              </div>
              <div className={styles.CourseItem}>
                {typeof course.duration !== 'number' || course.duration === 0
                  ? ''
                  : `${course.duration.toFixed(2)} hrs`}
              </div>
              <div className={getYearClass(course.yearUpdated)}>
                {course.yearUpdated === 0 ? '' : course.yearUpdated}
              </div>
            </div>
          );
        })}
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
