import { Course } from '@ethang-one/prisma-connection';
import { formatList } from '@ethang-one/util-typescript';
import Image from 'next/image';

import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { LinkComponent } from '../common/link-component/link-component';
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

interface CoursesLayoutProperties {
  courses: Course[];
}

export const CoursesLayout = ({
  courses,
}: CoursesLayoutProperties): JSX.Element => {
  return (
    <Container>
      <HeadTag title="Courses" />
      <div>
        {courses?.map(course => {
          return (
            <div key={course.id} className={styles.CourseContainer as string}>
              <div className={styles.CourseItem as string}>
                <CourseRating
                  complete={course.complete}
                  rating={course.rating?.toString()}
                  ratingUrl={course.ratingUrl}
                />
              </div>
              <div className={styles.CourseItem as string}>
                <LinkComponent
                  content={
                    <Image
                      src={course.School.Image.url}
                      alt={course.School.Image.altText}
                      width={25}
                      height={25}
                    />
                  }
                  href={course.School.url}
                />
              </div>

              <div className={styles.CourseItem as string}>
                <div>{course.title}</div>
                <div className={styles.CourseUrls as string}>
                  {course.CourseUrl.map(courseUrl => {
                    return (
                      <span key={courseUrl.url}>
                        <LinkComponent
                          content={courseUrl.School.name}
                          href={courseUrl.url}
                        />
                        &ensp;
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className={styles.CourseItem as string}>
                {formatList(
                  course.CourseInstructor.map(instructor => {
                    return `${instructor.Person.firstName} ${instructor.Person.lastName}`;
                  })
                )}
              </div>
              <div className={styles.CourseItem as string}>
                {course.duration === 0
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
