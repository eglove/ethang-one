import { Person } from './person';
import { School } from './school';

type ICourse = {
  courseUrls: CourseUrl[];
  duration?: number;
  instructors?: Person[];
  rating: 1 | 2 | 3 | 4 | 5;
  ratingUrl?: URL;
  school: School;
  title: string;
  yearUpdated?: number;
};

type ICourseUrl = {
  school: School;
  url: URL;
};

export class Course implements ICourse {
  courseUrls: CourseUrl[];
  duration?: number;
  instructors?: Person[];
  rating: 1 | 2 | 3 | 4 | 5;
  ratingUrl?: URL;
  school: School;
  title: string;
  yearUpdated?: number;

  constructor(parameters: ICourse) {
    this.courseUrls = parameters.courseUrls;
    this.duration = parameters.duration;
    this.instructors = parameters.instructors;
    this.rating = parameters.rating;
    this.ratingUrl = parameters.ratingUrl;
    this.school = parameters.school;
    this.title = parameters.title;
    this.yearUpdated = parameters.yearUpdated;
  }
}

export class CourseUrl implements ICourseUrl {
  school: School;
  url: URL;

  constructor(parameters: ICourseUrl) {
    this.school = parameters.school;
    this.url = parameters.url;
  }
}
