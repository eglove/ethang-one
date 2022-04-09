import { NextLink } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { YouTubeEmbed } from '../../components/common/youtube-embed/youtube-embed';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

function PortfolioRedesign({ blog }: BlogProperties): JSX.Element {
  return (
    <StaticBlogLayout blog={blog}>
      <YouTubeEmbed id="1WGEp3UjnnQ" title="Portfolio Redesign" />
      <p>
        My design sense is simple. Blue and white. Box shadows. That&apos;s it.
        I find a lot of popular designs today to be ugly, difficult to read,
        confusing, and more focused on a sense of look than usability.
      </p>
      <p>
        My design choices tend to be a more &ldquo;modern&rdquo; version of
        something like{' '}
        <NextLink
          linkProperties={{ href: 'http://www.paulgraham.com/articles.html' }}
        >
          Paul Graham&apos;s essays
        </NextLink>
        . I think that page looks far better and is more practical than anything
        I&apos;ve seen on sites like Dribbble.
      </p>
      <p>
        However, I&apos;ve never liked what my portfolio page looked like. So
        with a few simple changes, I moved things to a masonry grid and put more
        focus on images, reducing the amount of text.
      </p>
      <p>
        At the end of the day, I think this type of style pulls attention away
        from the projects themselves and lends itself to being judged on the way
        the page looks visually. Which is not what I want to happen.
      </p>
      <p>
        But I also think it conveys the message of &ldquo;I&apos;ve done a lot
        of stuff, I continue to do a lot of stuff, if you want to know about
        specific projects, ask.&rdquo; Focusing too much on one or two large
        projects takes away from the fact that those large projects don&apos;t
        require every feature.
      </p>
      <p>
        Google Maps, Picture in Picture, games, music and video players, drag
        and drop interfaces, timers... these are things I don&apos;t get to show
        off in big projects.
      </p>
      <p>
        My portfolio page is not the same as projects I might show off on a
        resume, or my GitHub homepage. They are a random assortment of stuff
        I&apos;ve worked on recently.
      </p>
      <p>
        With that, I think it&apos;s completely appropriate to adopt a little
        modern design to shift focus away from technical details, and more into
        showing a bunch of pictures with links.
      </p>

      <p>
        That&apos;s the message I see in modern design, and it works well here.
      </p>
    </StaticBlogLayout>
  );
}

export default PortfolioRedesign;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('portfolio-redesign');
}
