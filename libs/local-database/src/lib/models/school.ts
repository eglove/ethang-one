import { Image } from './image';

type ISchool = {
  description: string;
  image: Image;
  name: string;
  url: URL;
};

export class School implements ISchool {
  description: string;
  image: Image;
  name: string;
  url: URL;

  constructor(parameters: ISchool) {
    this.description = parameters.description;
    this.image = parameters.image;
    this.name = parameters.name;
    this.url = parameters.url;
  }
}
