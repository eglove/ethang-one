import { Person } from '../models/person';
import { images } from './images';

export enum PersonName {
  ethanGlover = 'ethanGlover',
}

type PersonMetaData = Record<PersonName, Person>;

export const persons: PersonMetaData = {
  [PersonName.ethanGlover]: new Person({
    firstName: 'Ethan',
    githubUrl: new URL('https://github.com/eglove'),
    image: images.ethanAvatar,
    lastName: 'Glover',
    linkedinUrl: new URL('https://www.linkedin.com/in/ethan-glover/'),
    websiteUrl: new URL('https://www.ethang.dev/'),
  }),
};
