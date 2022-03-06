import { Image } from './image';
import { Person } from './person';

type BlogConstructor = {
  authors: Person[];
  created: Date;
  image: Image;
  title: string;
  updated: Date;
};

export class Blog {
  public authors: Person[];
  public created: Date;
  public image: Image;
  public title: string;
  public updated: Date;

  constructor(parameters: BlogConstructor) {
    this.authors = parameters.authors;
    this.created = parameters.created;
    this.image = parameters.image;
    this.title = parameters.title;
    this.updated = parameters.updated;
  }
}
