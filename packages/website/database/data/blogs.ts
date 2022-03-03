import { Blog } from '../models/blog';
import { images } from './images';
import { persons } from './persons';

export enum blogSlug {
  bitcoinFailure = 'is-bitcoin-a-failure',
  curingBias = 'curing-bias-with-curiosity',
  darrylPerry = 'is-darryl-perry-making-ideological-progress',
  defendYourselfAgainstState = 'defend-yourself-against-the-state',
  epidemicPassableArguments = 'the-epidemic-of-passable-arguments',
  firstPost = 'a-first-post',
  imageProblem = 'the-image-problem-and-its-solution',
  laconiaBikeWeek = 'laconia-shuts-down-bike-week-music-festival',
  lessonsLearnedRebuildingReact = 'lessons-learned-from-rewriting-a-react-app',
  paradoxicalism = 'paradoxicalism-as-a-political-belief',
  pcBackup = 'pc-backup-in-two-lines',
  persuasionMoralArguments = 'persuasion-through-moral-arguments',
  portfolioRedesign = 'portfolio-redesign',
  recommendedCourses = 'the-recommended-courses',
  reviewCompleteJuniorSenior = 'review-complete-junior-senior',
  reviewCompleteWebDeveloper = 'review-ztm-complete-web-developer',
  reviewGitGithubBootcamp = 'review-git-github-bootcamp',
  reviewLearningToLearn = 'review-learning-to-learn',
  reviewPostmanCompleteGuide = 'review-postman-complete-guide',
  rtcReview = 'realtoughcandy-io-review',
  sevenWayToWinAnArgumentOnline = '7-ways-to-win-an-argument-online',
  speechPersuasive = 'speech-is-more-persuasive-than-text',
  staticPages = 'on-hosting-static-pages',
  typescriptFormEnums = 'typescript-form-enums',
  talkAboutAnki = 'do-you-have-a-moment-to-talk-about-anki',
  validEnvironmentVariables = 'programmatically-validate-env-variables',
  webDeveloperBootcamp = 'review-web-developer-bootcamp',
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
  [blogSlug.darrylPerry]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 04:44:56.361'),
    image: images.openLetterLibertarians,
    title: 'Is Darryl Perry Making Ideological Progress?',
    updated: new Date('2021-11-14 04:44:56.361'),
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
  [blogSlug.lessonsLearnedRebuildingReact]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 04:59:37.805'),
    image: images.react,
    title: 'Lessons Learned From Rewriting A React App',
    updated: new Date('2021-11-14 04:59:37.806'),
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
  [blogSlug.reviewCompleteJuniorSenior]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-12-05 05:19:55.503'),
    image: images.completeJuniorSenior,
    title: 'Review: Complete Junior to Senior Web Developer Roadmap',
    updated: new Date('2021-12-05 05:19:55.504'),
  }),
  [blogSlug.reviewCompleteWebDeveloper]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-22 03:13:58.328'),
    image: images.completeWebDeveloper,
    title: 'Review: ZTM Complete Web Developer',
    updated: new Date('2021-11-22 03:13:58.333'),
  }),
  [blogSlug.reviewGitGithubBootcamp]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-12-01 03:00:42.424'),
    image: images.gitBootcamp,
    title: 'Review: Git & GitHub Bootcamp',
    updated: new Date('2021-12-01 03:00:42.434'),
  }),
  [blogSlug.reviewLearningToLearn]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-20 21:04:27.830'),
    image: images.learningToLearn,
    title: 'Review: Learning to Learn',
    updated: new Date('2021-11-20 21:04:27.832'),
  }),
  [blogSlug.reviewPostmanCompleteGuide]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-12-05 02:04:34.427'),
    image: images.postmanCompleteGuide,
    title: 'Review: Postman The Complete Guide',
    updated: new Date('2021-12-05 02:04:34.436'),
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
  [blogSlug.speechPersuasive]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-11-14 04:49:36.314'),
    image: images.microphone,
    title: 'Speech Is More Persuasive Than Text',
    updated: new Date('2021-11-14 04:49:36.314'),
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
  [blogSlug.validEnvironmentVariables]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-12-04 01:16:13.315'),
    image: images.missingKeys,
    title: 'Programmatically Validate Environment Variables',
    updated: new Date('2021-12-04 01:16:13.317'),
  }),
  [blogSlug.webDeveloperBootcamp]: new Blog({
    authors: [persons.ethanGlover],
    created: new Date('2021-12-01 01:52:14.571'),
    image: images.webDeveloperBootcamp,
    title: 'Review: Web Developer Bootcamp',
    updated: new Date('2021-12-01 01:52:14.572'),
  }),
};