import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { BlogProperties, blogQuery } from '../../util/query';

const ReviewLearningToLearn = ({ blog }: BlogProperties): JSX.Element => {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        Learning to Learn is the perfect first course. Most people wouldn&apos;t
        give something with that title much attention, but getting started with
        learning code without taking some time to figure out how you&apos;re
        going handle it is a big mistake in my opinion. Learning to Learn covers
        topics like the Feynman Technique, chunking, trunking, the Method of
        Loci, framing, focus vs. diffuse states, and much more. Knowing about
        and using these methods is the perfect way to make sure you&apos;re
        learning as efficiently as possible.
      </p>
      <p>
        The instructor Andrei Neagoie is one of the best course presenters
        I&apos;ve come across. His pacing, voice, and passion are all on a
        perfect level. He doesn&apos;t drone on in a monotone voice, he
        doesn&apos;t sound like he wishes he weren&apos;t there and he can keep
        you engaged the whole way through.
      </p>
      <p>
        This course brings together information from a lot of sources in a
        smooth and coherent manner that paints a clear picture and gives the
        student the ability to build their own path forward. That is not an easy
        thing to pull off. Andrei smartly covers and dismisses fallacy-like
        learning techniques such as the 10,000 hours rule and brings together
        the ones that you can implement and see the effects of today.
      </p>
      <p>
        There&apos;s no other course like this on this level. Finding something
        similar will get you uninspired drivel of people reading off Wikipedia
        and bragging about how smart they are. (And to be fair, Andrei does a
        lot of bragging about how smart he is in this course.){' '}
      </p>
      <p>
        I highly recommend this course for everyone, whether or not you like the
        idea of &ldquo;learning to learn&rdquo;, or no matter the subject
        you&apos;re aiming to learn, you will get something positive out of
        this.
      </p>
      <p>5/5</p>
    </StaticBlogLayout>
  );
};

export default ReviewLearningToLearn;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  const blog = await blogQuery('review-learning-to-learn');

  return {
    props: {
      blog,
    },
  };
}
