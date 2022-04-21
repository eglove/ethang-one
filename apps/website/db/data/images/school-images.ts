import { Image } from '../../models/image';
import { getBlogImage } from './util';

export const schoolImages = {
  academind: new Image({
    altText: 'Academind',
    height: 120,
    url: getBlogImage('academind.png'),
    width: 93,
  }),
  algoExpert: new Image({
    altText: 'AlgoExpert',
    height: 400,
    url: getBlogImage('algo-expert.svg'),
    width: 400,
  }),
  appBrewery: new Image({
    altText: 'App Brewery',
    height: 400,
    url: getBlogImage('app-brewery.svg'),
    width: 400,
  }),
  dataCumulus: new Image({
    altText: 'DataCumulus',
    height: 102,
    url: getBlogImage('data-cumulus.svg'),
    width: 400,
  }),
  egghead: new Image({
    altText: 'Egghead',
    height: 263,
    url: getBlogImage('egghead.svg'),
    width: 263,
  }),
  kodyTheKoala: new Image({
    altText: 'Kody the Koala',
    height: 438,
    url: getBlogImage('kody-the-koala.webp'),
    width: 563,
  }),
  levelUpTutorials: new Image({
    altText: 'Level Up Tutorials',
    height: 200,
    url: getBlogImage('level-up-tutorials.png'),
    width: 200,
  }),
  problemio: new Image({
    altText: 'Problemio',
    height: 43,
    url: getBlogImage('problemio.jpg'),
    width: 173,
  }),
  realToughCandy: new Image({
    altText: 'RealToughCandy',
    height: 400,
    url: getBlogImage('real-tough-candy.svg'),
    width: 400,
  }),
  totalSeminars: new Image({
    altText: 'Total Seminars',
    height: 1080,
    url: getBlogImage('total-seminars.png'),
    width: 947,
  }),
  udemy: new Image({
    altText: 'Udemy',
    height: 2500,
    url: getBlogImage('udemy.svg'),
    width: 2500,
  }),
  wesBos: new Image({
    altText: 'Wes Bos',
    height: 318,
    url: getBlogImage('wes-bos.svg'),
    width: 400,
  }),
  ztm: new Image({
    altText: 'Zero To Mastery',
    height: 404,
    url: getBlogImage('ztm.svg'),
    width: 400,
  }),
};
