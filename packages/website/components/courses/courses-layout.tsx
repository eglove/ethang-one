import { useQuery } from '@apollo/client';
import { formatList, uuid } from '@ethang-one/util-typescript';
import Image from 'next/image';

import { Query } from '../../graphql/types';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { LinkComponent } from '../common/link-component/link-component';
import { CourseLink } from './course-link';
import { CourseRating } from './course-rating';
import styles from './courses.module.css';
import { coursesLayoutQuery } from './courses-layout-gql';

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
  const { data, error } = useQuery<Query>(coursesLayoutQuery, {
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
      <HeadTag title="Courses" />
      <div>
        {data?.courses?.map(course => {
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
                      src={course.school.logo.url}
                      alt={course.school.logo.altText}
                      width={25}
                      height={25}
                    />
                  }
                  href={course.school.url}
                />
              </div>

              <div className={styles.CourseItem as string}>
                <div>{course.title}</div>
                <div className={styles.CourseUrls as string}>
                  {course.courseUrls.map(url => {
                    return (
                      <span key={url}>
                        <CourseLink key={uuid()} url={url} />
                        &emsp;
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className={styles.CourseItem as string}>
                {formatList(
                  course.instructors.map(instructor => {
                    return `${instructor.instructor.firstName} ${instructor.instructor.lastName}`;
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
