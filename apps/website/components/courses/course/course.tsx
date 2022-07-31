import { Course as CourseModel } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';

import styles from './course.module.css';
import { CourseLink } from './course-link';
import { ratingStyles, yearUpdatedStyles } from './util';

type CourseProperties = {
  children?: JSX.Element | JSX.Element[];
  course: CourseModel;
  getInstructorNames: () => string | undefined;
  isOpen: boolean;
  isOpenProperties: JSX.IntrinsicElements['div'];
};

export function Course({
  children,
  course,
  getInstructorNames,
  isOpen,
  isOpenProperties,
}: CourseProperties): JSX.Element {
  return (
    <div
      className={`${styles.CourseContainer} ${
        isOpen ? styles.CourseContainerActive : ''
      }`}
      {...isOpenProperties}
    >
      <div className={styles.CourseTitle}>{course.title}</div>
      <div className={styles.YearUpdated}>
        <span style={yearUpdatedStyles(course.yearUpdated)}>
          {course.yearUpdated}
        </span>
      </div>
      {isOpen && (
        <>
          <div className={styles.Rating}>
            <span style={ratingStyles(course.rating)}>{course.rating}/5</span>
          </div>

          <div className={styles.ReviewUrl}>
            {course.ratingUrl && (
              <NextLink linkProperties={{ href: course.ratingUrl.href }}>
                Full Review
              </NextLink>
            )}
          </div>
          <div className={styles.Summary}>
            <div>Instructors: {getInstructorNames()}</div>
            {children}
          </div>
          <div className={styles.CourseLinks}>
            {course.courseUrls.map(courseUrl => {
              return (
                <CourseLink courseUrl={courseUrl} key={courseUrl.url.href} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
