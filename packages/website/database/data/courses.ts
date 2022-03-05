import { Course } from '../models/course';
import { persons } from './persons';
import { schools } from './schools';

export enum CourseTitle {
  learningToLearn = 'learningToLearn',
  webDeveloperBootcamp = 'webDeveloperBootcamp',
  gitGithubBootcamp = 'gitGithubBootcamp',
  postmanComplete = 'postmanComplete',
  javascriptWebProjects = 'javascriptWebProjects',
  completeJuniorSenior = 'completeJuniorSenior',
  masterCodingInterviewDataStructuresAlgorithms = 'masterCodingInterviewDataStructuresAlgorithms',
  javascriptAdvanced = 'javascriptAdvanced',
  masterCodingInterviewFaang = 'masterCodingInterviewFaang',
  completeNode = 'completeNode',
  epicReact = 'epicReact',
  advancedReact = 'advancedReact',
  apolloOdyssey = 'apolloOdyssey',
  completeWebMobile = 'completeWebMobile',
  completeSql = 'completeSql',
  typescriptComplete = 'typescriptComplete',
  scaleReactNx = 'scaleReactNx',
  webComponentsStencil = 'webComponentsStencil',
  dockerKubernetes = 'dockerKubernetes',
  completeEthicalHacking = 'completeEthicalHacking',
  webSecurityBugBounty = 'webSecurityBugBounty',
}

type CourseMetaData = Record<CourseTitle, Course>;

