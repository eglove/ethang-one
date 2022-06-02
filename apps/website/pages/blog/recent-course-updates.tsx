import { blogs } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

function RecentCourseUpdates(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.recentCourseUpdates}>
      <h2>June 2022</h2>
      <p>
        Every month changes to the{' '}
        <NextLink linkProperties={{ href: '/courses' }}>
          recommended courses
        </NextLink>{' '}
        list will be listed here. Because it can take two or more years to go
        through this course list, if you want to commit to the current version,
        you can{' '}
        <NextLink
          linkProperties={{
            href: 'https://drive.google.com/file/d/1EZMNkMMsBJLpPsYuCU1XCmsJhcpH8Hkf/view?usp=sharing',
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
        <strong>CSS for JavaScript Developers</strong>: I was very impressed by
        this course and the level of detail it goes into CSS. I consider myself
        able to get the job done with CSS. I know to keep it simple and scoped
        and there&apos;s not much I can&apos;t do with it. But that doesn&apos;t
        mean I had ever heard of margin collapse before. I definitely
        didn&apos;t know layout algorithms were a thing. That explained so much
        for me. I was a little disappointed by how each module followed the
        same, uninteresting formula. You can{' '}
        <NextLink
          linkProperties={{ href: '/blog/review-css-javascript-developers' }}
        >
          read my full review here
        </NextLink>
        , but this is still the best course for CSS out there.
      </p>
      <p>
        <strong>DevOps Bootcamp: Terraform</strong>: Terraform has to be one of
        the cooler ways of managing cloud resources. Declarative markup to
        deploy, destroy and manage resources on all the major cloud platforms,
        and many others. The course is well presented, it will definitely get
        you started and thinking about infrastructure as code.
      </p>
      <h2>Courses Removed</h2>
      <p>
        <strong>Agile & Scrum for Product Owners</strong>: This course was only
        removed because it&apos;s a near word for word copy of Scrum for
        Beginners. When I initially looked at these two I thought they would be
        very different, and continued to tell myself that when I originally
        recommended both. But if I&apos;m being honest, you only need one. And
        considering this list is for developers, you may as well go with the one
        that seems to be titled more for developers.
      </p>
    </StaticBlogLayout>
  );
}

export default RecentCourseUpdates;
