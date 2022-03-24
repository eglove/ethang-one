import { gql } from '@apollo/client';

import { CoursesLayout } from '../../components/courses/courses-layout';
import { Course, Data } from '../../graphql/types';
import { apolloClient } from '../_app';

export type CoursesData = { courses: Course[] };

function Courses({ courses }: CoursesData): JSX.Element {
  return <CoursesLayout courses={courses} />;
}

export default Courses;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{ props: CoursesData }> {
  const { data } = await apolloClient.client.query<Data>({
    query: gql`
      query BlogsQuery {
        coursesList(orderBy: recommendationOrder_ASC) {
          items {
            id
            rating
            ratingUrl
            school {
              name
              url
              image {
                altText
                image {
                  downloadUrl
                }
              }
            }
            title
            courseUrls {
              items {
                url
                school {
                  name
                }
              }
            }
            instructors {
              items {
                firstName
                lastName
              }
            }
            duration
            yearUpdated
          }
        }
      }
    `,
  });

  return {
    props: {
      courses: data.coursesList.items,
    },
  };
}
