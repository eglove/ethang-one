import { blogs } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';
import { JsonLd } from 'react-schemaorg';
import { Review } from 'schema-dts';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

function ReviewGoProgrammingCompleteGuide(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.reviewGoProgrammingCompleteGuide}>
      <JsonLd<Review>
        item={{
          '@context': 'https://schema.org',
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Ethan Glover',
          },
          creator: 'Jayson Lennon',
          itemReviewed: {
            '@type': 'Course',
            image: blogs.reviewGoProgrammingCompleteGuide.featuredImage.url,
            name: "Go Programming Language (Golang): A Complete Developer's Guide",
          },
          name: blogs.reviewGoProgrammingCompleteGuide.title,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '2',
          },
        }}
      />
      <p>
        Zero To Mastery hasn&apos;t been doing well. Ever since Andrei Neagoie
        decided to make ZTM more than just his courses, quality has been
        dropping with every new course.
      </p>
      <p>
        Jayson Lennon is the instructor behind the newest Rust and Go courses
        and the formula for both is the same. He reads off some powerpoint
        slides describing the code he&apos;s about to write. Then in the next
        video he writes that code. The code, by the way, never applies to an
        application it&apos;s just simple examples to cover basic concepts.
      </p>
      <p>
        It&apos;s like watching someone read the documentation and typing it
        out. It doesn&apos;t make sense. Imagine if this is how you learned a
        new language. You visit the documentation website. Read a paragraph,
        then type it into an editor. Then move on. It&apos;s not only a slow and
        boring way to read docs, but it&apos;s not a useful strategy.
      </p>
      <p>
        For people who learn best by video, this is not helpful. For people who
        learn best by reading text, they&apos;re better off reading the
        documentation. This course doesn&apos;t seem to be for anyone.
      </p>
      <p>
        The courses that make it to my recommended list and get a 5 out of 5
        rating are taught by charismatic, experienced devs and usually
        intelligently integrate concepts into large projects.
      </p>
      <p>
        For the conceptual courses like Advanced JavaScript or Stephen
        Grider&apos;s TypeScript course, the concepts are still covered in code.
        Always explained in the context of code you might actually write.
      </p>
      <p>
        By the time I got to the mid point of Lennon&apos;s Go course I
        didn&apos;t feel like I was learning anything. To be fair, this course
        is obviously geared towards people learning to program for the very
        first time. All of ZTM&apos;s language courses are. There is simply
        nothing for intermediate to advanced developers beyond vanilla
        JavaScript.
      </p>
      <p>
        But even for a beginner, this is the classic example of the sort of
        course that leaves people bored and unmotivated. Because the course
        itself is boring and unmotivated.
      </p>
      <p>
        It&apos;s disappointing, but as someone who once dropped $800 on a
        lifetime membership to Zero To Mastery, I have to start recommending to
        avoid the site altogether. Get the few good courses they have on Udemy,
        don&apos;t waste your time on the subscription.
      </p>
      <p>
        There&apos;s not a lot of Go courses out there, and this may be good
        enough if you HAVE to learn Go right now. Because of that, Jayson
        Lennon&apos;s{' '}
        <NextLink
          linkProperties={{
            href: 'https://academy.zerotomastery.io/p/learn-golang',
          }}
        >
          Go Programming Language (Golang): A Complete Developer&apos;s Guide
        </NextLink>{' '}
        get&apos;s a 2 out of 5.
      </p>
    </StaticBlogLayout>
  );
}

export default ReviewGoProgrammingCompleteGuide;
