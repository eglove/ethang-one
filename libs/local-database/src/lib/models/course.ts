import { Person } from './person';
import { School } from './school';

export class Course {
  courseUrls: CourseUrl[];
  duration?: number;
  instructors?: Person[];
  rating: 1 | 2 | 3 | 4 | 5;
  ratingUrl?: URL;
  school: School;
  title: string;
  udemyId?: number;
  yearUpdated?: number;

  constructor(parameters: Course) {
    this.courseUrls = parameters.courseUrls;
    this.duration = parameters.duration;
    this.instructors = parameters.instructors;
    this.rating = parameters.rating;
    this.ratingUrl = parameters.ratingUrl;
    this.school = parameters.school;
    this.title = parameters.title;
    this.udemyId = parameters.udemyId;
    this.yearUpdated = parameters.yearUpdated;
  }
}

export class CourseUrl {
  school: School;
  url: URL;

  constructor(parameters: CourseUrl) {
    this.school = parameters.school;
    this.url = parameters.url;
  }
}
