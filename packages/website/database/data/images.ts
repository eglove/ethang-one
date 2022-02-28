import { blogImage, Image, technologyLogoImage } from '../models/image';

export enum ImageName {
  anki = 'anki',
  bitcoin = 'bitcoin',
  ethanAvatar = 'ethanAvatar',
  expectationsVsReality = 'expectationsVsReality',
  laconiaBikeWeek = 'laconiaBikeWeek',
  microphone = 'microphone',
  moralFoundationsTheory = 'moralFoundationsTheory',
  paradox = 'paradox',
  politicsAsAVocation = 'politicsAsAVocation',
  portfolioRedesign = 'portfolioRedesign',
  powershellScript = 'powershellScript',
  openLetterLibertarians = 'openLetterLibertarians',
  react = 'react',
  reactJsx = 'reactJsx',
  realToughCandy = 'realToughCandy',
  recommendedCourses = 'recommendedCourses',
  redditChangeMyView = 'redditChangeMyView',
  supremeCourt = 'supremeCourt',
  tinyMce = 'tinyMce',
  typescript = 'typescript',
  wantToBelieve = 'wantToBelieve',
}

type ImageMetaData = Record<ImageName, Image>;

export const images: ImageMetaData = {
  [ImageName.anki]: new Image({
    altText: 'Anki flashcard software.',
    height: 1000,
    url: blogImage('anki.png'),
    width: 1000,
  }),
  [ImageName.bitcoin]: new Image({
    altText: 'Bitcoin logo',
    height: 64,
    url: technologyLogoImage('bitcoin.svg'),
    width: 64,
  }),
  [ImageName.ethanAvatar]: new Image({
    altText: 'Ethan Glover Avatar',
    height: 449,
    url: 'https://avatars.githubusercontent.com/u/3924176?v=4',
    width: 449,
  }),
  [ImageName.expectationsVsReality]: new Image({
    altText: 'Expectations vs Reality',
    height: 765,
    url: blogImage('expectations-reality.jpg'),
    width: 1000,
  }),
  [ImageName.laconiaBikeWeek]: new Image({
    altText: 'National Guard responds to Laconia Riots',
    height: 300,
    url: blogImage('laconia-bike-week.jpg'),
    width: 242,
  }),
  [ImageName.microphone]: new Image({
    altText: 'Microphone on stage',
    height: 427,
    url: blogImage('microphone.jpeg'),
    width: 640,
  }),
  [ImageName.moralFoundationsTheory]: new Image({
    altText: '3 Political Camps',
    height: 226,
    url: blogImage('moral-foundation-space.png'),
    width: 300,
  }),
  [ImageName.paradox]: new Image({
    altText: 'Paradox',
    height: 968,
    url: blogImage('paradox.png'),
    width: 1000,
  }),
  [ImageName.politicsAsAVocation]: new Image({
    altText: 'Politics as a Vocation - Max Weber',
    height: 238,
    url: blogImage('politics-as-a-vocation.png'),
    width: 641,
  }),
  [ImageName.portfolioRedesign]: new Image({
    altText:
      'Portfolio page showing large images in a masonry layout for each portfolio project.',
    height: 743,
    url: blogImage('portfolio-redesign.png'),
    width: 992,
  }),
  [ImageName.powershellScript]: new Image({
    altText: 'PowerShell script to download and run another script.',
    height: 150,
    url: blogImage('powershell-script.png'),
    width: 891,
  }),
  [ImageName.openLetterLibertarians]: new Image({
    altText: 'Open Letter to Libertarians',
    height: 917,
    url: blogImage('darryl-perry.png'),
    width: 1000,
  }),
  [ImageName.react]: new Image({
    altText: 'React Logo',
    height: 595,
    url: technologyLogoImage('react.svg'),
    width: 841,
  }),
  [ImageName.reactJsx]: new Image({
    altText: 'React JSX',
    height: 249,
    url: blogImage('on-hosting-static-pages.png'),
    width: 670,
  }),
  [ImageName.realToughCandy]: new Image({
    altText: 'RealToughCandy.io landing page.',
    height: 423,
    url: blogImage('real-tough-candy.png'),
    width: 946,
  }),
  [ImageName.recommendedCourses]: new Image({
    altText: 'List of recommended courses.',
    height: 324,
    url: blogImage('recommended-courses.png'),
    width: 931,
  }),
  [ImageName.redditChangeMyView]: new Image({
    altText: 'Winning arguments flow chart.',
    height: 500,
    url: blogImage('reddit-cmv.png'),
    width: 1000,
  }),
  [ImageName.supremeCourt]: new Image({
    altText: 'Supreme Court building',
    height: 776,
    url: blogImage('supreme-court.jpg'),
    width: 1000,
  }),
  [ImageName.tinyMce]: new Image({
    altText: 'Text editor showing this post.',
    height: 354,
    url: blogImage('tiny-mce.png'),
    width: 697,
  }),
  [ImageName.typescript]: new Image({
    altText: 'TypeScript',
    height: 2500,
    url: technologyLogoImage('typescript.svg'),
    width: 2500,
  }),
  [ImageName.wantToBelieve]: new Image({
    altText: 'I Want to Believe UFO poster',
    height: 300,
    url: blogImage('i-want-to-believe.png'),
    width: 240,
  }),
};
