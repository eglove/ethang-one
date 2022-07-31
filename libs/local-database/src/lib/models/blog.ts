import { Image } from './image';
import { Person } from './person';

type IBlog = {
  authors: Person[];
  createdAt: Date;
  description: string;
  featuredImage: Image;
  slug: string;
  title: string;
  updatedAt: Date;
};

export class Blog implements IBlog {
  authors: Person[];
  createdAt: Date;
  description: string;
  featuredImage: Image;
  slug: string;
  title: string;
  updatedAt: Date;

  constructor(parameters: IBlog) {
    this.authors = parameters.authors;
    this.createdAt = parameters.createdAt;
    this.description = parameters.description;
    this.featuredImage = parameters.featuredImage;
    this.slug = parameters.slug;
    this.title = parameters.title;
    this.updatedAt = parameters.updatedAt;
  }
}
