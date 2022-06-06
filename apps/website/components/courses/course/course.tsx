import { Course as CourseModel } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';
import { formatList } from '@ethang/util-typescript';
import { Dispatch, SetStateAction } from 'react';

import styles from './course.module.css';
import { CourseLink } from './course-link';
import { CourseKey } from './sorted-courses';
import {
  closedTemplateAreas,
  openTemplateAreas,
  ratingStyles,
  yearUpdatedStyles,
} from './util';

interface CourseProperties {
  children?: JSX.Element | JSX.Element[];
  course: CourseModel;
  openCourse: CourseKey;
  setOpenCourse: Dispatch<SetStateAction<CourseKey>>;
}

export function Course({
  children,
  course,
  openCourse,
  setOpenCourse,
}: CourseProperties): JSX.Element {
  const isOpen = openCourse === course.title;

  const handleTitleClick = (): void => {
    setOpenCourse(course.title as CourseKey);
  };

  const isOpenProperties = isOpen
    ? { style: { ...openTemplateAreas } }
    : {
        onClick: handleTitleClick,
        onKeyDown: handleTitleClick,
        role: 'button',
        style: { cursor: 'pointer', ...closedTemplateAreas },
        tabIndex: 0,
      };

  const getInstructorNames = (): string | undefined => {
    if (Array.isArray(course.instructors)) {
      return formatList(
        course.instructors.map(instructor => {
          return instructor.fullName;
        })
      );
    }
  };

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
