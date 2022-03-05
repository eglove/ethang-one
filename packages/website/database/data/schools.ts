import { School } from '../models/school';
import { images } from './images/images';

export enum SchoolName {
  academind = 'academind',
  algoExpert = 'algoExpert',
  apolloOdyssey = 'apolloOdyssey',
  appBrewery = 'appBrewery',
  dataCumulus = 'dataCumulus',
  egghead = 'egghead',
  jetbrains = 'jetbrains',
  kentDodds = 'kentDodds',
  wesBos = 'wesBos',
  zeroToMastery = 'zeroToMastery',
  udemy = 'udemy',
}

type SchoolMetaData = Record<SchoolName, School>;

export const schools: SchoolMetaData = {
  [SchoolName.academind]: new School({
    description: 'Academind',
    image: images.academind,
    name: 'Academind',
    url: new URL('https://academind.com/'),
  }),
  [SchoolName.algoExpert]: new School({
    description: 'AlgoExpert',
    image: images.algoExpert,
    name: 'AlgoExpert',
    url: new URL('https://www.algoexpert.io/product'),
  }),
  [SchoolName.apolloOdyssey]: new School({
    description: 'Apollo Odyssey',
    image: images.apollo,
    name: 'Apollo Odyssey',
    url: new URL('https://odyssey.apollographql.com/'),
  }),
  [SchoolName.appBrewery]: new School({
    description: 'App Brewery',
    image: images.appBrewery,
    name: 'App Brewery',
    url: new URL('https://www.appbrewery.co/'),
  }),
  [SchoolName.dataCumulus]: new School({
    description: 'DataCumulus',
    image: images.dataCumulus,
    name: 'DataCumulus',
    url: new URL('https://courses.datacumulus.com/'),
  }),
  [SchoolName.egghead]: new School({
    description: 'Egghead.io',
    image: images.egghead,
    name: 'Egghead.io',
    url: new URL('https://egghead.io/'),
  }),
  [SchoolName.jetbrains]: new School({
    description: 'JetBrains Academy',
    image: images.jetbrains,
    name: 'JetBrains Academy',
    url: new URL('https://www.jetbrains.com/academy/'),
  }),
  [SchoolName.kentDodds]: new School({
    description: 'Kent C. Dodds',
    image: images.kodyKoala,
    name: 'Kent C. Dodds',
    url: new URL('https://kentcdodds.com/'),
  }),
  [SchoolName.udemy]: new School({
    description: 'Udemy',
    image: images.udemy,
    name: 'Udemy',
    url: new URL('https://www.udemy.com/'),
  }),
  [SchoolName.wesBos]: new School({
    description: 'Wes Bos',
    image: images.wesBos,
    name: 'Wes Bos',
    url: new URL('https://wesbos.com/courses'),
  }),
  [SchoolName.zeroToMastery]: new School({
    description: 'Zero To Mastery',
    image: images.ztm,
    name: 'Zero To Mastery',
    url: new URL('https://zerotomastery.io/'),
  }),
};
