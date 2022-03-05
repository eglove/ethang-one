import { formatList } from '@ethang-one/util-typescript';
import Image from 'next/image';

import { courses } from '../../database/data/courses';
import { Course } from '../../database/models/course';
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

export const CoursesLayout = (): JSX.Element => {
  const courseNames = Object.getOwnPropertyNames(courses);

  return (
    <Container>
      <HeadTag title="Courses" />
      <div>
        {courseNames.map(courseName => {
          const course = courses[courseName] as Course;

          return (
            <div key={courseName} className={styles.CourseContainer}>
              <div className={styles.CourseItem}>
                <CourseRating
                  rating={course.rating}
                  ratingUrl={course.ratingUrl?.toString()}
                />
              </div>
              <div className={styles.CourseItem}>
                <LinkComponent
                  linkProperties={{ href: course.school.url.toString() }}
                >
                  <Image
                    src={course.school.image.url}
                    alt={course.school.image.altText}
                    width={25}
                    height={25}
                  />
                </LinkComponent>
              </div>

              <div className={styles.CourseItem}>
                <div>{course.title}</div>
                <div className={styles.CourseUrls}>
                  {course.courseUrls?.map(courseUrl => {
                    return (
                      <span key={courseUrl.url.toString()}>
                        <LinkComponent
                          linkProperties={{ href: courseUrl.url.toString() }}
                        >
                          {courseUrl.school.name}
                        </LinkComponent>
                        &ensp;
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className={styles.CourseItem}>
                {Array.isArray(course.instructors) &&
                  formatList(
                    course.instructors?.map(instructor => {
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
    </Container>
  );
};
