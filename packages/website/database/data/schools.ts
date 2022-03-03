import { School } from '../models/school';
import { images } from './images';

export enum SchoolName {
  udemy = 'Udemy',
}

type SchoolMetaData = Record<SchoolName, School>;

export const schools: SchoolMetaData = {
  [SchoolName.udemy]: new School({
    description: 'Udemy',
    image: images.udemy,
    name: 'Udemy',
    url: new URL('https://www.udemy.com/'),
  }),
};
