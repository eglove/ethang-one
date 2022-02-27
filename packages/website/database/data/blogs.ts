import { Blog } from '../models/blog';
import { images } from './images';
import { persons } from './persons';

export enum blogSlug {
  bitcoinFailure = 'is-bitcoin-a-failure',
  defendYourselfAgainstState = 'defend-yourself-against-the-state',
  firstPost = 'a-first-post',
  imageProblem = 'the-image-problem-and-its-solution',
  laconiaBikeWeek = 'laconia-shuts-down-bike-week-music-festival',
  pcBackup = 'pc-backup-in-two-lines',
  portfolioRedesign = 'portfolio-redesign',
  recommendedCourses = 'the-recommended-courses',
  rtcReview = 'realtoughcandy-io-review',
  sevenWayToWinAnArgumentOnline = '7-ways-to-win-an-argument-online',
  staticPages = 'on-hosting-static-pages',
  typescriptFormEnums = 'typescript-form-enums',
  talkAboutAnki = 'do-you-have-a-moment-to-talk-about-anki',
}

type BlogsMetaData = Record<blogSlug, Blog>;

export const blogs: BlogsMetaData = {
  [blogSlug.bitcoinFailure]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 03:50:37.100'),
    image: images.bitcoin,
    title: 'Is Bitcoin a Failure?',
    updated: new Date('2021-11-14 03:50:37.101'),
  }),
  [blogSlug.defendYourselfAgainstState]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 03:43:25.083'),
    image: images.supremeCourt,
    title: 'Defend Yourself Against the State',
    updated: new Date('2021-11-14 03:43:25.083'),
  }),
  [blogSlug.firstPost]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 00:48:54.841'),
    image: images.tinyMce,
    title: 'A First Post',
    updated: new Date('2021-11-14 00:48:54.841'),
  }),
  [blogSlug.imageProblem]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 04:02:42.540'),
    image: images.expectationsVsReality,
    title: 'The Image Problem and Its Solution',
    updated: new Date('2021-11-14 04:02:42.540'),
  }),
  [blogSlug.laconiaBikeWeek]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 03:32:07.237'),
    image: images.laconiaBikeWeek,
    title: 'Laconia Shuts Down Bike Week Music Festival',
    updated: new Date('2021-11-14 03:32:07.238'),
  }),
  [blogSlug.pcBackup]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 02:56:14.914'),
    image: images.powershellScript,
    title: 'PC Backup In Two Lines',
    updated: new Date('2021-11-14 02:56:14.915'),
  }),
  [blogSlug.portfolioRedesign]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 03:21:27.377'),
    image: images.portfolioRedesign,
    title: 'Portfolio Redesign',
    updated: new Date('2021-11-14 03:21:27.378'),
  }),
  [blogSlug.recommendedCourses]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 03:12:02.535'),
    image: images.recommendedCourses,
    title: 'The Recommended Courses',
    updated: new Date('2021-11-14 03:12:02.535'),
  }),
  [blogSlug.rtcReview]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 03:25:00.019'),
    image: images.realToughCandy,
    title: 'RealToughCandy.io Review',
    updated: new Date('2021-11-14 03:25:00.020'),
  }),
  [blogSlug.sevenWayToWinAnArgumentOnline]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 04:10:52.224'),
    image: images.redditChangeMyView,
    title: '7 Ways to Win An Argument Online',
    updated: new Date('2021-11-14 04:10:52.225'),
  }),
  [blogSlug.staticPages]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('Feb. 26, 2022 17:19'),
    image: images.reactJsx,
    title: 'On Hosting Static Pages',
    updated: new Date('Feb. 26, 2022 17:19'),
  }),
  [blogSlug.typescriptFormEnums]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 03:28:55.390'),
    image: images.typescript,
    title: 'TypeScript Form Enums',
    updated: new Date('2021-11-14 03:28:55.391'),
  }),
  [blogSlug.talkAboutAnki]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 02:46:21.627'),
    image: images.anki,
    title: 'Do You Have a Moment to Talk About Anki?',
    updated: new Date('2021-11-14 02:46:21.628'),
  }),
};
