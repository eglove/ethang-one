import { Image } from './image';

export interface TechnologyLogoConstructor {
  isOneHomepage: boolean;
  image: Image;
}

export class TechnologyLogo {
  public isOnHomepage: boolean;
  public image: Image;

  constructor(parameters: TechnologyLogoConstructor) {
    this.isOnHomepage = parameters.isOneHomepage;
    this.image = parameters.image;
  }
}
