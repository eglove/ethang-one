import { blogs, courses } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

function ReviewGitGithubBootcamp(): JSX.Element {
  return (
    <StaticBlogLayout
      blog={blogs.reviewGitGithubBootcamp}
      courseReviewed={courses.gitAndGithubBootcamp}
    >
      <p>
        There isn&apos;t much to say about Colt Steele&apos;s{' '}
        <NextLink
          linkProperties={{
            href: 'https://www.udemy.com/course/git-and-github-bootcamp/',
          }}
        >
          Git &amp; GitHub Bootcamp
        </NextLink>{' '}
        other than that it&apos;s necessary. Git is another one of those
        everyday skills every developer needs to know, but sadly, most
        developers never take the time to learn properly. This course will take
        you beyond add, commit and push. It will explain the weird parts of git
        (like HEAD and how it works under the hood), cover visualizing diffs,
        stashing, amending, restore, reset, revert, SSH (for GitHub), managing
        conflicts, reflog, tagging, and my all-time favorite, interactive
        rebase. Learning all of these will make sure that as a developer, you
        can pull yourself out of any tricky situation and make sure you&apos;re
        handling version control correctly. It will put you ahead of most
        professional developers on git and put you in a position where
        you&apos;ll never fear any version control scenario again. I think this
        is the best Git course out there. Colt Steele&apos;s delivery is as
        always not the most exciting, but good enough to keep you engaged.
        Because of this courses position as the best course out there on Git, I
        give it a 5 out of 5.
      </p>
    </StaticBlogLayout>
  );
}

export default ReviewGitGithubBootcamp;
