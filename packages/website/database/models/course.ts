import { Person } from './person';
import { School } from './school';

type CourseUrl = {
  school: School;
  url: URL;
};

type CourseConstructor = {
  duration: number;
  courseUrls: CourseUrl[];
  instructors?: Person[];
  rating: 1 | 2 | 3 | 4 | 5;
  ratingUrl?: URL;
  school: School;
  title: string;
  yearUpdated: number;
};

export class Course {
  public duration: number;
  public courseUrls: CourseUrl[];
  public instructors?: Person[];
  public rating: 1 | 2 | 3 | 4 | 5;
  public ratingUrl?: URL;
  public school: School;
  public title: string;
  public yearUpdated: number;

  constructor(parameters: CourseConstructor) {
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
