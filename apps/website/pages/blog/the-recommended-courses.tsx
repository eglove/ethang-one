import { NextLink } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import styles from '../../components/common/styles/common.module.css';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

function TheRecommendedCourses({ blog }: BlogProperties): JSX.Element {
  return (
    <StaticBlogLayout blog={blog}>
      <p id="top">
        <LinkComponent linkProperties={{ href: '/courses' }}>
          Recommended Courses
        </LinkComponent>{' '}
        is my attempt to put the best coding courses out there in one list. They
        are put in an order so that someone new to coding can start at the top
        and learn from scratch and end up knowing more than a college degree
        could ever provide.
      </p>
      <p>
        Below I&apos;ll do my best to explain the reasoning behind that page,
        why the content is there and notes on what&apos;s important.
      </p>
      <ul className={styles.toc}>
        <li>
          <NextLink linkProperties={{ href: '#sOne' }}>
            Learning To Learn
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sTwo' }}>CompTIA A+</NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sThree' }}>
            Web Developer Bootcamp
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sFour' }}>
            Accessibility, Git, and Postman
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sFive' }}>
            JavaScript Web Projects
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sSix' }}>
            Code Automation
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sSeven' }}>
            JavaScript Advanced, AlgoExpert
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sEight' }}>
            Complete Node
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sNine' }}>
            Epic React, Fullstack React
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sTen' }}>
            Apollo Odyssey, Testing with Cypress
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sEleven' }}>
            Complete SQL
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sTweleve' }}>
            TypeScript, NX, Stencil
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sThirteen' }}>
            Docker and Kubernetes
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sFourteen' }}>
            Ethical Hacking, Web Security, Linux Sysadmin
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#sFifteen' }}>
            Scrum and Agile
          </NextLink>
        </li>
      </ul>
      <h2 id="sOne">
        Learning To Learn{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        I can&apos;t stress enough how important this short course is. Learning
        is hard. Learning development is hard. Find a forum or subreddit
        dedicated to newbie developers and you&apos;ll see that the majority of
        questions are around how to keep going. &ldquo;This content isn&apos;t
        clicking.&rdquo; &ldquo;I&apos;m not learning anything.&rdquo; &ldquo;I
        don&apos;t have the motivation.&rdquo;
      </p>
      <p>
        This course is your first line of defense to those issues. It not only
        teaches efficient learning strategies and usable memory techniques, but
        it will teach you strategies for managing your time and mental state.
      </p>
      <h2 id="sTwo">
        CompTIA A+{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        This course is meant to help you pass the CompTIA A+ exams.{' '}
        <strong>
          If you are trying to get into development, do not waste your time on
          these exams.
        </strong>{' '}
        This content is here to teach computer systems on a professional level.
        Normally it is meant for IT support technicians. This course list is not
        meant for that career line. But the information is still invaluable. You
        will appreciate it&apos;s introduction to different operating systems,
        file systems, terminals, and basic networking as a developer.
      </p>
      <h2 id="sThree">
        Web Developer Bootcamp{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        This course is huge. It covers a lot.{' '}
        <strong>
          When you&apos;re done with it, feel free start applying to junior web
          developer roles.
        </strong>{' '}
        It doesn&apos;t cover JavaScript frameworks, it doesn&apos;t cover a lot
        of information you&apos;ll need as a developer. But it covers the basic
        knowledge that will get you off the ground.
      </p>
      <p>
        I could put more courses ahead of this. Sure Git and Postman are
        important early skills. But this is the first point where you&apos;ll
        build a massive project. It&apos;s where you&apos;ll discover how damn
        fun web development is. And it will help you relate to a lot of, if not
        all of the future courses on this list. Consider it the ignition to your
        career.
      </p>
      <h2 id="sFour">
        Accessibility, Git, and Postman{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        Three courses in a row to cover important subjects and tools not covered
        in Colt Steele&apos;s course to the depth that they should be covered.
        These are short courses that will help you know more about these basic
        skills than a large portion of your peers. Most developers I&apos;ve
        come across don&apos;t realize that Postman is a testing suite,
        don&apos;t know what git reflog is, and never give a second thought
        towards accessibility. Yet, these are required skills and knowledge for
        all web developers.
      </p>
      <h2 id="sFive">
        JavaScript Web Projects{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        <strong>
          This is the point where you&apos;re going you want to start building a
          portfolio.
        </strong>{' '}
        Sure, maybe you got a job thanks to Colt Steele&apos;s course. But your
        career has only just begun. If you haven&apos;t got your first job yet,
        this course will get you started on building out projects that will help
        you stand out. I don&apos;t necessarily recommend putting these projects
        in a portfolio. But this course will give you plenty of inspiration and
        walk though a lot of things you can do with your already existing
        skills.
      </p>
      <h2 id="sSix">
        Code Automation{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        As you start putting more projects on GitHub, you&apos;re going to want
        to get more familiar with GitHub actions. This introduction to GitHub
        automation will help you a lot later. If anything feels out of place,
        testing automation, NPM publishing, etc. Don&apos;t worry, get what you
        can out of this course. Study it and you&apos;ll find your connection to
        the topics covered here will help with topics covered later.
      </p>
      <h2 id="sSeven">
        JavaScript Advanced, AlgoExpert{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        Welcome to algorithms. Get your whiteboard ready, and prepare for
        headaches. This is the fun stuff. JavaScript: The Advanced Concepts is a
        fantastic deep dive into the harder parts of JS. It will give you a
        better understanding of the language that will help you get into
        algorithms.
      </p>
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
          interviews such as FAANG.
        </strong>{' '}
        (Facebook, Amazon, Apple, Netflix, Google).
      </p>
      <h2 id="sEight">
        Complete Node{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        I apologize for the instructor of this course. It&apos;s nails on a
        chalkboard. But this really is the best, most robust course on Node I
        could find. And you definitely need to know Node to work in Web
        Development.{' '}
        <strong>
          This will give you more depth and more detail than Colt Steele&apos;s
          Web Development course.
        </strong>{' '}
        It will not only cover using Node to build out a REST API but it will
        also be a first introduction to GraphQL and WebSockets. Two very
        important but often uncovered technologies.
      </p>
      <h2 id="sNine">
        Epic React, Fullstack React{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        React, the most dominant JavaScript framework. Don&apos;t underestimate
        frontend frameworks. You&apos;ve gone through AlgoExpert, and learned
        Node. Even spent more than 63 hours on Web Development already. But
        React is a brand new beast. Current trends suggest people are looking
        for alternatives like Svelte or Remix. But to be honest, those only make
        some minor things a little easier. React is still the more robust system
        and ecosystem to better handle the complexity of large enterprise scale
        apps.
      </p>
      <p>
        People say Kent C. Dodds&apos; Epic React course is too much for
        beginners. But they say that from the perspective of people learning
        programming for the first time. You should not learn React as the first
        thing you do with programming. At this point in the list, you&apos;re
        more than ready.
      </p>
      <p>
        After it you&apos;ll find Wes Bos&apos; Advanced React course a lot of
        fun and you&apos;ll see how much you can do with React and Next.js. With
        a full understanding of how React works from Kent Dodds and being able
        to put together a more complete application via Wes Bos&apos; course,
        this is enough to start specializing in React development. And will put
        you in a position of being able to smoothly transition to any new JS
        frameworks.
      </p>
      <h2 id="sTen">
        Apollo Odyssey, Testing with Cypress{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        As with the Postman and Git courses, these two will help fill a gap.
        Apollo Odyssey will cover using Apollo for GraphQL in much greater
        detail than other courses have. And Testing with Cypress will introduce
        E2E testing with the best testing framework out there.
      </p>
      <h2 id="sEleven">
        Complete SQL{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        After you&apos;ve learned everything you can about React, Node, GraphQL
        and testing, now we&apos;re getting into SQL. A lot of colleges would
        have you learn SQL first. But I disagree with that. In the real world
        you should be using ORM&apos;s like Prisma. It&apos;s better to learn
        how to make ORM&apos;s run efficiently than to spend a lot of time
        writing SQL.
      </p>
      <p>
        However, this course does a great job of giving you the necessary basics
        and understanding different databases. It will help you make better
        decisions and design databases for your future larger projects.
      </p>
      <h2 id="sTwelve">
        TypeScript, NX, Stencil{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        Take your projects to the next level. TypeScript is so commonplace
        you&apos;ll have come across it by now. I&apos;m confident that you can
        figure out the basics of TypeScript on your own without a course. This
        TypeScript course is a little more than basics. It focuses on design
        patterns, and is meant to get you thinking about how your code is used
        by other developers. How to use TypeScript to build smarter, more well
        designed code.
      </p>
      <p>
        The NX and Stencil courses introduce two new tools. NX for developing
        and working with monorepos. And Stencil for building native web
        components that can compile to any JavaScript framework. Great for
        building UI libraries.
      </p>
      <h2 id="sThirteen">
        Docker and Kubernetes{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        Welcome to containerization. You&apos;ll find that getting used to and
        working with Docker is an invaluable skill. Building applications to run
        in the same environment everywhere gives you an excellent level of
        control when deploying. This will also dig a little more into CI/CD and
        get you used to working with project management at a higher level.
      </p>
      <h2 id="sFourteen">
        Ethical Hacking, Web Security, Linux Sysadmin{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        These three courses start to branch into different subjects. As a web
        developer you might be less interested in them. Well, it should be
        obvious why web security is important to learn. But ethical hacking is
        good to learn for the same reason. It will give you perspective and
        knowledge that you can use in everyday development.
      </p>
      <p>
        The Linux Sysadmin course is included for two reasons. One, the same
        reason the CompTIA courses are included, it&apos;s important to know the
        systems you work with as developer. Second, as your position grows and
        you gain more responsibility, you&apos;ll find yourself working with
        Linux a lot more. Especially in managing applications and their
        deployments. You will want to get conformable with the admin side of
        Linux to perform these duties.
      </p>
      <h2 id="sFifteen">
        Scrum and Agile{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
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
    </StaticBlogLayout>
  );
}

export default TheRecommendedCourses;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('the-recommended-courses');
}