export const courses: CourseMetaData = {
  [CourseTitle.learningToLearn]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL(
          'https://academy.zerotomastery.io/p/learning-to-learn-efficient-learning-zero-to-mastery-blueprint'
        ),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/'
        ),
      },
    ],
    duration: 5.317,
    instructors: [persons.andreiNeagoie],
    rating: 5,
    ratingUrl: new URL('https://www.ethang.dev/blog/review-learning-to-learn'),
    school: schools.zeroToMastery,
    title: 'Learning to Learn',
    yearUpdated: 2022,
  }),
  [CourseTitle.webDeveloperBootcamp]: new Course({
    courseUrls: [
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/the-web-developer-bootcamp/'
        ),
      },
    ],
    duration: 63.63,
    instructors: [persons.coltSteele],
    rating: 5,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-web-developer-bootcamp'
    ),
    school: schools.udemy,
    title: 'Web Developer Bootcamp',
    yearUpdated: 2022,
  }),
  [CourseTitle.gitGithubBootcamp]: new Course({
    courseUrls: [
      {
        school: schools.udemy,
        url: new URL('https://www.udemy.com/course/git-and-github-bootcamp/'),
      },
    ],
    duration: 17.03,
    instructors: [persons.coltSteele],
    rating: 5,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-git-github-bootcamp'
    ),
    school: schools.udemy,
    title: 'Git & Github Bootcamp',
    yearUpdated: 2021,
  }),
  [CourseTitle.postmanComplete]: new Course({
    courseUrls: [
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/postman-the-complete-guide/?couponCode=2021-11-1'
        ),
      },
    ],
    duration: 13.2,
    instructors: [persons.valentinDespa],
    rating: 4,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-postman-complete-guide'
    ),
    school: schools.udemy,
    title: 'Postman: The Complete Guide',
    yearUpdated: 2022,
  }),
  [CourseTitle.javascriptWebProjects]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL('https://academy.zerotomastery.io/p/javascript-projects'),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/'
        ),
      },
    ],
    duration: 32.78,
    instructors: [persons.jacintoWong],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'JavaScript Web Projects',
    yearUpdated: 2022,
  }),
  [CourseTitle.completeJuniorSenior]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL(
          'https://academy.zerotomastery.io/p/the-complete-junior-to-senior-web-developer-roadmap'
        ),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/'
        ),
      },
    ],
    duration: 36.85,
    instructors: [persons.andreiNeagoie],
    rating: 4,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-complete-junior-senior'
    ),
    school: schools.zeroToMastery,
    title: 'Complete Junior to Senior Web Developer',
    yearUpdated: 2022,
  }),
  [CourseTitle.masterCodingInterviewDataStructuresAlgorithms]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL(
          'https://academy.zerotomastery.io/p/master-the-coding-interview-data-structures-algorithms'
        ),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/'
        ),
      },
    ],
    duration: 19.57,
    instructors: [persons.andreiNeagoie],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'Master the Coding Interview: Data Structures + Algorithms',
    yearUpdated: 2022,
  }),
  [CourseTitle.javascriptAdvanced]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL(
          'https://academy.zerotomastery.io/p/advanced-javascript-concepts'
        ),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/advanced-javascript-concepts/'
        ),
      },
    ],
    duration: 25.28,
    instructors: [persons.andreiNeagoie],
    rating: 5,
    school: schools.zeroToMastery,
    title: `JavaScript${':'} The Advanced Concepts`,
    yearUpdated: 2022,
  }),
  [CourseTitle.masterCodingInterviewFaang]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL(
          'https://academy.zerotomastery.io/p/master-the-coding-interview-faang-interview-prep'
        ),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/'
        ),
      },
    ],
    duration: 36.62,
    instructors: [persons.yihuaZhang],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'Master the Coding Interview: Big Tech (FAANG) Interviews',
    yearUpdated: 2022,
  }),
  [CourseTitle.completeNode]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL('https://academy.zerotomastery.io/p/learn-node-js'),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/'
        ),
      },
    ],
    duration: 46,
    instructors: [persons.adamOdziemkowski],
    rating: 3,
    school: schools.zeroToMastery,
    title: 'Complete Node.js Developer',
    yearUpdated: 2022,
  }),
  [CourseTitle.epicReact]: new Course({
    courseUrls: [
      {
        school: schools.kentDodds,
        url: new URL('https://epicreact.dev/'),
      },
    ],
    duration: 0,
    instructors: [persons.kentDodds],
    rating: 5,
    school: schools.kentDodds,
    title: 'Epic React',
    yearUpdated: 2022,
  }),
  [CourseTitle.advancedReact]: new Course({
    courseUrls: [
      {
        school: schools.wesBos,
        url: new URL('https://advancedreact.com/'),
      },
    ],
    duration: 18,
    instructors: [persons.wesBos],
    rating: 5,
    school: schools.wesBos,
    title: 'Fullstack Advanced React & GraphQL',
    yearUpdated: 2022,
  }),
  [CourseTitle.apolloOdyssey]: new Course({
    courseUrls: [
      {
        school: schools.apolloOdyssey,
        url: new URL('https://odyssey.apollographql.com/'),
      },
    ],
    duration: 2.767,
    rating: 4,
    school: schools.apolloOdyssey,
    title: 'Apollo Odyssey',
    yearUpdated: 2022,
  }),
  [CourseTitle.completeWebMobile]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL(
          'https://academy.zerotomastery.io/p/complete-web-and-mobile-designer'
        ),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/complete-web-designer-mobile-designer-zero-to-mastery/'
        ),
      },
    ],
    duration: 26.15,
    instructors: [persons.danielSchifano],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'Complete Web & Mobile Designer',
    yearUpdated: 2022,
  }),
  [CourseTitle.completeSql]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL(
          'https://academy.zerotomastery.io/p/complete-sql-database-bootcamp-zero-to-mastery'
        ),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/'
        ),
      },
    ],
    duration: 24.27,
    instructors: [persons.moBinni],
    rating: 4,
    school: schools.zeroToMastery,
    title: 'Complete SQL and Databases Bootcamp',
    yearUpdated: 2022,
  }),
  [CourseTitle.typescriptComplete]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL('https://academy.zerotomastery.io/p/learn-typescript'),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/typescript-the-complete-developers-guide/'
        ),
      },
    ],
    duration: 24.6,
    instructors: [persons.stephenGrider],
    rating: 5,
    school: schools.zeroToMastery,
    title: "Typescript: The Complete Developer's Guide",
    yearUpdated: 2022,
  }),
  [CourseTitle.scaleReactNx]: new Course({
    courseUrls: [
      {
        school: schools.egghead,
        url: new URL(
          'https://egghead.io/courses/scale-react-development-with-nx-4038'
        ),
      },
    ],
    duration: 1.667,
    instructors: [persons.juriStrumpflohner],
    rating: 3,
    school: schools.egghead,
    title: 'Scale React Development with Nx',
    yearUpdated: 2021,
  }),
  [CourseTitle.webComponentsStencil]: new Course({
    courseUrls: [
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/web-components-stenciljs-build-custom-html-elements/?couponCode=D_1221'
        ),
      },
    ],
    duration: 8.833,
    instructors: [persons.maximilianSchwarzmuller],
    rating: 3,
    school: schools.academind,
    title: 'Web Components & Stencil.js',
    yearUpdated: 2021,
  }),
  [CourseTitle.dockerKubernetes]: new Course({
    courseUrls: [
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/'
        ),
      },
    ],
    duration: 22.23,
    instructors: [persons.stephenGrider],
    rating: 5,
    school: schools.udemy,
    title: 'Docker and Kubernetes',
    yearUpdated: 2022,
  }),
  [CourseTitle.completeEthicalHacking]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL(
          'https://academy.zerotomastery.io/p/complete-ethical-hacking-bootcamp-zero-to-mastery'
        ),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/'
        ),
      },
    ],
    duration: 27.72,
    instructors: [persons.aleskaTamburkovski],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'Complete Ethical Hacking Bootcamp',
    yearUpdated: 2022,
  }),
  [CourseTitle.webSecurityBugBounty]: new Course({
    courseUrls: [
      {
        school: schools.zeroToMastery,
        url: new URL(
          'https://academy.zerotomastery.io/p/learn-penetration-testing'
        ),
      },
      {
        school: schools.udemy,
        url: new URL(
          'https://www.udemy.com/course/web-security-and-bug-bounty-learn-penetration-testing/'
        ),
      },
    ],
    duration: 10.35,
    instructors: [persons.aleskaTamburkovski],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'Web Security & Bug Bounty',
    yearUpdated: 2022,
  }),
};
