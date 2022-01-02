import {useQuery} from '@apollo/client';
import {formatList, uuid} from '@ethang-one/util-typescript';
import Image from 'next/image';

import {Query} from '../../graphql/types';
import {Container} from '../common/container/container';
import {HeadTag} from '../common/head-tag/head-tag';
import {LinkComponent} from '../common/link-component/link-component';
import {CourseLink} from './course-link';
import {CourseRating} from './course-rating';
import styles from './courses.module.css';
import {coursesLayoutQuery} from './courses-layout-gql';

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
  const {data, error} = useQuery<Query>(coursesLayoutQuery, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: {
        order: 'asc',
      },
      where: {
        recommended: {
          equals: true,
        },
      },
    },
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <HeadTag title="Courses"/>
      <div>
        {data?.courses?.map(course => (
          <div key={course.id} className={styles.CourseContainer}>
            <div className={styles.CourseItem}>
              <CourseRating
                complete={course.complete}
                rating={course.rating?.toString()}
                ratingUrl={course.ratingUrl}
              />
            </div>
            <div className={styles.CourseItem}>
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

            <div className={styles.CourseItem}>
              <div>{course.title}</div>
              <div className={styles.CourseUrls}>
                {course.courseUrls.map(url => (
                  <>
                    <CourseLink key={uuid()} url={url}/>
                        &emsp;
                  </>
                ))}
              </div>
            </div>
            <div className={styles.CourseItem}>
              {formatList(
                course.CourseInstructor.map(instructor => `${instructor.Person.firstName} ${instructor.Person.lastName}`),
              )}
            </div>
            <div className={styles.CourseItem}>
              {course.duration === 0
                ? ''
                : `${course.duration.toFixed(2)} hrs`}
            </div>
            <div className={getYearClass(course.yearUpdated)}>
              {course.yearUpdated === 0 ? '' : course.yearUpdated}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
