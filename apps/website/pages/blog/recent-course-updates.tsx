import { NextLink } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { blogs } from '../../db/data/blogs/blogs';

function RecentCourseUpdates(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.recentCourseUpdates}>
      <h2>April 2022</h2>
      <p>
        Every month changes to the{' '}
        <NextLink linkProperties={{ href: '/courses' }}>
          recommended courses
        </NextLink>{' '}
        list will be listed here. Because it can take two or more years to go
        through this course list, if you want to commit to the current version,
        you can{' '}
        <NextLink
          linkProperties={{ href: '/documents/Development_Curriculum.pdf' }}
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
        <strong>CompTIA A+ Core 1 & 2</strong>: These two courses are built for
        people wanting to get into IT technical support, it&apos;s not meant for
        developers. But I also believe the content covered is very important.
        You should be familiar with various operating systems, virtual machines,
        basic networking and a lot of the subjects covered here. Personally I
        think the CompTIA certifications themselves are a waste of time but of
        course the pursuit of certifications are always your decision to make.
      </p>
      <p>
        <strong>SEO Training Masterclass</strong>: SEO isn&apos;t covered very
        often, and when it is, it&apos;s not very well covered. When you get
        into Next.js you will find very lackluster explanations of
        &ldquo;SEO&rdquo; that center around static generation and title tags.
        SEO is more than that. And every web dev should have an understanding of
        schema markup, link building and site structure. This course will cover
        all of those and more in a great detail.
      </p>
      <p>
        <strong>SCRUM for Beginners / Agile & SCRUM for Product Owners</strong>:
        As you get into your first development positions you&apos;ll pick up the
        general idea of what Agile and SCRUM are. Every company has a different
        interpretation of what it is. But learning these things officially from
        the Agile Manifesto can really help you make better decisions if you
        find yourself in a SCRUM master or product owner role.
      </p>
      <h2>Courses Removed</h2>
      <p>
        <strong>Complete Junior To Senior Web Developer</strong>: This is a
        great course. But it doesn&apos;t cover any one topic to any decent
        depth. You&apos;ll learn very basic performance analysis in the new SEO
        course and get into better performance analysis in Epic React. With
        CI/CD you&apos;ll pick up how to get started with GitHub automation and
        I&apos;m currently looking at a new Terraform course. As this list
        grows, this course has simply been replaced. For each particular topic
        that&apos;s covered in Junior to Senior, you will either find entire
        courses, or more in depth explorations of that topic in other courses
        here.
      </p>
      <p>
        <strong>Complete Web & Mobile Designer</strong>: Similar to Complete
        Junior to Senior, this course just isn&apos;t detailed enough to remain
        on this list. This list is also for development, not design. I would
        love to find a good UX course that more developers could learn from. But
        Complete Web & Mobile Designer is more about using tools like Figma and
        really doesn&apos;t provide a lot of overlap with what&apos;s here.
        It&apos;s just out of place here. If I can find something on advanced
        CSS, maybe on building HTML5 games I think that would be a more
        appropriate subject for this list.
      </p>
    </StaticBlogLayout>
  );
}

export default RecentCourseUpdates;
