import { Course } from '../../models/course';
import { schools } from '../schools/schools';

export const courses = {
  comptiaAPlusCore2: new Course({
    courseUrls: [
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/new-comptia-a-2019-certification-1002-the-total-course/'
        ),
      },
    ],
    duration: 14.82,
    rating: 5,
    recommendationOrder: 3,
    title: ' CompTIA A+ Core 2',
    yearUpdated: 2021,
  }),
};
