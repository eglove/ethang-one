import { Image } from './image';

type SchoolConstructor = {
  description: string;
  image: Image;
  name: string;
  url: URL;
};

export class School {
  public description: string;
  public image: Image;
  public name: string;
  public url: URL;

  constructor(parameters: SchoolConstructor) {
    this.description = parameters.description;
    this.image = parameters.image;
    this.name = parameters.name;
    this.url = parameters.url;
  }
}
