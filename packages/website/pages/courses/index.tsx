import { CoursesLayout } from '../../components/courses/courses-layout';
import {
  CoursesQuery,
  coursesQuery,
  coursesQueryVariables,
} from '../../graphql-queries/courses-query';
import { apolloClient } from '../_app';

const Courses = (): JSX.Element => {
  return <CoursesLayout />;
};

export default Courses;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<Record<string, unknown>> {
  await apolloClient.client.query<CoursesQuery>({
    query: coursesQuery,
    variables: coursesQueryVariables(),
  });

  return {
    props: {},
  };
}
