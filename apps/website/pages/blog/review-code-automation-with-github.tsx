import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { BlogProperties, blogQuery } from '../../util/query';

const ReviewCodeAutomationWithGithub = ({
  blog,
}: BlogProperties): JSX.Element => {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        Andrei Neagoie&apos;s Complete Junior to Senior course does a great job
        of covering a lot of topics. Including automating tests with CI/CD
        through CircleCI. However, a lot of people have been moving away from
        tools like CircleCI in favor of GitHub actions.
      </p>
      <p>
        You might not be using GitHub at work and instead using GitLab or
        BitBucket, but GitHub actions are the best way to handle CI today. Most
        tasks can be done by grabbing an action of the marketplace and plugging
        it in to a YML file.
      </p>
      <p>
        Brian Douglas&apos; course takes one small step forward by going over
        how to code your own GitHub apps and actions. Which can help you develop
        custom solutions for the repositories you manage.
      </p>
      <p>
        The course itself feels pretty basic. You won&apos;t be building a big
        pipeline. Rather, this is just a short overview of what you can do and
        how to do it. That&apos;s generally ok for the subject but I would have
        liked to see something more robust.
      </p>
      <p>
        Brian&apos;s delivery sometimes comes off as unprepared as he has to
        double back on his own words a lot and I would have like a summary of
        what he was going to cover from the start. As I watched through the
        videos I had no idea where things were going or if this whole endeavor
        would even be worth my time.
      </p>
      <p>
        But if you&apos;re not already familiar with GitHub actions I definitely
        recommend this course. That&apos;s why I&apos;m giving Brian
        Douglas&apos; Code Automation With GitHub a 4 out of 5.
      </p>
    </StaticBlogLayout>
  );
};

export default ReviewCodeAutomationWithGithub;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  const blog = await blogQuery('review-code-automation-with-github');

  return {
    props: {
      blog,
    },
  };
}
