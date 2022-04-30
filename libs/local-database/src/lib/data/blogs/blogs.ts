import { Blog } from '../../models/blog';
import { allImages } from '../images/all-images';
import { persons } from '../persons/persons';

export const blogsSortedByUpdate = (): Blog[] => {
  const blogKeys = Object.keys(blogs);
  const blogArray = blogKeys.map(key => {
    // @ts-expect-error Keys taken directly from Object.keys
    return blogs[key] as Blog;
  });
  blogArray.sort((a, b) => {
    return b.updatedAt.getTime() - a.updatedAt.getTime();
  });
  return blogArray;
};

export const blogs = {
  aFirstPost: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:44 PM'),
    description: 'First post of this blog.',
    featuredImage: allImages.blogImages.tinyMce,
    slug: 'a-first-post',
    title: 'A First Post',
    updatedAt: new Date('11/14/2021, 12:48 AM'),
  }),
  curingBiasWithCuriosity: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:38 PM'),
    description: 'How to cure bias with curiosity.',
    featuredImage: allImages.blogImages.iWantToBelieve,
    slug: 'curing-bias-with-curiosity',
    title: 'Curing Bias with Curiosity',
    updatedAt: new Date('11/26/2016, 04:25 AM'),
  }),
  defendYourselfAgainstTheState: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:42 PM'),
    description:
      'Learning about how the Supreme Court makes decisions on constitutional arguments.',
    featuredImage: allImages.blogImages.supremeCourt,
    slug: 'defend-yourself-against-the-state',
    title: 'Defend Yourself Against the State',
    updatedAt: new Date('06/26/2016, 03:43 AM'),
  }),
  doYouHaveAMomentToTalkAboutAnki: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:06 PM'),
    description:
      'Anki is a great piece of software, not everyone will pick it up.',
    featuredImage: allImages.blogImages.anki,
    slug: 'do-you-have-a-moment-to-talk-about-anki',
    title: 'Do You Have a Moment to Talk About Anki?',
    updatedAt: new Date('11/14/2021, 02:46 AM'),
  }),
  isBitcoinAFailure: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:35 PM'),
    description: 'Why Bitcoin has failed on its original promise.',
    featuredImage: allImages.blogImages.bitcoin,
    slug: 'is-bitcoin-a-failure',
    title: 'Is Bitcoin a Failure?',
    updatedAt: new Date('07/21/2016, 03:30 PM'),
  }),
  isDarrylPerryMakingIdeologicalProgress: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:41 PM'),
    description: "Is Darryl Perry's rant progress, or more of the same?",
    featuredImage: allImages.blogImages.darrylPerry,
    slug: 'is-darryl-perry-making-ideological-progress',
    title: 'Is Darryl Perry Making Ideological Progress?',
    updatedAt: new Date('11/27/2016, 04:44 AM'),
  }),
  laconiaShutsDownBikeWeekMusicFestival: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:48 PM'),
    description: "I went to bike week and Laconia, here's what happened.",
    featuredImage: allImages.blogImages.laconiaBikeWeek,
    slug: 'laconia-shuts-down-bike-week-music-festival',
    title: 'Laconia Shuts Down Bike Week Music Festival',
    updatedAt: new Date('06/19/2016, 03:32 AM'),
  }),
  lessonsLearnedFromRewritingAReactApp: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:49 PM'),
    description: 'What I learned when rebuilding a React app from scratch.',
    featuredImage: allImages.technologyImages.react,
    slug: 'lessons-learned-from-rewriting-a-react-app',
    title: 'Lessons Learned From Rewriting A React App',
    updatedAt: new Date('11/14/2021, 04:59 AM'),
  }),
  makingGraphqlBetter: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:50 PM'),
    description: 'How to make Prisma and GraphQL play nicely together.',
    featuredImage: allImages.technologyImages.graphql,
    slug: 'making-graphql-better',
    title: 'Making Prisma/GraphQL Better',
    updatedAt: new Date('03/05/2022, 10:24 AM'),
  }),
  onHostingStaticPages: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:05 PM'),
    description: "How I've decided to host my static blog.",
    featuredImage: allImages.blogImages.onHostingStaticPages,
    slug: 'on-hosting-static-pages',
    title: 'On Hosting Static Pages',
    updatedAt: new Date('02/26/2022, 05:19 PM'),
  }),
  paradoxacalismAsAPoliticalBelief: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:51 PM'),
    description: 'My political belief paradoxicalism and how I got here.',
    featuredImage: allImages.blogImages.paradox,
    slug: 'paradoxicalism-as-a-political-belief',
    title: 'Paradoxicalism as a Political Belief',
    updatedAt: new Date('11/29/2016, 04:38 AM'),
  }),
  pcBackupInTwoLines: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:52 PM'),
    description: 'How I back up my entire PC with two lines of code.',
    featuredImage: allImages.blogImages.powershellScript,
    slug: 'pc-backup-in-two-lines',
    title: 'PC Backup In Two Lines',
    updatedAt: new Date('11/14/2021, 02:56 AM'),
  }),
  persuasionThroughMoralArguments: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:53 PM'),
    description: 'On persuading people with moral arguments.',
    featuredImage: allImages.blogImages.moralFoundationSpace,
    slug: 'persuasion-through-moral-arguments',
    title: 'Persuasion Through Moral Arguments',
    updatedAt: new Date('11/06/2016, 04:17 AM'),
  }),
  portfolioRedesign: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:54 PM'),
    description: "I redesigned my portfolio, here's how it's looking now.",
    featuredImage: allImages.blogImages.portfolioRedesign,
    slug: 'portfolio-redesign',
    title: 'Portfolio Redesign',
    updatedAt: new Date('11/14/2021, 03:21 AM'),
  }),
  programaticallyValidateEnvVariables: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:07 PM'),
    description:
      'How to programmatically validate environment variables in your Node project.',
    featuredImage: allImages.blogImages.missingKeys,
    slug: 'programmatically-validate-env-variables',
    title: 'Programmatically Validate Environment Variables',
    updatedAt: new Date('12/04/2021, 01:16 AM'),
  }),
  realToughCandyIoReview: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:02 PM'),
    description: "My review of Real Tough Candy's new course platform.",
    featuredImage: allImages.blogImages.realToughCandy,
    slug: 'realtoughcandy-io-review',
    title: 'RealToughCandy.io Review',
    updatedAt: new Date('11/14/2021, 03:25 AM'),
  }),
  recentCourseUpdates: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/31/2022, 4:47 PM'),
    description:
      'A shortlist of recent changes to the recommended development courses list. What was added, what was removed, and what has changed positions.',
    featuredImage: allImages.blogImages.theRecommendedCourses,
    slug: 'recent-course-updates',
    title: 'Recent Course Updates',
    updatedAt: new Date('03/31/2022, 04:47 PM'),
  }),
  reviewAccessibilityForEveryone: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/12/2022, 8:12 PM'),
    description:
      "Amy Kapernick's Accessibility For Everyone is a much-needed overview and accessibility basics that many courses forget to cover.",
    featuredImage: allImages.blogImages.accessibilityForEveryone,
    slug: 'review-accessibility-for-everyone',
    title: 'Review: Accessibility For Everyone',
    updatedAt: new Date('03/12/2022, 08:11 PM'),
  }),
  reviewCodeAutomationWithGithub: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/13/2022, 10:44 AM'),
    description:
      "Review of Brian Douglas' course on automating code with GitHub apps and actions.",
    featuredImage: allImages.blogImages.githubAutomation,
    slug: 'review-code-automation-with-github',
    title: 'Review: Code Automation With GitHub',
    updatedAt: new Date('03/13/2022, 10:44 AM'),
  }),
  reviewCompleteJuniorSenior: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:55 PM'),
    description:
      "My review of Zero to Mastery's Complete Junior to Senior Web Developer Bootcamp",
    featuredImage: allImages.blogImages.completeJuniorSenior,
    slug: 'review-complete-junior-senior',
    title: 'Review: Complete Junior to Senior Web Developer Roadmap',
    updatedAt: new Date('12/05/2021, 05:19 AM'),
  }),
  reviewCompleteReactDeveloper: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('4/16/2022, 11:32 AM'),
    description:
      "Yihua Zhang's Complete React Developer is back from the dead in the 2022 update with proper coverage of Hooks, Context, Redux, GraphQL, Jest, and more.",
    featuredImage: allImages.blogImages.completeReactDeveloper,
    slug: 'review-complete-react-developer',
    title: 'Review: Complete React Developer',
    updatedAt: new Date('04/16/2022, 12:00 AM'),
  }),
  reviewGitGithubBootcamp: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:57 PM'),
    description: "My review of Colt Steele's Git & GitHub bootcamp.",
    featuredImage: allImages.blogImages.gitGithubBootcamp,
    slug: 'review-git-github-bootcamp',
    title: 'Review: Git & GitHub Bootcamp',
    updatedAt: new Date('12/01/2021, 03:00 AM'),
  }),
  reviewGoProgrammingCompleteGuide: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:57 PM'),
    description:
      "Zero To Mastery's GoLang course is unfortunately another miss. Powerpoints, boring delivery, and a lack of ability to bring all the information together.",
    featuredImage: allImages.blogImages.goProgramming,
    slug: 'review-go-programming-complete-guide',
    title: "Review: Go Programming: The Complete Developer's Guide",
    updatedAt: new Date('03/06/2022, 02:39 PM'),
  }),
  reviewLearningToLearn: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:00 PM'),
    description: "My review of Zero to Mastery's Learning to Learn",
    featuredImage: allImages.blogImages.learningToLearn,
    slug: 'review-learning-to-learn',
    title: 'Review: Learning to Learn',
    updatedAt: new Date('11/20/2021, 09:04 PM'),
  }),
  reviewLinuxCommandLineBootcamp: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/12/2022, 5:25 PM'),
    description:
      "Colt Steele's Linux Command Line Bootcamp is the best choice for learning the Linux command line. But the skill may not be as important as you think.",
    featuredImage: allImages.blogImages.commandLineBootcamp,
    slug: 'review-linux-command-line-bootcamp',
    title: 'Review: Linux Command Line Bootcamp',
    updatedAt: new Date('03/12/2022, 05:22 PM'),
  }),
  reviewMikeMeyersAPlus: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/24/2022, 11:06 AM'),
    description:
      'A review for developers of the CompTIA A+ Certification Udemy course by Total Seminars and Miker Meyers.',
    featuredImage: allImages.blogImages.comptiaAPlus,
    slug: 'review-mike-meyers-a-plus',
    title: 'Review: Total Seminars A+',
    updatedAt: new Date('03/24/2022, 11:05 AM'),
  }),
  reviewPostmanCompleteGuide: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:01 PM'),
    description: 'My review of Postman the Complete Guide Udemy course.',
    featuredImage: allImages.blogImages.postmanCompleteGuide,
    slug: 'review-postman-complete-guide',
    title: 'Review: Postman The Complete Guide',
    updatedAt: new Date('12/05/2021, 02:04 AM'),
  }),
  reviewSeoTrainingMasterclass: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/25/2022, 9:01 PM'),
    description:
      "A review of Alex Genadinik's SEO Masterclass. Should web developers take this course or focus solely on server-side rendering as their SEO strategy?",
    featuredImage: allImages.blogImages.seoTrainingMasterclass,
    slug: 'review-seo-training-masterclass',
    title: 'Review: SEO Training Masterclass',
    updatedAt: new Date('03/25/2022, 09:00 PM'),
  }),
  reviewTestingWithCypress: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/13/2022, 2:34 PM'),
    description:
      "Scott Tolinski's course on Cypress is a great overview of the features Cypress provides.",
    featuredImage: allImages.blogImages.testingWithCypress,
    slug: 'review-testing-with-cypress',
    title: 'Review: Testing With Cypress',
    updatedAt: new Date('03/13/2022, 01:34 PM'),
  }),
  reviewWebDeveloperBootcamp: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:08 PM'),
    description: "My review of Colt Steele's Web Developer Bootcamp.",
    featuredImage: allImages.blogImages.webDeveloperBootcamp,
    slug: 'review-web-developer-bootcamp',
    title: 'Review: Web Developer Bootcamp',
    updatedAt: new Date('12/01/2021, 01:52 AM'),
  }),
  reviewZtmCompleteWebDeveloper: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:56 PM'),
    description:
      "My review of Zero to Mastery's Complete Web Developer course.",
    featuredImage: allImages.blogImages.completeWebDeveloper,
    slug: 'review-ztm-complete-web-developer',
    title: 'Review: ZTM Complete Web Developer',
    updatedAt: new Date('11/22/2021, 03:13 AM'),
  }),
  sevenWayToWinAnArgumentOnline: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:03 PM'),
    description: '7 ways to win an argument on the internet.',
    featuredImage: allImages.blogImages.redditCmv,
    slug: '7-ways-to-win-an-argument-online',
    title: '7 Ways to Win An Argument Online',
    updatedAt: new Date('10/12/2016, 04:10 AM'),
  }),
  speechIsMorePersuasiveThanText: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:04 PM'),
    description: 'Studies show speech is more persuasive than text.',
    featuredImage: allImages.blogImages.microphone,
    slug: 'speech-is-more-persuasive-than-text',
    title: 'Speech Is More Persuasive Than Text',
    updatedAt: new Date('11/28/2016, 04:49 AM'),
  }),
  theEpidemicOfPassableArguments: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:43 PM'),
    description: 'Politics has an epidemic of passable arguments.',
    featuredImage: allImages.blogImages.politicsAsAVocation,
    slug: 'the-epidemic-of-passable-arguments',
    title: 'The Epidemic of Passable Arguments',
    updatedAt: new Date('01/15/2017, 04:29 AM'),
  }),
  theImageProblemAndItsSolution: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:47 PM'),
    description: "Libertarianism's image problem and it's solution.",
    featuredImage: allImages.blogImages.expectationsReality,
    slug: 'the-image-problem-and-its-solution',
    title: 'The Image Problem and Its Solution',
    updatedAt: new Date('08/04/2016, 04:02 AM'),
  }),
  theRecommendedCourses: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 2:54 PM'),
    description:
      'How to use my course curriculum to learn everything you need to know for a career in web development. From the basics to building apps, to project management.',
    featuredImage: allImages.blogImages.recommendedCourses,
    slug: 'the-recommended-courses',
    title: 'The Recommended Courses',
    updatedAt: new Date('04/30/2022, 09:58 AM'),
  }),
  typescriptFormEnums: new Blog({
    authors: [persons.ethanGlover],
    createdAt: new Date('3/11/2022, 3:06 PM'),
    description: 'Missing types for Forms using TypeScript.',
    featuredImage: allImages.technologyImages.typescript,
    slug: 'typescript-form-enums',
    title: 'TypeScript Form Enums',
    updatedAt: new Date('11/14/2021, 03:28 AM'),
  }),
};
