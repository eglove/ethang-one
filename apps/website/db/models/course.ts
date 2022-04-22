import { Person } from './person';
import { School } from './school';

interface ICourse {
  courseUrls: [{ school: School; url: URL }];
  duration: number;
  instructors: Person[];
  rating: 1 | 2 | 3 | 4 | 5;
  ratingUrl?: URL;
  recommendationOrder: number;
  title: string;
  yearUpdated?: number;
}

export class Course implements ICourse {
  courseUrls: [{ school: School; url: URL }];
  duration: number;
  instructors: Person[];
  rating: 1 | 2 | 3 | 4 | 5;
  ratingUrl: URL;
  recommendationOrder: number;
  title: string;
  yearUpdated: number;

  constructor(parameters: ICourse) {
    this.courseUrls = parameters.courseUrls;
    this.duration = parameters.duration;
    this.instructors = parameters.instructors;
    this.rating = parameters.rating;
    this.ratingUrl = parameters.ratingUrl;
    this.recommendationOrder = parameters.recommendationOrder;
    this.title = parameters.title;
    this.yearUpdated = parameters.yearUpdated;
  }
}
