import { NextLink } from '@ethang/react-components';
import { JsonLd } from 'react-schemaorg';
import { Review } from 'schema-dts';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

function ReviewMikeMeyersAPlus({ blog }: BlogProperties): JSX.Element {
  return (
    <StaticBlogLayout blog={blog}>
      <JsonLd<Review>
        item={{
          '@context': 'https://schema.org',
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Ethan Glover',
          },
          creator: 'Mike Meyers',
          itemReviewed: {
            '@type': 'Course',
            image: blog.featuredImage.image.downloadUrl,
            name: 'TOTAL: CompTIA A+ Certification',
          },
          name: blog.title,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
        }}
      />
      <p>
        CompTIA exams get a lot of criticism. And I&apos;m one of the people who
        will tell you that they&apos;re not worth your time. You can apply to
        200 jobs in the time it takes to pass one low level exam. The minor
        advantage certifications give you in getting to the top of a resume
        stack, are just not worth the investment. That goes doubly so for
        CompTIA. Mostly because these exams are meant for IT support
        technicians, not developers.
      </p>
      <p>
        So why am I talking about CompTIA A+ courses here? For people first
        getting into programming the material is valuable. If you don&apos;t
        know about TCP/IP, file systems and terminals for different operating
        systems, virtual boxes and user management, you&apos;ll want to take
        these courses.
      </p>
      <p>
        You may have at one point seen a t-shirt that says something like,
        &ldquo;Yes, I&apos;m a programmer. No, I can&apos;t fix your
        computer.&rdquo; I&apos;m not saying that should change. IT support and
        development are two very different specializations. But I do think
        developers should be familiar with the hardware they&apos;re working on
        and have the basic knowledge that CompTIA covers. Besides, this course
        can even help you make better decisions in building your programmer by
        day, gamer by night rig.
      </p>
      <p>
        Mike Meyers&apos; is a great presenter. Watching his courses reminds me
        of watching TechTV when I was a kid. It&apos;s interesting, he&apos;s a
        fun guy to listen to. In terms of the level of detail on each topic, it
        is supposed to be a basic overview for a basic exam. And it&apos;s a
        perfect level of depth for developers.
      </p>
      <p>
        This review covers two courses, the Core 1 and Core 2 videos cover two
        different exams. In taking both you&apos;ll see some similarities
        between the two. In fact the intro sections are copies. But the courses
        do cover different material for the same topics. I wish the similar
        sections for these two were combined, but I&apos;m not going to knock
        the courses for that. As they are made for people trying to pass two
        separate exams.
      </p>
      <p>
        These courses are the perfect place to start getting a familiarity with
        the hardware, software and networking you&apos;ll use as a developer. I
        don&apos;t advise wasting time on exams, but that decision is up to you.
        Because of the quality of presentation and level of knowledge presented,
        I give Mike Meyers&apos; TOTAL: CompTIA A+ Certification{' '}
        <NextLink
          testId="course-url"
          linkProperties={{
            href: 'https://www.udemy.com/course/new-comptia-a-2019-certification-1001-the-total-course/',
          }}
        >
          Core 1
        </NextLink>{' '}
        and{' '}
        <NextLink
          linkProperties={{
            href: 'https://www.udemy.com/course/new-comptia-a-2019-certification-1002-the-total-course/',
          }}
        >
          Core 2
        </NextLink>{' '}
        a 5 out of 5.
      </p>
    </StaticBlogLayout>
  );
}

export default ReviewMikeMeyersAPlus;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('review-mike-meyers-a-plus');
}
