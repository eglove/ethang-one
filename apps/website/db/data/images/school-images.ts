import { Image } from '../../models/image';
import { getSchoolImage } from './util';

export const schoolImages = {
  academind: new Image({
    altText: 'Academind',
    height: 120,
    url: getSchoolImage('academind.png'),
    width: 93,
  }),
  algoExpert: new Image({
    altText: 'AlgoExpert',
    height: 400,
    url: getSchoolImage('algo-expert.svg'),
    width: 400,
  }),
  appBrewery: new Image({
    altText: 'App Brewery',
    height: 400,
    url: getSchoolImage('app-brewery.svg'),
    width: 400,
  }),
  dataCumulus: new Image({
    altText: 'DataCumulus',
    height: 102,
    url: getSchoolImage('data-cumulus.svg'),
    width: 400,
  }),
  egghead: new Image({
    altText: 'Egghead',
    height: 263,
    url: getSchoolImage('egghead.svg'),
    width: 263,
  }),
  kodyTheKoala: new Image({
    altText: 'Kody the Koala',
    height: 438,
    url: getSchoolImage('kody-the-koala.webp'),
    width: 563,
  }),
  levelUpTutorials: new Image({
    altText: 'Level Up Tutorials',
    height: 200,
    url: getSchoolImage('level-up-tutorials.png'),
    width: 200,
  }),
  problemio: new Image({
    altText: 'Problemio',
    height: 43,
    url: getSchoolImage('problemio.jpg'),
    width: 173,
  }),
  realToughCandy: new Image({
    altText: 'RealToughCandy',
    height: 400,
    url: getSchoolImage('real-tough-candy.svg'),
    width: 400,
  }),
  totalSeminars: new Image({
    altText: 'Total Seminars',
    height: 1080,
    url: getSchoolImage('total-seminars.png'),
    width: 947,
  }),
  udemy: new Image({
    altText: 'Udemy',
    height: 2500,
    url: getSchoolImage('udemy.svg'),
    width: 2500,
  }),
  wesBos: new Image({
    altText: 'Wes Bos',
    height: 318,
    url: getSchoolImage('wes-bos.svg'),
    width: 400,
  }),
  ztm: new Image({
    altText: 'Zero To Mastery',
    height: 404,
    url: getSchoolImage('ztm.svg'),
    width: 400,
  }),
};
