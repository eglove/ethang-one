import { useQuery } from '@apollo/client';
import { formatList } from '@ethang-one/util-typescript';
import Image from 'next/image';

import {
  CoursesQuery,
  coursesQuery,
  coursesQueryVariables,
} from '../../graphql-queries/courses-query';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { LinkComponent } from '../common/link-component/link-component';
import { LoadingImage } from '../common/loading-image/loading-image';
import { CourseRating } from './course-rating';
import styles from './courses.module.css';

const getYearClass = (yearUpdated: number): string => {
  const thisYear = new Date().getFullYear();

  switch (yearUpdated) {
    case thisYear: {
      return `${styles.ThisYear as string}`;
    }

    case thisYear - 1: {
      return `${styles.LastYear as string}`;
    }

    case thisYear - 2: {
      return `${styles.TwoYears as string}`;
    }

    case 0: {
      return `${styles.CourseItem as string}`;
    }

    default: {
      return `${styles.Outdated as string}`;
    }
  }
};

export const CoursesLayout = (): JSX.Element => {
  const { data } = useQuery<CoursesQuery>(coursesQuery, {
    fetchPolicy: 'cache-and-network',
    variables: coursesQueryVariables(),
  });

  if (typeof data === 'undefined') {
    return <LoadingImage />;
  }

  return (
    <Container>
      <HeadTag title="Courses" />
      <div>
        {data.Course?.map(course => {
          return (
            <div
              key={course.id as string}
              className={styles.CourseContainer as string}
            >
              <div className={styles.CourseItem as string}>
                <CourseRating
                  complete={course.complete}
                  rating={
                    typeof course.rating === 'string' &&
                    course.rating?.toString()
                  }
                  ratingUrl={course.ratingUrl}
                />
              </div>
              <div className={styles.CourseItem as string}>
                <LinkComponent linkProperties={{ href: course.School.url }}>
                  <Image
                    src={course.School.Image.url}
                    alt={course.School.Image.altText}
                    width={25}
                    height={25}
                  />
                </LinkComponent>
              </div>

              <div className={styles.CourseItem as string}>
                <div>{course.title}</div>
                <div className={styles.CourseUrls as string}>
                  {course.CourseUrls.map(courseUrl => {
                    return (
                      <span key={courseUrl.url}>
                        <LinkComponent linkProperties={{ href: courseUrl.url }}>
                          {courseUrl.School.name}
                        </LinkComponent>
                        &ensp;
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className={styles.CourseItem as string}>
                {formatList(
                  course.CourseInstructors.map(instructor => {
                    return `${instructor.Person.firstName} ${instructor.Person.lastName}`;
                  })
                )}
              </div>
              <div className={styles.CourseItem as string}>
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
    </Container>
  );
};
