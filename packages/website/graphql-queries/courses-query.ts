import { gql } from '@apollo/client';

import { ImageDataType, imageFragments } from './fragments/image-fragments';
import { personFragments, PersonNameType } from './fragments/person-fragments';
import { Course, CourseInstructor, CourseUrl, School } from './types';

export type CoursesQuery = {
  Course: Array<
    Pick<
      Course,
      | 'complete'
      | 'createdAt'
      | 'duration'
      | 'id'
      | 'rating'
      | 'ratingUrl'
      | 'recommended'
      | 'title'
      | 'updatedAt'
      | 'yearUpdated'
    > & {
      CourseInstructors: Array<
        Pick<CourseInstructor, 'id'> & { Person: PersonNameType }
      >;
    } & {
      CourseUrls: Array<Pick<CourseUrl, 'id' | 'url'>> & {
        School: Pick<School, 'name'>;
      };
    } & {
      School: Pick<School, 'url'> & { Image: ImageDataType };
    }
  >;
};

export const coursesQueryVariables = (
  recommended = true,
  order = 'asc'
): Record<string, unknown> => {
  return {
    order_by: { order },
    where: { recommended: { _eq: recommended } },
  };
};

export const coursesQuery = gql`
  ${imageFragments}
  ${personFragments}
  query CoursesQuery {
    Course(order_by: { order: asc }, where: { recommended: { _eq: true } }) {
      CourseInstructors {
        id
        Person {
          ...PersonName
        }
      }
      CourseUrls {
        id
        School {
          name
        }
        url
      }
      School {
        Image {
          ...ImageData
        }
        url
      }
      complete
      createdAt
      duration
      id
      rating
      ratingUrl
      recommended
      title
      updatedAt
      yearUpdated
    }
  }
`;
