import { Course } from '../../models/course';
import { persons } from '../persons/persons';
import { schools } from '../schools/schools';
import { courseUrls } from './course-url';

export const courses = {
  accessibilityForEveryone: new Course({
    courseUrls: [courseUrls.levelUpTutorialsAccessibilityForEveryone],
    duration: 2.4623,
    instructors: [persons.amyKapernick],
    rating: 4,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-accessibility-for-everyone'
    ),
    school: schools.levelUpTutorials,
    title: 'Accessibility For Everyone',
    yearUpdated: 2021,
  }),
  advancedReact: new Course({
    courseUrls: [courseUrls.wesBosAdvancedReact],
    duration: 18,
    instructors: [persons.wesBos],
    rating: 5,
    school: schools.wesBos,
    title: 'Fullstack Advanced React & GraphQL',
    yearUpdated: 2022,
  }),
  agileScrumProductOwner: new Course({
    courseUrls: [courseUrls.udemyAgileScrumProductOwner],
    duration: 7.15,
    instructors: [persons.valentinDespa],
    rating: 5,
    school: schools.udemy,
    title: 'Agile & Scrum for Product Owners',
    yearUpdated: 2022,
  }),
  algoExpert: new Course({
    courseUrls: [courseUrls.algoExpertAlgoExpert],
    rating: 5,
    school: schools.algoExpert,
    title: 'AlgoExpert',
  }),
  apolloOdyssey: new Course({
    courseUrls: [courseUrls.apolloOdysseyApolloOdyssey],
    duration: 2.77,
    rating: 4,
    school: schools.apolloOdyssey,
    title: 'Apollo Odyssey',
    yearUpdated: 2022,
  }),
  codeAutomationWithGithub: new Course({
    courseUrls: [courseUrls.levelUpTutorialsCodeAutomationWithGithub],
    duration: 2.6164,
    instructors: [persons.brianDouglas],
    rating: 4,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-code-automation-with-github'
    ),
    school: schools.levelUpTutorials,
    title: 'Code Automation With GitHub',
    yearUpdated: 2021,
  }),
  completeEthicalHacking: new Course({
    courseUrls: [
      courseUrls.zeroToMasteryCompleteEthicalHacking,
      courseUrls.udemyCompleteEthicalHackingBootcamp,
    ],
    duration: 27.72,
    instructors: [persons.aleskaTamburkovski],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'Complete Ethical Hacking Bootcamp',
    yearUpdated: 2022,
  }),
  completeNodeDeveloper: new Course({
    courseUrls: [
      courseUrls.zeroToMasteryCompleteNodeDeveloper,
      courseUrls.udemyCompleteNodeDeveloper,
    ],
    duration: 46,
    instructors: [persons.adamOdziemkowski],
    rating: 3,
    school: schools.zeroToMastery,
    title: 'Complete Node.js Developer',
    yearUpdated: 2022,
  }),
  completeReactDeveloper: new Course({
    courseUrls: [
      courseUrls.zeroToMasteryCompleteReact,
      courseUrls.udemyCompleteReactDeveloper,
    ],
    duration: 39.2,
    instructors: [persons.yihuaZhang],
    rating: 5,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-complete-react-developer'
    ),
    school: schools.zeroToMastery,
    title: 'Complete React Developer',
    yearUpdated: 2022,
  }),
  completeSqlDatabasesBootcamp: new Course({
    courseUrls: [
      courseUrls.zeroToMasteryCompleteSqlDatabasesBootcamp,
      courseUrls.udemyCompleteSqlAndDatabasesBootcamp,
    ],
    duration: 24.27,
    instructors: [persons.moBinni],
    rating: 4,
    school: schools.zeroToMastery,
    title: 'Complete SQL and Databases Bootcamp',
    yearUpdated: 2022,
  }),
  comptiaAPlusCore1: new Course({
    courseUrls: [courseUrls.udemyComptiaAPlusCore1],
    duration: 17.48,
    instructors: [persons.mikeMeyers],
    rating: 5,
    ratingUrl: new URL('https://www.ethang.dev/blog/review-mike-meyers-a-plus'),
    school: schools.totalSeminars,
    title: 'CompTIA A+ Core 1',
    yearUpdated: 2021,
  }),
  comptiaAPlusCore2: new Course({
    courseUrls: [courseUrls.udemyComptiaAPlusCore2],
    duration: 14.82,
    instructors: [persons.mikeMeyers],
    rating: 5,
    school: schools.totalSeminars,
    title: 'CompTIA A+ Core 2',
    yearUpdated: 2021,
  }),
  devOpsBootcamp: new Course({
    courseUrls: [courseUrls.zeroToMasteryDevOpsBootcamp],
    duration: 24,
    instructors: [persons.andreiDumitrescu],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'DevOps Bootcamp: Learn Linux & Become a Linux Sysadmin',
    yearUpdated: 2022,
  }),
  devOpsBootcampTerraform: new Course({
    courseUrls: [courseUrls.zeroToMasteryDevOpsBootcampTerraform],
    duration: 7,
    instructors: [persons.andreiDumitrescu],
    rating: 4,
    school: schools.zeroToMastery,
    title: 'DevOps Bootcamp: Terraform',
    yearUpdated: 2022,
  }),
  dockerAndKubernetes: new Course({
    courseUrls: [courseUrls.udemyDockerAndKubernetes],
    duration: 22.23,
    instructors: [persons.stephenGrider],
    rating: 5,
    school: schools.udemy,
    title: 'Docker and Kubernetes',
    yearUpdated: 2022,
  }),
  epicReact: new Course({
    courseUrls: [courseUrls.kentCDoddsEpicReact],
    instructors: [persons.kentCDodds],
    rating: 5,
    school: schools.kentCDodds,
    title: 'Epic React',
    yearUpdated: 2022,
  }),
  gitAndGithubBootcamp: new Course({
    courseUrls: [courseUrls.udemyGitAndGithubBootcamp],
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
  javascriptAdvancedConcepts: new Course({
    courseUrls: [
      courseUrls.zeroToMasteryJavascriptAdvancedConcepts,
      courseUrls.udemyJavascriptAdvancedConcepts,
    ],
    duration: 25.28,
    instructors: [persons.andreiNeagoie],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'JavaScript The Advanced Concepts',
    yearUpdated: 2022,
  }),
  javascriptWebProjects: new Course({
    courseUrls: [
      courseUrls.zeroToMasteryJavascriptWebProjects,
      courseUrls.udemyJavascriptWebProjects,
    ],
    duration: 32.78,
    instructors: [persons.jacintoWong],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'JavaScript Web Projects',
    yearUpdated: 2022,
  }),
  learningToLearn: new Course({
    courseUrls: [
      courseUrls.zeroToMasteryLearningToLearn,
      courseUrls.udemyLearningToLearn,
    ],
    duration: 5.317,
    instructors: [persons.andreiNeagoie],
    rating: 5,
    ratingUrl: new URL('https://www.ethang.dev/blog/review-learning-to-learn'),
    school: schools.zeroToMastery,
    title: 'Learning to Learn',
    yearUpdated: 2022,
  }),
  postmanCompleteGuide: new Course({
    courseUrls: [courseUrls.udemyPostmanCompleteGuide],
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
  scaleReactDevelopmentWithNx: new Course({
    courseUrls: [courseUrls.eggheadScaleReactDevelopmentWithNx],
    duration: 1.667,
    instructors: [persons.juriStrumpflohner],
    rating: 3,
    school: schools.egghead,
    title: 'Scale React Development with Nx',
    yearUpdated: 2021,
  }),
  scrumForBeginners: new Course({
    courseUrls: [courseUrls.udemyScrumForBeginners],
    duration: 6.033,
    instructors: [persons.valentinDespa],
    rating: 5,
    school: schools.udemy,
    title: 'Scrum for Beginners',
    yearUpdated: 2022,
  }),
  seoTrainingMasterclass: new Course({
    courseUrls: [courseUrls.udemySeoTrainingMasterclass],
    duration: 17.42,
    instructors: [persons.alexGenadinik],
    rating: 4,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-seo-training-masterclass'
    ),
    school: schools.problemio,
    title: 'SEO Training Masterclass',
    yearUpdated: 2022,
  }),
  testingWithCypress: new Course({
    courseUrls: [courseUrls.levelUpTutorialsTestingWithCypress],
    duration: 3.4533,
    instructors: [persons.scottTolinski],
    rating: 4,
    ratingUrl: new URL(
      'https://www.ethang.dev/blog/review-testing-with-cypress'
    ),
    school: schools.levelUpTutorials,
    title: 'Testing With Cypress',
    yearUpdated: 2021,
  }),
  typescriptCompleteDevelopersGuide: new Course({
    courseUrls: [
      courseUrls.zeroToMasteryTypescriptCompleteDevelopersGuide,
      courseUrls.udemyTypescriptCompleteDevelopersGuide,
    ],
    duration: 24.6,
    instructors: [persons.stephenGrider],
    rating: 5,
    school: schools.udemy,
    title: "Typescript: The Complete Developer's Guide",
    yearUpdated: 2022,
  }),
  webComponentsAndStencil: new Course({
    courseUrls: [courseUrls.udemyWebComponentsAndStencil],
    duration: 8.833,
    instructors: [persons.maximilianSchwarzmuller],
    rating: 3,
    school: schools.academind,
    title: 'Web Components & Stencil.js',
    yearUpdated: 2021,
  }),
  webDeveloperBootcamp: new Course({
    courseUrls: [courseUrls.udemyWebDeveloperBootcamp],
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
  webSecurityBugBounty: new Course({
    courseUrls: [
      courseUrls.zeroToMasteryWebSecurityBugBounty,
      courseUrls.udemyWebSecurityBugBounty,
    ],
    duration: 10.35,
    instructors: [persons.aleskaTamburkovski],
    rating: 5,
    school: schools.zeroToMastery,
    title: 'Web Security & Bug Bounty',
    yearUpdated: 2022,
  }),
};
