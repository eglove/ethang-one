import { NextLink } from '@ethang/react-components';
import { JsonLd } from 'react-schemaorg';
import { Review } from 'schema-dts';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { blogs } from '../../db/data/blogs/blogs';

function ReviewAccessibilityForEveryone(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.reviewAccessibilityForEveryone}>
      <JsonLd<Review>
        item={{
          '@context': 'https://schema.org',
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Ethan Glover',
          },
          creator: 'Amy Kapernick',
          itemReviewed: {
            '@type': 'Course',
            image: blogs.reviewAccessibilityForEveryone.featuredImage.url,
            name: 'Accessibility For Everyone',
          },
          name: blogs.reviewAccessibilityForEveryone.title,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '4',
          },
        }}
      />
      <p>
        Accessibility should not be a separate course. It doesn&apos;t need to
        be a separate course. At the end of the day it is no different and no
        more complicated than development itself. Learning accessibility should
        be a part of learning HTML and CSS.
      </p>
      <p>
        But that&apos;s not how it is. Most courses ignore the subject entirely.
        And we&apos;re left with developers who never bother because they never
        learned the basics.
      </p>
      <p>
        Personal rants aside, Amy Kapernick is here to save the day. This course
        is a simple, fast, but has thorough enough coverage of the basics to get
        started with accessibility. There are points through the course where it
        seems Amy sounds a bit tired of talking, I think she could put more
        effort into bringing some energy to the subject. A good, positive
        attitude can be infectious for a subject. But she speaks clearly, has a
        sensible curriculum and it&apos;s plenty to get the job done.
      </p>
      <p>
        The course itself could probably be more in-depth, it still seems as if
        when most developers go through this course the lessons taught likely
        won&apos;t stick. I don&apos;t know if this is the fault of this
        particular course or the fault of bigger, more exciting courses for not
        handling accessibility issues throughout all of their projects.
      </p>
      <p>
        But I think this is fair to keep in mind. If this course were given more
        meat, maybe had an auditing project to follow along with, it would have
        more appeal.
      </p>
      <p>
        But the knowledge is competent, Amy is a good presenter, and this
        information is very much needed. I give Amy Kapernick&apos;s{' '}
        <NextLink
          linkProperties={{
            href: 'https://leveluptutorials.com/tutorials/accessibility-for-everyone/',
          }}
        >
          Accessibility For Everyone
        </NextLink>{' '}
        a 4 out of 5.
      </p>
    </StaticBlogLayout>
  );
}

export default ReviewAccessibilityForEveryone;
