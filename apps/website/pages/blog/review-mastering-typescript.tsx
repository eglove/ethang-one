import { allImages, blogs } from '@ethang/local-database';
import { NextImageComponent, NextLink } from '@ethang/react-components';
import { JsonLd } from 'react-schemaorg';
import { Review } from 'schema-dts';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

function ReviewMasteringTypescript(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.reviewMasteringTypeScript}>
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
            image: blogs.reviewMasteringTypeScript.featuredImage.url,
            name: 'Mastering TypeScript',
          },
          name: blogs.reviewMasteringTypeScript.title,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '4',
          },
        }}
      />
      <p>
        Colt Steele is, as always, a great teacher. He is likely the most
        approachable instructor I know for beginners. While I really like
        Stephen Griders&apos; TypeScript course due to its focus on design
        patterns, it never felt like a proper, easy introduction to TypeScript.
        I think that&apos;s exactly what this course provides. But is it needed?
      </p>
      <p>
        This course introduces you to TypeScript as a language and how to use
        it. And to be honest, you could do this yourself after you&apos;ve
        learned JavaScript. If you know JS well, do you really need a course to
        explain TS&apos;s simple syntax? Likely, at this point, you&apos;re ok
        with referencing documenation as you go.
      </p>
      <p>
        That&apos;s my only small gripe with this course. I feel like it could
        have gone more in depth on how to REALLY take advantage of TS beyond
        basic type safety. As mentioend before I&apos;m not sure JavaScript
        developers need such a beginner level course on TypeScript. And if you
        don&apos;t know JavaScript, you probably shouldn&apos;t start with
        TypeScript.
      </p>
      <p>
        I feel like Colt had an opportunity to take things to a more advanced
        level than most of his courses. Maybe get into writing and reading
        complex types. At the end of the day this is a very basic overview of
        types, enums, classes and generics. Type safety to it&apos;s most basic
        level.
      </p>
      <p>
        How do you add type definitions to a third party library that
        doesn&apos;t have them? What about TypeScript&apos;s utility types? What
        the hell is this supposed to be?
      </p>
      <NextImageComponent image={allImages.blogImages.typescriptAdvancedType} />
      <p>
        I feel like anyone prepared to learn TypeScript are likely to be
        disappointed with the basic rundown this course provides. But the course
        is well done and well taught. So I can&apos;t knock it too much.
        That&apos;s why I give{' '}
        <NextLink
          linkProperties={{
            href: 'https://www.udemy.com/course/learn-typescript/',
          }}
        >
          Colt Steele&apos;s Mastering TypeScript
        </NextLink>{' '}
        a 4 out of 5.
      </p>
    </StaticBlogLayout>
  );
}

export default ReviewMasteringTypescript;
