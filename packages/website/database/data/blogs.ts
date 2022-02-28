import { Blog } from '../models/blog';
import { images } from './images';
import { persons } from './persons';

export enum blogSlug {
  bitcoinFailure = 'is-bitcoin-a-failure',
  curingBias = 'curing-bias-with-curiosity',
  defendYourselfAgainstState = 'defend-yourself-against-the-state',
  epidemicPassableArguments = 'the-epidemic-of-passable-arguments',
  firstPost = 'a-first-post',
  imageProblem = 'the-image-problem-and-its-solution',
  laconiaBikeWeek = 'laconia-shuts-down-bike-week-music-festival',
  paradoxicalism = 'paradoxicalism-as-a-political-belief',
  pcBackup = 'pc-backup-in-two-lines',
  persuasionMoralArguments = 'persuasion-through-moral-arguments',
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
  [blogSlug.curingBias]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 04:25:17.325'),
    image: images.wantToBelieve,
    title: 'Curing Bias with Curiosity',
    updated: new Date('2021-11-14 04:25:17.326'),
  }),
  [blogSlug.defendYourselfAgainstState]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 03:43:25.083'),
    image: images.supremeCourt,
    title: 'Defend Yourself Against the State',
    updated: new Date('2021-11-14 03:43:25.083'),
  }),
  [blogSlug.epidemicPassableArguments]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 04:29:53.742'),
    image: images.politicsAsAVocation,
    title: 'The Epidemic of Passable Arguments',
    updated: new Date('2021-11-14 04:29:53.743'),
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
  [blogSlug.paradoxicalism]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 04:38:20.681'),
    image: images.paradox,
    title: 'Paradoxicalism as a Political Belief',
    updated: new Date('2021-11-14 04:38:20.681'),
  }),
  [blogSlug.pcBackup]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 02:56:14.914'),
    image: images.powershellScript,
    title: 'PC Backup In Two Lines',
    updated: new Date('2021-11-14 02:56:14.915'),
  }),
  [blogSlug.persuasionMoralArguments]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 04:17:08.801'),
    image: images.moralFoundationsTheory,
    title: 'Persuasion Through Moral Arguments',
    updated: new Date('2021-11-14 04:17:08.802'),
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
