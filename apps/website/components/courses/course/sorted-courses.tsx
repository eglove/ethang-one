import { Course as CourseModel, courses } from '@ethang/local-database';
import { useKnuthPlassLineBreaks } from '@ethang/react-hooks';
import { useState } from 'react';

import { Course } from './course';

export type CourseKey = keyof typeof courses;

interface CourseComponentProperties {
  children?: JSX.Element | JSX.Element[];
  course: CourseModel;
}

export function SortedCourses(): JSX.Element {
  useKnuthPlassLineBreaks('p');
  const [openCourse, setOpenCourse] = useState<CourseKey>();

  function GetCourseComponent({
    children,
    course,
  }: CourseComponentProperties): JSX.Element {
    return (
      <Course
        course={course}
        openCourse={openCourse}
        setOpenCourse={setOpenCourse}
      >
        {children}
      </Course>
    );
  }

  return (
    <>
      <GetCourseComponent course={courses.learningToLearn}>
        <p>
          I can&apos;t stress enough how important this short course is.
          Learning is hard. Learning development is hard. Find a forum or
          subreddit dedicated to newbie developers and you&apos;ll see that the
          majority of questions are around how to keep going. &ldquo;This
          content isn&apos;t clicking.&rdquo; &ldquo;I&apos;m not learning
          anything.&rdquo; &ldquo;I don&apos;t have the motivation.&rdquo;
        </p>
        <p>
          This course is your first line of defense to those issues. It not only
          teaches efficient learning strategies and usable memory techniques,
          but it will teach you strategies for managing your time and mental
          state.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.comptiaAPlusCore1}>
        <p>
          These two CompTIA courses are meant to help you pass the CompTIA A+
          exams. If you are trying to get into development, do not waste your
          time on these exams. This content is here to teach computer systems on
          a professional level. Normally it is meant for IT support technicians.
          This course list is not meant for that career line. But the
          information is still invaluable. You will appreciate it&&apos;s
          introduction to different operating systems, file systems, terminals,
          and basic networking as a developer.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.comptiaAPlusCore2}>
        <p>Part 2 of CompTIA A+ Core. See the above description.</p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.webDeveloperBootcamp}>
        <p>
          This course is huge. It covers a lot. When you&apos;re done with it,
          feel free start applying to junior web developer roles. It
          doesn&apos;t cover JavaScript frameworks, it doesn&apos;t cover a lot
          of information you&apos;ll need as a developer. But it covers the
          basic knowledge that will get you off the ground.
        </p>
        <p>
          I could put more courses ahead of this. Sure Git and Postman are
          important early skills. But this is the first point where you&apos;ll
          build a massive project. It&apos;s where you&apos;ll discover how damn
          fun web development is. And it will help you relate to a lot of, if
          not all of the future courses on this list. Consider it the ignition
          to your career.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.accessibilityForEveryone}>
        <p>
          Not a lot of companies or developers give a second thought to
          accessibility. But knowing how to build web accessible apps is a very
          important skill for every developer. Some companies will require you
          to follow ARIA guidelines. This course will get you started in
          thinking about accessibility.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.gitAndGithubBootcamp}>
        <p>
          Add, commit, push. That&apos;s all I need to know, right? Not quite,
          only knowing the basics of git and not knowing the standard practices
          will get you in trouble in the future. If you don&apos;t want to lose
          code or create a mess for yourself that you don&apos;t know how to
          recover from, make sure to understand git well.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.postmanCompleteGuide}>
        <p>
          You will use Postman a lot working as a web developer. It&apos;s not
          only a great way to quickly test API endpoints, but it can act as a
          full test suite. Getting comfortable with it now will ensure you know
          how to use it as a tool to debug and fix problems you have with future
          projects.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.javascriptWebProjects}>
        <p>
          <strong>
            This is the point where you&apos;re going you want to start building
            a portfolio.
          </strong>{' '}
          Sure, maybe you got a job thanks to Colt Steele&apos;s course. But
          your career has only just begun. If you haven&apos;t got your first
          job yet, this course will get you started on building out projects
          that will help you stand out. I don&apos;t necessarily recommend
          putting projects from a course in a portfolio. But the Web Projects
          course will give you plenty of inspiration and walk though a lot of
          things you can do with your already existing skills.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.seoTrainingMasterclass}>
        <p>
          If you used the knowledge gained from JavaScript web projects to get a
          portfolio setup, now is the time to learn how to get in front of as
          many as possible. The SEO course will introduce you to the world of
          web marketing and getting a web app attention. The SEO course itself
          wasn&apos;t made for developers, but developers will find a lot of
          value in going through it.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.codeAutomationWithGithub}>
        <p>
          As you start putting more projects on GitHub, you&apos;re going to
          want to get more familiar with GitHub actions. This introduction to
          GitHub automation will help you a lot later. If anything feels out of
          place, testing automation, NPM publishing, etc. Don&apos;t worry, get
          what you can out of this course. Study it and you&apos;ll find your
          connection to the topics covered here will help with topics covered
          later.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.javascriptAdvancedConcepts}>
        <p>
          Welcome to algorithms. Get your whiteboard ready, and prepare for
          headaches. This is the fun stuff. This course is a fantastic deep dive
          into the harder parts of JS. It will give you a better understanding
          of the language and help you get into algorithms.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.algoExpert}>
        <p>
          AlgoExpert is a huge program. You&apos;ll be spending a lot of time on
          it. Start with the Data Structures Crash Course, move into the Coding
          Interview Questions. You can then utilize the other resources like the
          Coding Interview Assessments, Mock Interviews, and tips as you like.
        </p>
        <p>
          <strong>
            If you haven&apos;t already got a job at this point, going through
            AlgoExpert will help you with targeting larger companies with harder
            interviews.
          </strong>
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.completeNodeDeveloper}>
        <p>
          I apologize for the instructor of this course. It&apos;s nails on a
          chalkboard. But this really is the best, most robust course on Node I
          could find. And you definitely need to know Node to work in Web
          Development. This will give you more depth and more detail than Colt
          Steele&apos;s Web Development course. It will not only cover using
          Node to build out a REST API but it will also be a first introduction
          to GraphQL and WebSockets. Two very important but often uncovered
          technologies.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.completeReactDeveloper}>
        <p>
          React, the most dominant JavaScript framework. Don&apos;t
          underestimate frontend frameworks. You&apos;ve gone through
          AlgoExpert, and learned Node. Even spent more than 63 hours on Web
          Development already. But React is a brand new beast. Current trends
          suggest people are looking for alternatives like Svelte. But to be
          honest, those only make some minor things a little easier. React is
          still the more robust system and ecosystem to better handle the
          complexity of large enterprise scale apps. Complete React will get you
          going with the very basics of using React and it&apos;s ecosystem.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.cssForJavascriptDevelopers}>
        <p>
          All the parts of CSS you didn&apos;t know existed or didn&apos;t
          understand up until this point. In my opinion this course requires
          some basic understanding of React, that&apos;s why we&apos;ve waiting
          so long to get to this. Previous courses would have given you a pretty
          decent working knowledge of CSS. But this gets much more in depth and
          perfectly fills the gaps that no other course does.
        </p>
        <p>
          By the end of this course you&apos;ll be very comfortable with all the
          weird parts of CSS that may have confused or frustrated you before.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.epicReact}>
        <p>
          A lot of people are afraid of this course. They will claim it&apos;s
          too difficult. I disagree. If you know JavaScript (and you do by now),
          you won&apos;t have any issues with this whatsoever. Epic React will
          take a deeper dive into how React actually works as a framework and
          how you can avoid common pitfalls.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.advancedReact}>
        <p>
          Wes Bos&rsquo; Advanced React course a lot of fun and you&apos;ll see
          how much you can do with React and Next.js. With a full understanding
          of how React works from Kent Dodds and being able to put together a
          more complete application via Wes Bos&rsquo; course, this is enough to
          start specializing in React development. And will put you in a
          position of being able to smoothly transition to any new JS
          frameworks.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.apolloOdyssey}>
        <p>
          Apollo Odyssey will cover using Apollo for GraphQL and schema first
          design in much greater detail than other courses have. Apollo Server
          and Apollo Client are a powerful combo that can serve as a very clean
          state management system for your react apps.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.testingWithCypress}>
        <p>
          Cypress is known as the best tool for E2E testing, and it&apos;s very
          much worth knowing. Future version of Cypress will allow isolated
          component tests which will make this already very powerful tool even
          more relevant.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.completeSqlDatabasesBootcamp}>
        <p>
          After you&apos;ve learned everything you can about React, Node,
          GraphQL and testing, now we&apos;re getting into SQL. A lot of
          colleges would have you learn SQL first. But I disagree with that. In
          the real world you should be using ORM&apos;s like Prisma. It&apos;s
          better to learn how to make ORM&apos;s run efficiently than to spend a
          lot of time writing SQL.
        </p>
        <p>
          However, this course does a great job of giving you the necessary
          basics and understanding different databases. It will help you make
          better decisions and design databases for your future larger projects.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.typescriptCompleteDevelopersGuide}>
        <p>
          Take your projects to the next level. TypeScript is so commonplace
          you&apos;ll have come across it by now. I&apos;m confident that you
          can figure out the basics of TypeScript on your own without a course.
          This TypeScript course is a little more than basics. It focuses on
          design patterns, and is meant to get you thinking about how your code
          is used by other developers. How to use TypeScript to build smarter,
          more well designed code.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.scaleReactDevelopmentWithNx}>
        <p>
          Monorepos are an extraordinary way to make code reusable across
          projects and to encourage composable design. As you build more apps,
          you&apso;ll will love having this tool in your toolbox because it
          speeds up your development time by 10x when you have a system of your
          own custom libraries to work from.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.webComponentsAndStencil}>
        <p>
          Stencil is a great tool that allows you to build web components that
          are usable across any JavaScript framework and even the native web. As
          you start building out your monorepo and experimenting with multiple
          frameworks, you&apos;ll definitely want to start using this.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.dockerAndKubernetes}>
        <p>
          Welcome to containerization. You&apos;ll find that getting used to and
          working with Docker is an invaluable skill. Building applications to
          run in the same environment everywhere gives you an excellent level of
          control when deploying. This will also dig a little more into CI/CD
          and get you used to working with project management at a higher level.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.devOpsBootcampTerraform}>
        <p>
          Terraform is a tool that makes it very easy to deploy and manage cloud
          resources with code. This is great to have when working across
          multiple cloud platforms, or if you just don&apos;t want to keep track
          of all your AWS resources through their confusing UI. Many companies
          use tools like this to manage complex systems of cloud resources.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.completeEthicalHacking}>
        <p>
          As a web developer you might be less interested in in hacking. But
          ethical hacking is good to learn for the same reason it&apos;s good to
          learn web security. It will give you perspective and knowledge that
          you can use in everyday development.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.webSecurityBugBounty}>
        <p>
          Web security is a complex topic that developers sometimes forget or
          stop thinking about it. But it should be obvious why it&apos;s good to
          always remain security conscious. This course will show you how
          hackers work to get sensitive data from web apps and what you can do
          to prevent those hacks.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.devOpsBootcamp}>
        <p>
          The Linux Sysadmin course is included for two reasons. One, the same
          reason the CompTIA courses are included, it&apos;s important to know
          the systems you work with as developer. Second, as your position grows
          and you gain more responsibility, you&apos;ll find yourself working
          with Linux a lot more. Especially in managing applications and their
          deployments. You will want to get conformable with the admin side of
          Linux to perform these duties.
        </p>
      </GetCourseComponent>
      <GetCourseComponent course={courses.scrumForBeginners}>
        <p>
          As you move into management roles you need to get to know SCRUM and
          AGILE better. Working in development, you&apos;ll pick up the basics.
          But it&apos;s good to learn the details and Valentin Despa&apos;s
          courses are great.
        </p>
        <p>
          I&apos;ll leave it up to your discretion whether you want to get
          certified or not. I do not like memorizing flash cards for exams. I
          don&apos;t think that&apos;s a good way to learn, study, or prove your
          knowledge. But you&apos;ll still want to learn it whether you get
          certified or not.
        </p>
      </GetCourseComponent>
    </>
  );
}
