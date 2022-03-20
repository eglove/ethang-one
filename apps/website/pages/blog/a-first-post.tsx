import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

function AFirstPost({ blog }: BlogProperties): JSX.Element {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        It&apos;s been a while since I&apos;ve had a blog. My first was on
        BlogSpot. It contained a story called, &lsquo;The Incredibly Close to
        Being Absolutely True Adventures of Captain Pringle and His Crew.&rsquo;
        On the maybe mostly true but somewhat exaggerated shenanigans of my
        friends and I in high school.
      </p>
      <p>
        Then came the WordPress blog. Simply hosted on BlueHost, or HostGator,
        one of those two. And which got a little more serious. I wrote 20 pages
        a week on what I thought were brilliant observations that the world
        needed to know.
      </p>
      <p>
        I became obsessed with SEO and getting the perfect design that could
        keep readers glued to my long diatribes about life. None of it worked.
        Although I did start to learn more about web development.
      </p>
      <p>
        Eventually, after packing down my WordPress install with way too many
        plugins on a shared server, I got frustrated without how slow its
        performance was getting. Lighthouse scores were not satisfactory. So I
        thought I&apos;d build my own CMS. I bought &lsquo;
        <LinkComponent
          linkProperties={{
            href: 'https://smile.amazon.com/PHP-MySQL-Dynamic-Web-Sites/dp/0134301846',
          }}
        >
          PHP and MySQL for Dynamic Web Sites
        </LinkComponent>
        &rsquo; by Larry Ullman and got to work. The book went over a very
        simple stack. Setting up a SQL database and using PHP to query its data
        directly into HTML with PHP. Then using a series of includes functions
        to pull together a header, footer, and some content. From there it was
        just a matter of formatting the data onto the page. After I built a
        &ldquo;backend&rdquo; that consisted of a few forms to create or update
        blogs and pages, all I had to do was use FileZilla to FTP the files over
        to BlueHost, and presto, I had myself a blog.
      </p>
      <p>
        That site certainly served its purpose. It wasn&apos;t difficult to keep
        load speed times to less than 300ms. And I could do all the fancy SEO I
        wanted without having to install a plugin and have to wait on them for
        updates. It was nice.
      </p>
      <p>
        But fast forward to today, and I want to do more. To have something more
        declarative. To handle the minor details for me as defined by me.
      </p>
      <p>
        Enter Gatsby. A tool I was previously skeptical of. I thought it would
        be very limited and very opinionated. It&apos;s Next.js or bust. But
        after getting more into how it works and what it can do, I&apos;m more
        confident it&apos;s the place my content should call home.
      </p>
      <p>
        With the brilliant, performant way it handles images, its hydration
        capabilities for dynamic content, and its extensibility, it&apos;s an
        obvious choice for my homepage. Add with Sanity as a backend CMS... I
        can just define by schema and generate the create post forms? Sold!
      </p>
      <p>
        And so this is the stack{' '}
        <LinkComponent linkProperties={{ href: '/' }}>ethang.dev</LinkComponent>{' '}
        will live on for the foreseeable future. And where I&apos;ll be writing
        my thoughts on code and fleshing out my portfolio. Expect to see more to
        come. I can&apos;t wait to get to work on refining what&apos;s here.
      </p>
    </StaticBlogLayout>
  );
}

export default AFirstPost;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('a-first-post');
}
