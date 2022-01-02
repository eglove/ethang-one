import {gql} from '@apollo/client';

export const coursesLayoutQuery = gql`
  query CoursesQuery(
    $where: CourseWhereInput
    $orderBy: [CourseOrderByWithRelationInput!]
  ) {
    courses(where: $where, orderBy: $orderBy) {
      title
      courseUrls
      updatedAt
      createdAt
      id
      yearUpdated
      rating
      ratingUrl
      recommended
      duration
      schoolId
      complete
      School {
        url
        Image {
          url
          altText
          width
          height
        }
      }
      CourseInstructor {
        Person {
          firstName
          lastName
        }
      }
    }
  }
`;

export const courseLinksQuery = gql`
  query School($where: SchoolWhereUniqueInput!) {
    school(where: $where) {
      name
      Image {
        url
        altText
        height
        width
      }
    }
  }
`;
