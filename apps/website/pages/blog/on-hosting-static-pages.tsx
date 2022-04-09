import { gql } from '@apollo/client';
import { NextLink } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { ImageContainer } from '../../components/common/image-container/image-container';
import { Data, Image } from '../../graphql/types';
import { BlogProperties, blogQuery } from '../../util/query';
import { apolloClient } from '../_app';

interface OnHostingStaticPagesProperties extends BlogProperties {
  images: Record<string, Image>;
}

export function OnHostingStaticPages({
  blog,
  images,
}: OnHostingStaticPagesProperties): JSX.Element {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        I&apos;ve jumped around between different methods of creating static
        websites. Jekyll, Hugo, Gatsby, Sanity, Keystone, Contentful, Wordpress,
        etc. I can&apos;t count how many times I&apos;ve had to copy paste data
        from one platform to another only to be disappointed by the features.
      </p>
      <p>
        When using some sort of rich text markup editor, there&apos;s always an
        issue of parsing. I remember Sanity portable text being a nightmare when
        it initially released. Although I believe it&apos;s gotten much better.
      </p>
      <p>
        There&apos;s a wide flavor of methods for using markdown flavored
        editors. But I&apos;m going to say something controversial. I don&apos;t
        really like Markdown.
      </p>
      <p>
        So in the past I&apos;ve always stored HTML as text on a database and
        used something like{' '}
        <NextLink
          linkProperties={{
            href: 'https://www.npmjs.com/package/react-html-parser',
          }}
        >
          react-html-parser
        </NextLink>{' '}
        to parse it on the page. Then it&apos;s just a matter of using server
        side rendering to make things SEO friendly.
      </p>
      <p>
        But that still leaves me with having to build an API. And the last thing
        I want to do is build a CMS for a site I only maintain for fun.
        That&apos;s way too many forms.
      </p>
      <p>
        Something like Contentful is nice, it gives you the GUI editors, the
        storage and the API. But there are tradeoffs. You can&apos;t directly
        embed a YouTube video, for example. You don&apos;t get as much control
        over the structure of your data as you do with your own database. And of
        course there&apos;s the matter of what if I want to switch to something
        new? Can&apos;t exactly transfer that data to the next thing, can I?
      </p>
      <p>
        Today I&apos;ve finally thought of a solution. HTML. Not storing it,
        just writing it, and writing it directly into my code. I know, sounds
        horrible, so many things wrong with that right? But I thought I&apos;d
        give it a go. Here&apos;s what I&apos;ve come up with so far and why I
        think it may be more viable than it sounds.
      </p>
      <p>
        First I set up TypeScript classes as &ldquo;Models&rdquo; to represent
        my data, I even created a singleton to represent me as an author:
      </p>
      <ImageContainer
        imageProperties={{
          alt: images.cl0n8s8sv02e309mkcnpt5bbx.altText,
          height: images.cl0n8s8sv02e309mkcnpt5bbx.height,
          src: images.cl0n8s8sv02e309mkcnpt5bbx.image.downloadUrl,
          width: images.cl0n8s8sv02e309mkcnpt5bbx.width,
        }}
      />
      <p>
        With the models set up I can create an object dictionary with a slug as
        a key and metadata as the value. For reference I created an enum to
        represent the slug. This helps me keep slugs unique and gives me a short
        reference to each one.
      </p>
      <ImageContainer
        imageProperties={{
          alt: images.cl0n8vvrb01uw09jp3p1j1pye.altText,
          height: images.cl0n8vvrb01uw09jp3p1j1pye.height,
          src: images.cl0n8vvrb01uw09jp3p1j1pye.image.downloadUrl,
          width: images.cl0n8vvrb01uw09jp3p1j1pye.width,
        }}
      />
      <p>
        From there, all I had to do was recreate a layout that accepts the slug
        as a prop and start writing the content as a child component.
      </p>
      <ImageContainer
        imageProperties={{
          alt: images.cl0n8xlen062q09kz0r9o0tc2.altText,
          height: images.cl0n8xlen062q09kz0r9o0tc2.height,
          src: images.cl0n8xlen062q09kz0r9o0tc2.image.downloadUrl,
          width: images.cl0n8xlen062q09kz0r9o0tc2.width,
        }}
      />
      <ImageContainer
        imageProperties={{
          alt: images.cl0n8y1w2022y09l3byy7a4hu.altText,
          height: images.cl0n8y1w2022y09l3byy7a4hu.height,
          src: images.cl0n8y1w2022y09l3byy7a4hu.image.downloadUrl,
          width: images.cl0n8y1w2022y09l3byy7a4hu.width,
        }}
      />
      <p>
        As to the question of how to get all blogs for the home page, it&apos;s
        as simple as using Object.getOwnPropertyNames on that enum I created
        before:
      </p>
      <ImageContainer
        imageProperties={{
          alt: images.cl0n8yk5t006609kt30coe7ea.altText,
          height: images.cl0n8yk5t006609kt30coe7ea.height,
          src: images.cl0n8yk5t006609kt30coe7ea.image.downloadUrl,
          width: images.cl0n8yk5t006609kt30coe7ea.width,
        }}
      />
      <p>
        That&apos;s it, Emmet means I don&apos;t really have to write much HTML
        and ESLint/Prettier keeps me from having to deal with long lines.
        It&apos;s really not much extra effort than typing into an editor. Plus,
        I don&apos;t have to worry about weird markup languages, video support
        or dealing with an API. Just add a new blog object with some metadata,
        create a file with NextJS file based routing, and start typing. I can
        even use hot reload to see how my content looks on the page. For static
        content, I can just write static content. I don&apos;t know why I
        didn&apos;t think of this before.
      </p>
      <p>
        When I first built my site in React it was exciting, and with every new
        tool I did a rewrite, that was fun. But now I want to move on to
        different kinds of projects. And I&apos;d like to talk about them here.
        What I don&apos;t want to do is have to worry about not having a CMS or
        needing to move to new tools. I just want to be able to host on Vercel
        and move on.
      </p>
      <p>
        I&apos;ll be migrating all of my previous posts over to this format.
        Which realistically won&apos;t take nearly as long as it took to move it
        from Sanity to my own database. I&apos;ll shut down the Digital Ocean
        DB, close the Hasura account, stop trying to figure out how to generate
        GraphQL types from generated Prisma schema (way harder than it sounds)
        and move on to learning new stuff. I know React, I know API&apos;s, I
        know SEO and building content sites. I don&apos;t want to be spending
        much time on those things. But I&apos;m glad I&apos;ll get to keep the
        content flowing.
      </p>
    </StaticBlogLayout>
  );
}

export default OnHostingStaticPages;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: OnHostingStaticPagesProperties;
}> {
  const blog = await blogQuery('on-hosting-static-pages');
  const { data: imageData } = await apolloClient.client.query<Data>({
    query: gql`
      query ImagesQuery {
        imagesList(
          filter: {
            id: {
              in: [
                "cl0n8s8sv02e309mkcnpt5bbx"
                "cl0n8vvrb01uw09jp3p1j1pye"
                "cl0n8xlen062q09kz0r9o0tc2"
                "cl0n8y1w2022y09l3byy7a4hu"
                "cl0n8yk5t006609kt30coe7ea"
              ]
            }
          }
        ) {
          items {
            id
            altText
            height
            image {
              downloadUrl
            }
            width
          }
        }
      }
    `,
  });

  const images = {};
  for (const image of imageData.imagesList.items) {
    images[image.id] = image;
  }

  return {
    props: {
      blog,
      images,
    },
  };
}
