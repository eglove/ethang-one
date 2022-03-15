import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

const TheRecommendedCourses = ({ blog }: BlogProperties): JSX.Element => {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        <LinkComponent
          linkProperties={{ href: 'https://www.ethang.dev/courses' }}
        >
          Recommended Courses
        </LinkComponent>{' '}
        is my attempt to put the best coding courses out there in one list. They
        are put in an order so that someone new to coding can start at the top
        and learn from scratch and end up knowing more than a college degree
        could ever provide.
      </p>
      <p>But to explain how that page is formatted:</p>
      <p>
        First courses marked with a green checkmark ✅ are ones that I&apos;ve
        gone through from start to finish and highly recommend. The
        &ldquo;Courses I&apos;m Looking At&rdquo; ⬜ are courses I&apos;m
        thinking of taking, am currently taking, and am considering for addition
        to the list.
      </p>
      <p>
        Second, instructor names that are highlighted with light green are the
        best instructors I&apos;ve come across. You&apos;ll notice that I always
        look to what they&apos;ve done first and try to fill as much of that
        list as possible with the best instructors.
      </p>
      <p>
        This does not mean, however, that I will always add their courses. There
        is a lot of overlap between Colt Steele and Andrei Neagoie in terms of
        the subjects they cover. But I&apos;ve found that in general, Andrei is
        a better teacher. On the flip side, I may exclude a course from a top
        instructor because it wasn&apos;t their best work or a subject they
        don&apos;t seem to have as much knowledge in. In those cases, I may
        defer to someone else entirely.
      </p>
      <p>
        The last column is the year each course was last updated. While many
        companies are working with old languages and frameworks and don&apos;t
        have the time and resources to update, that doesn&apos;t mean you should
        be spending your time learning old languages and frameworks.
      </p>
      <p>
        In technology, it is important to stay up to date. Not just in new
        languages and frameworks but in best practices and methods. I am looking
        at adding more in-depth looks into things like Agile and DevOps that go
        beyond Andrei&apos;s Complete Junior to Senior Course. Staying up to
        date with methodologies and tools is just as important. As
        technologists, we shouldn&apos;t lock ourselves into doing things one
        way our entire careers, but should always be learning.
      </p>
      <p>
        For that reason, courses that were updated for the current year are
        marked as green. Courses that were updated for last year, yellow, and
        for two years ago red. If you see something older than that, it will be
        marked with black and will most likely be removed from the list very
        soon if the instructor has no planned updates.
      </p>
      <p>
        Last, why is there so much JavaScript? Don&apos;t mind the language.
        Don&apos;t give it a second thought. It&apos;s fine if you want to
        specialize in a particular language that has good career potential. But
        if you isolate yourself to learning one thing, you&apos;re not learning
        enough. I&apos;m working on adding PHP as a first language because I
        believe it has the lowest learning curve and will have you working more
        directly with basic things like HTML and SQL.
      </p>
      <p>
        From there, I&apos;d recommend getting into modern JS and GraphQL
        because it has a slightly higher learning curve and you&apos;ll find
        many companies today moving to that stack.
      </p>
      <p>
        After that, as I mentioned, I will find more courses on DevOps and
        project management-type subjects.
      </p>
      <p>
        I don&apos;t know what happens after that. RealToughCandy freelancing
        course? Get more into algorithms? Java/Spring? It&apos;s hard to tell.
        The list is always expanding, changing, and growing. Its purpose is only
        to provide an up-to-date guide through learning and a resource of the
        best resources available today.
      </p>
    </StaticBlogLayout>
  );
};

export default TheRecommendedCourses;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('the-recommended-courses');
}
