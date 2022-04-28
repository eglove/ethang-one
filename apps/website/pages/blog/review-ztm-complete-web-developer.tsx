import { blogs } from '@ethang/local-database';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

function ReviewZtmCompleteWebDeveloper(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.reviewZtmCompleteWebDeveloper}>
      <p>
        Andrei Neagoi is one of the best instructors out there. But he&apos;s
        not perfect. His Complete Web Developer course is great, and I&apos;d
        say a good course for people first getting started with web development.
        As always Andrei&apos;s presentation skills are exceptional. Although
        his coverage of HTML and CSS basics here feel a bit uninspired,
        there&apos;s no reason someone shouldn&apos;t be able to get through it
        and learn what they need to learn. It&apos;s not boring, but it
        doesn&apos;t get you pumped for HTML, and that&apos;s perfectly fine.
      </p>
      <p>
        This course will give newbies a total rundown on the history of the
        internet, start with HTML and CSS, move into JavaScript and eventually
        cover React. It&apos;s a fantastic, simple course that gives a good
        overview and starting point for a career in web development.
      </p>
      <p>
        This course, however, is starting to age. I&apos;ve always been annoyed
        when courses say they have the &ldquo;2022 update&rdquo; in November of
        2021. But everyone does this. Car models do this. I can&apos;t dock it
        too much. But the course is still using Bootstrap. Bootstrap is still a
        valid tool, even if it isn&apos;t as popular as it used to be. Andrei
        moves into CSS grid and flex later which are the more relevant skills
        today. Getting into those right away may be overwhelming for a new
        developer. Bootstrap is a good thing to use when you need to focus on
        learning HTML and importing external CSS. So again, I can&apos;t knock
        it too much.
      </p>
      <p>
        The problem is when it gets into React. The thing about courses getting
        updates every year and suddenly getting the &ldquo;2022&rdquo; tag in
        their titles, is that it&apos;s usually only 3-4 videos that have
        actually changed. And often those videos are patches that say &ldquo;in
        the next video, do this instead of this because the old version is
        broken&rdquo;. Or worse, just notes in between videos. And
        unfortunately, that&apos;s happening here.
      </p>
      <p>
        To be fair, just because it&apos;s a new year, doesn&apos;t mean
        everything needs to be redone from scratch. But the course itself is
        starting to show its age. The Clarifai API used in one of the projects
        of this course is no longer supported. Andrei added a video to the
        course explaining that it&apos;s OK, the code still works. OK... again,
        fair enough. But the age is starting to get uncomfortable now isn&apos;t
        it?
      </p>
      <p>
        React hooks are not included as part of the normal course. Despite being
        the standard pattern for React for 2 years. Instead, they are tacked on
        at the end as bonus videos while the final project is built with
        classes. Andrei again adds patch videos saying that because you may
        still encounter classes in the wild, they&apos;re worth knowing. Sure,
        but why are hooks at the end as bonus videos? Why not cover both and
        conclude the final project with hooks? Because doing so means
        rerecording. So it all feels a bit lazy at this point, and the course is
        overdue for an overhaul. The course could use a new project or a new API
        to replace Clarifai, and it really should use hooks from the start.
      </p>
      <p>
        Everything here is technically competent, and Andrei&apos;s presentation
        skills make this a worthwhile investment of your time. However, with the
        number of courses out there that have true 2021/2022 updates, those
        courses are more likely to have what aspiring developers need. So, while
        this course will remain on the recommended list as the best first
        development course for newbies, I do feel a responsibility to find
        something else, which I will work on.
      </p>
      <p>
        Because of it&apos;s aging feel, and a lack of ambition from Andrei and
        his team to go the extra mile and make true updates rather than patch
        videos, I have to score Complete Web Developer a 3 out of 5.
      </p>
    </StaticBlogLayout>
  );
}

export default ReviewZtmCompleteWebDeveloper;
