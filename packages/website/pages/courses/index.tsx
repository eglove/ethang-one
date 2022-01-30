import { Course } from '@ethang-one/prisma-connection';
import { PrismaClient } from '@prisma/client';

import { CoursesLayout } from '../../components/courses/courses-layout';

interface CoursesProperties {
  courses: Course[];
}

const Courses = ({ courses }: CoursesProperties): JSX.Element => {
  return <CoursesLayout courses={courses} />;
};

export default Courses;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<Record<string, unknown>> {
  const prisma = new PrismaClient();

  const courses = await prisma.course.findMany({
    orderBy: {
      order: 'desc',
    },
    select: {
      CourseInstructor: {
        select: {
          Person: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
      CourseUrl: {
        select: {
          School: {
            select: {
              name: true,
            },
          },
          url: true,
        },
      },
      School: {
        select: {
          Image: {
            select: {
              altText: true,
              height: true,
              url: true,
              width: true,
            },
          },
          url: true,
        },
      },
      complete: true,
      courseUrls: true,
      createdAt: true,
      duration: true,
      id: true,
      rating: true,
      ratingUrl: true,
      recommended: true,
      schoolId: true,
      title: true,
      updatedAt: true,
      yearUpdated: true,
    },
    where: {
      recommended: true,
    },
  });

  return {
    props: {
      courses: courses.map(course => {
        return {
          ...course,
          createdAt: course.createdAt.toISOString(),
          updatedAt: course.updatedAt.toISOString(),
        };
      }),
    },
    revalidate: 60,
  };
}
