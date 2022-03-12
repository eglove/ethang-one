import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { BlogProperties, blogQuery } from '../../util/query';

const ReviewWebDeveloperBootcamp = ({ blog }: BlogProperties): JSX.Element => {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        Sixty-three and a half hours of web development goodness.{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
          }}
        >
          Colt Steele&apos;s Web Developer Bootcamp
        </LinkComponent>{' '}
        is the essential course to get started with all the foundation skills
        needed to be a web developer. Starting with a quick explanation of how
        the web works, this course will get into HTML, CSS, JavaScript, MongoDB,
        Node, and finish off with a huge, full-stack project and how to deploy
        it online. There&apos;s no React or JavaScript framework, instead just
        HTML templating with EJS. I think this is a good choice for a first jump
        into web development. It&apos;s important to understand HTML properly
        before jumping into programmatically writing it with a UI framework. A
        lot of professional developers don&apos;t know how basic HTML and CSS
        works today. So the level of detail this course covers is an amazing
        sigh of relief. React is something that needs to be studied on it&apos;s
        own after you&apos;ve mastered the basics, and that&apos;s what this
        course can provide.
      </p>
      <p>
        Not much time is spent on HTML but as long as you understand the basics
        up to semantic elements, you know everything you need to get started
        with development, and that&apos;s what this course covers. Similarly,
        where a lot of courses and schools are VERY lacking in CSS, this course
        covers everything you need to know. Not just basic styling, but
        selectors, pseudo-classes, the cascade, specificity, inheritance, the
        box model, transitions, flex, grid, and everything in between. All
        BEFORE getting into Bootstrap. Where a lot of courses will just have you
        download a bootstrap template and call that &ldquo;knowing CSS.&rdquo;
      </p>
      <p>
        I had a Bootcamp instructor embarrassingly tell students, &ldquo;This is
        how you do it in the real world, you download a template and change the
        text.&rdquo; I beg to differ. Most professional developers are working
        primarily with vanilla CSS today. No company with an interest in
        building their own brand wants some cookie-cutter template off the
        internet. CSS is an important skill to have and it should not be glossed
        over.
      </p>
      <p>
        As the course gets into JavaScript, it covers basic programming. Native
        types, if-else, switch, loops, objects, functions, etc. All of this
        stuff is covered with enough detail that even a total noob to
        programming can pick it up easily. Eventually, the course gets into
        building a Node server with Express, building a Mongo database, a CRUD
        API, using middleware for logging, error handling, data validation, data
        relationships, express routing, cookies, sessions, authentication,
        authorization, working with third-party API&apos;s, database seeding, a
        short summary of common security issues, and finally deployment. WOO!
        That&apos;s a lot of code.
      </p>
      <p>
        I&apos;ve had to go through a LOT of courses to cover all of these
        topics individually. I&apos;ve never seen a course more robust and
        complete. Colt Steele&apos;s delivery and pacing are great, he&apos;s
        not too boring, he doesn&apos;t talk to you like a child, and he
        explains everything thoroughly enough that anyone can understand.
      </p>
      <p>
        I wish I had this course when I was first starting out. I get excited
        just thinking about how much further it could take someone in a shorter
        amount of time. If you&apos;re just getting started with web
        development, this is THE course to take. This one is an easy 5 out of 5.
      </p>
    </StaticBlogLayout>
  );
};

export default ReviewWebDeveloperBootcamp;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  const blog = await blogQuery('review-web-developer-bootcamp');

  return {
    props: {
      blog,
    },
  };
}
