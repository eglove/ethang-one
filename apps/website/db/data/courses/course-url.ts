import { CourseUrl } from '../../models/course';
import { schools } from '../schools/schools';

export const courseUrls = {
  algoExpertAlgoExpert: new CourseUrl({
    school: schools.algoExpert,
    url: new URL('https://www.algoexpert.io/product'),
  }),
  apolloOdysseyApolloOdyssey: new CourseUrl({
    school: schools.apolloOdyssey,
    url: new URL('https://www.apollographql.com/tutorials/'),
  }),
  eggheadScaleReactDevelopmentWithNx: new CourseUrl({
    school: schools.egghead,
    url: new URL(
      'https://egghead.io/courses/scale-react-development-with-nx-4038'
    ),
  }),
  kentCDoddsEpicReact: new CourseUrl({
    school: schools.kentCDodds,
    url: new URL('https://epicreact.dev'),
  }),
  levelUpTutorialsAccessibilityForEveryone: new CourseUrl({
    school: schools.levelUpTutorials,
    url: new URL(
      'https://leveluptutorials.com/tutorials/accessibility-for-everyone/'
    ),
  }),
  levelUpTutorialsCodeAutomationWithGithub: new CourseUrl({
    school: schools.levelUpTutorials,
    url: new URL(
      'https://leveluptutorials.com/tutorials/code-automation-with-github'
    ),
  }),
  levelUpTutorialsTestingWithCypress: new CourseUrl({
    school: schools.levelUpTutorials,
    url: new URL('https://leveluptutorials.com/tutorials/testing-with-cypress'),
  }),
  udemyAgileScrumProductOwner: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/agile-scrum-product-owner-certification-preparation/'
    ),
  }),
  udemyCompleteEthicalHackingBootcamp: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/'
    ),
  }),
  udemyCompleteNodeDeveloper: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery'
    ),
  }),
  udemyCompleteReactDeveloper: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/'
    ),
  }),
  udemyCompleteSqlAndDatabasesBootcamp: new CourseUrl({
    school: schools.udemy,
    url: new URL('https://zerotomastery.io/courses/sql-bootcamp/'),
  }),
  udemyComptiaAPlusCore1: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/new-comptia-a-2019-certification-1001-the-total-course/'
    ),
  }),
  udemyComptiaAPlusCore2: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/new-comptia-a-2019-certification-1002-the-total-course/'
    ),
  }),
  udemyDockerAndKubernetes: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/'
    ),
  }),
  udemyGitAndGithubBootcamp: new CourseUrl({
    school: schools.udemy,
    url: new URL('https://www.udemy.com/course/git-and-github-bootcamp/'),
  }),
  udemyJavascriptAdvancedConcepts: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://zerotomastery.io/courses/advanced-javascript-concepts/'
    ),
  }),
  udemyJavascriptWebProjects: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/'
    ),
  }),
  udemyLearningToLearn: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery'
    ),
  }),
  udemyPostmanCompleteGuide: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/postman-the-complete-guide/?couponCode=2021-11-1'
    ),
  }),
  udemyScrumForBeginners: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/agile-scrum-for-beginners-scrum-master-certification-preparation/'
    ),
  }),
  udemySeoTrainingMasterclass: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/seo-with-google-other-large-platforms-to-get-great-scale/'
    ),
  }),
  udemyTypescriptCompleteDevelopersGuide: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/typescript-the-complete-developers-guide'
    ),
  }),
  udemyWebComponentsAndStencil: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/web-components-stenciljs-build-custom-html-elements/?couponCode=D_1221'
    ),
  }),
  udemyWebDeveloperBootcamp: new CourseUrl({
    school: schools.udemy,
    url: new URL('https://www.udemy.com/course/the-web-developer-bootcamp/'),
  }),
  udemyWebSecurityBugBounty: new CourseUrl({
    school: schools.udemy,
    url: new URL(
      'https://www.udemy.com/course/web-security-and-bug-bounty-learn-penetration-testing'
    ),
  }),
  wesBosAdvancedReact: new CourseUrl({
    school: schools.wesBos,
    url: new URL('https://advancedreact.com/'),
  }),
  zeroToMasteryCompleteEthicalHacking: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL('https://zerotomastery.io/courses/learn-ethical-hacking/'),
  }),
  zeroToMasteryCompleteNodeDeveloper: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL('https://zerotomastery.io/courses/learn-node-js/'),
  }),
  zeroToMasteryCompleteReact: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL('https://zerotomastery.io/courses/learn-react/'),
  }),
  zeroToMasteryCompleteSqlDatabasesBootcamp: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL(
      'https://academy.zerotomastery.io/p/complete-sql-database-bootcamp-zero-to-mastery'
    ),
  }),
  zeroToMasteryDevOpsBootcamp: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL('https://zerotomastery.io/courses/devops-bootcamp/'),
  }),
  zeroToMasteryJavascriptAdvancedConcepts: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL(
      'https://academy.zerotomastery.io/p/advanced-javascript-concepts'
    ),
  }),
  zeroToMasteryJavascriptWebProjects: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL('https://zerotomastery.io/courses/javascript-projects/'),
  }),
  zeroToMasteryLearningToLearn: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL('https://zerotomastery.io/courses/learning-how-to-learn/'),
  }),
  zeroToMasteryTypescriptCompleteDevelopersGuide: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL('https://academy.zerotomastery.io/p/learn-typescript'),
  }),
  zeroToMasteryWebSecurityBugBounty: new CourseUrl({
    school: schools.zeroToMastery,
    url: new URL('https://zerotomastery.io/courses/learn-penetration-testing/'),
  }),
};
