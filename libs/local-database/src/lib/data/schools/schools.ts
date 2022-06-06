import { School } from '../../models/school';
import { allImages } from '../images/all-images';

export const schools = {
  academind: new School({
    description: 'Academind',
    image: allImages.schoolImages.academind,
    name: 'Academind',
    url: new URL('https://academind.com/'),
  }),
  algoExpert: new School({
    description: 'AlgoExpert',
    image: allImages.schoolImages.algoExpert,
    name: 'AlgoExpert',
    url: new URL('https://www.algoexpert.io/product/'),
  }),
  apolloOdyssey: new School({
    description: 'Apollo Odyssey',
    image: allImages.technologyImages.apollo,
    name: 'Apollo Odyssey',
    url: new URL('https://odyssey.apollographql.com/'),
  }),
  appBrewery: new School({
    description: 'App Brewery',
    image: allImages.schoolImages.appBrewery,
    name: 'App Brewery',
    url: new URL('https://www.appbrewery.co//'),
  }),
  dataCumulus: new School({
    description: 'DataCumulus',
    image: allImages.schoolImages.dataCumulus,
    name: 'DataCumulus',
    url: new URL('https://courses.datacumulus.com/'),
  }),
  egghead: new School({
    description: 'Egghead.io',
    image: allImages.schoolImages.egghead,
    name: 'Egghead.io',
    url: new URL('https://egghead.io/'),
  }),
  jetbrainsAcademy: new School({
    description: 'JetBrains Academy',
    image: allImages.technologyImages.jetbrains,
    name: 'JetBrains Academy',
    url: new URL('https://www.jetbrains.com/academy/'),
  }),
  joshComeau: new School({
    description: 'Josh Comeau',
    image: allImages.schoolImages.joshComeau,
    name: 'Josh Comeau',
    url: new URL('https://courses.joshwcomeau.com/'),
  }),
  kentCDodds: new School({
    description: 'Kent C. Dodds',
    image: allImages.schoolImages.kodyTheKoala,
    name: 'Kent C. Dodds',
    url: new URL('https://kentcdodds.com/'),
  }),
  levelUpTutorials: new School({
    description: 'Level Up Tutorials',
    image: allImages.schoolImages.levelUpTutorials,
    name: 'Level Up Tutorials',
    url: new URL('https://leveluptutorials.com/'),
  }),
  problemio: new School({
    description: 'Problemio',
    image: allImages.schoolImages.problemio,
    name: 'Problemio',
    url: new URL('https://www.problemio.com/'),
  }),
  totalSeminars: new School({
    description: 'Total Seminars',
    image: allImages.schoolImages.totalSeminars,
    name: 'Total Seminars',
    url: new URL('https://www.totalsem.com/'),
  }),
  udemy: new School({
    description: 'Udemy',
    image: allImages.schoolImages.udemy,
    name: 'Udemy',
    url: new URL('https://www.udemy.com/'),
  }),
  wesBos: new School({
    description: 'Wes Bos',
    image: allImages.schoolImages.wesBos,
    name: 'Wes Bos',
    url: new URL('https://wesbos.com/courses'),
  }),
  youtube: new School({
    description: 'YouTube',
    image: allImages.schoolImages.youtube,
    name: 'YouTube',
    url: new URL('https://www.youtube.com/'),
  }),
  zeroToMastery: new School({
    description: 'Zero To Mastery',
    image: allImages.schoolImages.ztm,
    name: 'Zero To Mastery',
    url: new URL('https://zerotomastery.io/'),
  }),
};
