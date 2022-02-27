import { Image } from './image';

type PersonConstructor = {
  firstName: string;
  githubUrl?: URL;
  image?: Image;
  lastName?: string;
  linkedinUrl?: URL;
  summary?: string;
  websiteUrl?: URL;
};

export class Person {
  static Ethan = new Person({
    firstName: 'Ethan',
    githubUrl: new URL('https://github.com/eglove'),
    image: Image.EthanAvatar,
    lastName: 'Glover',
    linkedinUrl: new URL('https://www.linkedin.com/in/ethan-glover/'),
    websiteUrl: new URL('https://www.ethang.dev/'),
  });

  public firstName: string;
  public githubUrl?: URL;
  public image?: Image;
  public lastName?: string;
  public linkedinUrl?: URL;
  public summary?: string;
  public websiteUrl?: URL;

  constructor(parameters: PersonConstructor) {
    this.firstName = parameters.firstName;
    this.githubUrl = parameters.githubUrl;
    this.lastName = parameters.lastName;
    this.image = parameters.image;
    this.linkedinUrl = parameters.linkedinUrl;
    this.summary = parameters.summary;
    this.websiteUrl = parameters.websiteUrl;
  }
}
