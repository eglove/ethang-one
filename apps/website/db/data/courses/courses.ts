import { Course } from '../../models/course';
import { persons } from '../persons/persons';
import { schools } from '../schools/schools';

export const courses = {
  accessibilityForEveryone: new Course({
    courseUrls: [
      {
        school: schools.levelUpTutorials,
        url: new URL(
          'https://leveluptutorials.com/tutorials/accessibility-for-everyone/'
        ),
      },
    ],
    duration: 2.4623,
    instructors: [persons.amyKapernick],
    rating: 5,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-accessibility-for-everyone'
    ),
    recommendationOrder: 4,
    title: 'Accessibility For Everyone',
    yearUpdated: 2021,
  }),
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
    instructors: [persons.mikeMeyers],
    rating: 5,
    recommendationOrder: 3,
    title: 'CompTIA A+ Core 2',
    yearUpdated: 2021,
  }),
};
