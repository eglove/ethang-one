import { Course as CourseModel } from '@ethang/local-database';
import { formatList } from '@ethang/util-typescript';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useState } from 'react';

import { CoursesDetail } from '../../../../../libs/udemy-api/src/lib/types/courses-detail';
import { Course } from './course';
import { CourseKey } from './sorted-courses';
import { closedTemplateAreas, openTemplateAreas } from './util';

type GetCourseProperties = {
  children?: JSX.Element | JSX.Element[];
  course: CourseModel;
  openCourse: CourseKey | undefined;
  setOpenCourse: Dispatch<SetStateAction<CourseKey | undefined>>;
};

export function GetCourse({
  course,
  children,
  openCourse,
  setOpenCourse,
}: GetCourseProperties): JSX.Element {
  const isOpen = openCourse === course.title;
  const [courseState, setCourseState] = useState(course);

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

  const handleGetCourseDetails = async (): Promise<
    CoursesDetail | undefined
  > => {
    if (typeof course.udemyId !== 'undefined') {
      const response = await fetch(
        `/api/udemy/courses-detail?courseKey=${course.udemyId}`
      );

      return response.json() as unknown as CoursesDetail;
    }
  };

  const { isLoading } = useQuery<CoursesDetail | undefined>(
    [course.udemyId],
    handleGetCourseDetails,
    {
      enabled: typeof course.udemyId !== 'undefined',
      onSuccess(data_) {
        if (typeof data_ !== 'undefined') {
          setCourseState(courseState_ => {
            return {
              ...courseState_,
              courseUrls: courseState_.courseUrls.map(courseUrl => {
                if (courseUrl.school.name === 'Udemy') {
                  return {
                    ...courseUrl,
                    url: new URL(`https://udemy.com${data_.url}`),
                  };
                }

                return courseUrl;
              }),
              title: data_.title,
            };
          });
        }
      },
    }
  );

  if (isLoading && typeof course.udemyId !== 'undefined') {
    return <span />;
  }

  return (
    <Course
      course={courseState}
      getInstructorNames={getInstructorNames}
      isOpen={isOpen}
      isOpenProperties={isOpenProperties}
    >
      {children}
    </Course>
  );
}
