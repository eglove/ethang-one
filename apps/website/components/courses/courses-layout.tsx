import { NextLink } from '@ethang/react-components';
import { formatList } from '@ethang/util-typescript';
import Head from 'next/head';
import Image from 'next/image';

import { Course } from '../../graphql/types';
import commonStyles from '../../styles/common.module.css';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { LinkComponent } from '../common/link-component/link-component';
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

interface CoursesLayoutProperties {
  courses: Course[];
}

export const CoursesLayout = ({
  courses,
}: CoursesLayoutProperties): JSX.Element => {
  return (
    <Container>
      <HeadTag title="Courses" />
      <Head>
        <script
          async
          src="https://ethang.disqus.com/embed.js"
          data-timestamp={new Date()}
        />
      </Head>
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
            <meta itemProp="position" content="1" />
          </li>
          <li
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <NextLink linkProperties={{ href: '/courses', itemProp: 'item' }}>
              <span itemProp="name">Courses</span>
            </NextLink>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
        {courses.map(course => {
          return (
            <div key={course.id} className={styles.CourseContainer}>
              <div className={styles.CourseItem}>
                <CourseRating
                  rating={course.rating}
                  ratingUrl={course.ratingUrl}
                />
              </div>
              <div className={styles.CourseItem}>
                <LinkComponent linkProperties={{ href: course.school.url }}>
                  <Image
                    src={course.school.image.image.downloadUrl}
                    alt={course.school.image.altText}
                    width={25}
                    height={25}
                  />
                </LinkComponent>
              </div>

              <div className={styles.CourseItem}>
                <div>{course.title}</div>
                <div className={styles.CourseUrls}>
                  {course.courseUrls?.items.map(courseUrl => {
                    return (
                      <div key={courseUrl.url}>
                        <LinkComponent linkProperties={{ href: courseUrl.url }}>
                          {courseUrl.school.name}
                        </LinkComponent>
                        &ensp;
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.CourseItem}>
                {Array.isArray(course.instructors.items) &&
                  formatList(
                    course.instructors?.items.map(instructor => {
                      return `${instructor.firstName} ${
                        instructor?.lastName ?? ''
                      }`;
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
      <div id="disqus_thread" />
    </Container>
  );
};
