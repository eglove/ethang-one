import { NextLink } from '@ethang/react-components';
import { JsonLd } from 'react-schemaorg';
import { Review } from 'schema-dts';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { BlogProperties, blogQuery } from '../../util/query';

const ReviewLinuxCommandLineBootcamp = ({
  blog,
}: BlogProperties): JSX.Element => {
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
          creator: 'Colt Steele',
          itemReviewed: {
            '@type': 'Course',
            image: blog.featuredImage.image.downloadUrl,
            name: 'The Linux Command Line Bootcamp: Beginner To Power User',
          },
          name: blog.title,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
        }}
      />
      <p>
        Colt Steele has a talent for approaching boring topics. It&apos;s easier
        to create a fun and exciting course when it&apos;s writing out small
        portfolio projects or doing an ecommerce store. But Git and the Linux
        Command line are not exactly exciting. Colt&apos;s{' '}
        <NextLink linkProperties={{ href: '/blog/review-git-github-bootcamp' }}>
          Git & Github Bootcamp course
        </NextLink>{' '}
        is the course to take on Git and now, his Linux Command Line Bootcamp is
        the course to take on the subject.
      </p>
      <p>
        Without a doubt the course will be going on my recommended list.
        However, it may seem odd how low on that list it will be placed. I will
        not be recommending to learn the linux command line early as I do with
        Postman and Git. The reason is simple, get used to working with Windows
        tools (PowerShell) and a proper IDE first.
      </p>
      <p>
        Courses on that list will help with what&apos;s needed for the course.
        Advanced usage of the linux command line will not become relevant until
        you&apos;re working with Docker images and CI/CD. Until then, don&apos;t
        worry about Linux at all.
      </p>
      <p>
        With that note out of the way, Colt Steele&apos;s consistent high
        performance in presentation and the in depth, knowledgeable coverage of
        the linux command line means{' '}
        <NextLink
          linkProperties={{
            href: 'https://www.udemy.com/course/the-linux-command-line-bootcamp/',
          }}
        >
          The Linux Command Line Bootcamp
        </NextLink>{' '}
        gets a 5 out of 5.
      </p>
    </StaticBlogLayout>
  );
};

export default ReviewLinuxCommandLineBootcamp;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  const blog = await blogQuery('review-linux-command-line-bootcamp');

  return {
    props: {
      blog,
    },
  };
}
