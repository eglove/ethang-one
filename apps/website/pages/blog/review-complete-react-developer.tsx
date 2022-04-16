import { NextLink } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

function ReviewCompleteReactDeveloper({ blog }: BlogProperties): JSX.Element {
  return (
    <StaticBlogLayout blog={blog}>
      <h2>The Update</h2>
      <p>
        In the 2021 update, Zero To Mastery seemingly took a stance against
        React Hooks. The coverage of hooks was lackluster and the appended
        videos were full of excuses as to why they weren&apos;t making the
        updates to properly include them. So I took it off of my recommended
        list. As of 2022, it&apos;s coming back on. Not just because of using a
        hooks first approach, but because the course has been properly
        modernized with 65% of the course being rerecorded. This isn&apos;t one
        or two footnote videos, it&apos;s all brand new with the latest
        approaches and knowledge.
      </p>
      <p>
        The courses first small project does start by teaching classes but
        quickly rewrites it to hooks in following videos. Yihua argues that
        it&apos;s important to learn classes first. I would maybe argue that
        native web components should be learned first which typically use
        lifecycle methods. But that&apos;s a minor, unimportant argument. The
        point is hooks are the standard way of working with React today, they
        have been for a long enough time that any company you join will likely
        be using them over class components. Any new projects should absolutely
        be using them.
      </p>
      <h2>The Good</h2>
      <p>
        I am overall very impressed with this course. It&apos;s great for people
        who already know web development and want to get into React. Starting
        with React Context and converting into Redux is a smart choice. Redux is
        becoming increasingly unimportant as the years go by. Whether it&apos;s
        new, better state management tools, cache invalidation, or just regular
        context, there are plenty of better alternatives out there. But
        regardless, unlike the fast switch the industry made from classes to
        hooks, Redux has remained a sticky thorn in the side of the ecosystem.
        And that makes it still worth learning.
      </p>
      <p>
        The course also gives a general overview and introduction to GraphQL and
        how Apollo Client can be used as a state management tool to replace a
        lot of what Redux does. I love the coverage of the popular alternatives
        rather than the opinionated insistence this course once had on classes
        and Redux. The ecosystem of React is much bigger now than when this
        course was first created and I&apos;m happy to see Yihua making the
        updates that are needed to keep it relevant.
      </p>
      <h2>The Bad</h2>
      <p>
        There is one detail that really annoyed me in the coverage of hooks,
        however. Yihua explains the useEffect hook dependency array as allowing
        you to choose when it&apos;s function fires. This is{' '}
        <strong>wrong</strong>. Very <strong>wrong</strong>. Badly{' '}
        <strong>wrong</strong>. It will cause very confusing errors for you in
        the future wrong. This is one of the primary reasons I&apos;ve put Kent
        C. Dodds&apos; very expensive course on the recommended list. Because it
        has a far better understanding of how React works than other courses. To
        make this correction in the shortest manner possible, the useEffect
        dependency array tells react what is affected by the function. You
        should never &ldquo;choose&rdquo; what goes in that array, only place
        the correct dependencies. The Kent C. Dodds course covers this in
        greater detail.
      </p>
      <p>
        Yihua also makes heavy use of SASS and Styled Components in this course.
        To me these tools are very bad abstractions. Styled Components had some
        importance before{' '}
        <NextLink
          linkProperties={{
            href: 'https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/',
          }}
        >
          React supported CSS modules
        </NextLink>
        . But today, they just make CSS more complex than it is. They don&apos;t
        allow you to do anything &ldquo;advanced&rdquo; or cut down on the
        amount you have to write. Quite the opposite. They introduce a layer
        that makes CSS more difficult to manage, especially at large scale. I
        would say to never use these tools, but if you must DO NOT learn them
        first. By learning these first you are handicapping your knowledge of
        how CSS actually works and how much simpler it is to do the exact same
        thing.
      </p>
      <h2>The Verdict</h2>
      <p>
        This 2022 update is impressive enough to me that I want to take the
        course again in full, rebuilding the app as they did and following along
        as if it were my first time seeing it. Yihua is great presenter, the
        course covers an incredible amount of topics pouring it into one small
        project and another large one without breaking up the context of what
        its teaching.
      </p>
      <p>
        I won&apos;t complain too much about the usage of SASS and Styled
        Components. While they may be useless, I wouldn&apos;t recommend this
        courses to people totally new to development. Meaning, if you&apos;re
        taking this course, you should have the knowledge to form your own
        educated opinion about these things.
      </p>
      <p>
        The coverage of useEffect is very unfortunate. But, while I
        wouldn&apos;t consider this course for beginner developers, I would
        consider it for beginner React developers. This large project built in
        this course is a great first project. But this course is by no means
        everything you need to know. The basic (and incorrect) explanation of
        useEffect is dangerous, but it won&apos;t cause issues in this app, and
        can be corrected in more advanced courses.
      </p>
      <p>
        So because of the quality of presentation, the coverage of many
        different modern approaches to state management, and a very impressive
        turnaround on the update, I give Yihua Zhang&apos;s{' '}
        <NextLink
          linkProperties={{
            href: 'https://zerotomastery.io/courses/learn-react/',
          }}
        >
          Complete React Developer
        </NextLink>{' '}
        a 5 out of 5.
      </p>
    </StaticBlogLayout>
  );
}

export default ReviewCompleteReactDeveloper;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('review-complete-react-developer');
}
