import { School } from './school';

interface ICourse {
  courseUrl: [{ school: School; url: URL }];
  duration: number;
  rating: 1 | 2 | 3 | 4 | 5;
  ratingUrl?: URL;
  recommendationOrder: number;
  title: string;
  yearUpdated?: number;
}

export class Course implements ICourse {
  courseUrl: [{ school: School; url: URL }];
  duration: number;
  rating: 1 | 2 | 3 | 4 | 5;
  ratingUrl: URL;
  recommendationOrder: number;
  title: string;
  yearUpdated: number;

  constructor(parameters: ICourse) {
    this.courseUrl = parameters.courseUrl;
    this.duration = parameters.duration;
    this.rating = parameters.rating;
    this.ratingUrl = parameters.ratingUrl;
    this.recommendationOrder = parameters.recommendationOrder;
    this.title = parameters.title;
    this.yearUpdated = parameters.yearUpdated;
  }
}
