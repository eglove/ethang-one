import { blogs } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

function RecentCourseUpdates(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.recentCourseUpdates}>
      <h2>August 2022</h2>
      <p>
        Every month changes to the{' '}
        <NextLink linkProperties={{ href: '/courses' }}>
          recommended courses
        </NextLink>{' '}
        list will be listed here. Because it can take two or more years to go
        through this course list, if you want to commit to the current version,
        you can{' '}
        <NextLink
          isNewTab
          linkProperties={{
            href: '/files/course-curriculum.pdf',
          }}
        >
          download this months list here
        </NextLink>
        . This way you don&apos;t have to worry about changes being made part
        way through. I&apos;ve been maintaining this list since 2020 and at any
        given moment I believe it&apos;s a great way to learn development. But I
        will also continue to improve and update it over time.
      </p>
      <h2>Courses Added</h2>
      <p>
        <strong>NestJS: The Complete Developer&apos;s Guide</strong>: Yes,
        NestJS is a bad design system. It should not be used for the majority of
        projects. I think most of the JavaScript community can understand this
        perspective. The reason NestJS made it to my recommended list is because
        after trying every possible solution to build a good GraphQL backend, I
        found NestJS to be perfect for it. With this new use, NestJS became an
        important tool in the toolbox. Just don&apos;t fall for the lure and
        illusions of NestJS opinions being the only way to solve every problem.
        Decorators and dependency injection are not useful concepts when you
        stop to consider how JavaScript as a language works.
      </p>
      <p>
        <strong>NestJS GraphQL Tutorial</strong>: This quick and short YouTube
        tutorial is the reason why I set out to learn NestJS. And the reason why
        it&apos;s included in the recommended list. But because this is just a
        short tutorial and not a full course on Nest, it&apos;s best to learn
        Nest first before jumping into this.
      </p>
      <h2>Courses Moved</h2>
      <p>
        <strong>Scrum for Beginners</strong>: This course moved up 5 positions
        from being the last on the list, to coming after Web Components. There
        are a couple of courses that are hard to place without them feeling like
        extra tack ons. The Sysadmin course, for example, still feels a little
        out of place to me. But that&apos;s not to say they don&apos;t teach
        important things. I moved this course up to be before getting into more
        DevOps heavy courses just to keep it from mixing into that category too
        much.
      </p>
    </StaticBlogLayout>
  );
}

export default RecentCourseUpdates;
