import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { blogSlug } from '../../database/data/blogs';

const IsDarrylPerryMakingIdeologicalProgress = (): JSX.Element => {
  return (
    <StaticBlogLayout slug={blogSlug.darrylPerry}>
      <p>
        Darryl Perry has been one of those few libertarian activists who stick
        around Keene, NH. While others leave after recognizing the
        movement&apos;s poor and destructed state, a small few Free Keeners
        won&apos;t quit.
      </p>
      <p>
        I was both pleasantly surprised and confused when I saw Perry&apos;s
        latest post to Free Keene. &lsquo;
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904074919/https://freekeene.com/2018/02/04/an-open-letter-to-libertarians/',
          }}
        >
          An Open Letter to Libertarians.
        </LinkComponent>
        &rsquo; It&apos;s a short, disjointed four paragraphs. The text is
        contradictory and meaningless. But it might be a good sign for the
        mindset of Darryl.
      </p>
      <p>Each of the four paragraphs can be summarized as such:</p>
      <ol>
        <li>
          On the internet anyone can express their views, but this opens the
          door to fake news and clickbait.
        </li>
        <li>
          Getting into every argument that comes your way may not be a good
          idea.
        </li>
        <li>
          Arguing doesn&apos;t do a lot of good when considering the backfire
          effect.
        </li>
        <li>
          Use physical means of activism, instead of online, to educate voters
          about your beliefs.
        </li>
      </ol>
      <p>
        Darryl is on, or near, the same track I was when I wrote a few pieces
        for Free Keene. I wrote about how to{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904074919/https://cognitame.com/blog.php?id=51',
          }}
        >
          solve the image problem of libertarians
        </LinkComponent>
        . How to{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904074919/https://cognitame.com/blog.php?id=138',
          }}
        >
          win an argument online
        </LinkComponent>
        . How to{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904074919/https://cognitame.com/blog.php?id=141',
          }}
        >
          persuade others with moral reframing
        </LinkComponent>
        . And how to{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904074919/https://cognitame.com/blog.php?id=142',
          }}
        >
          cure bias with curiosity
        </LinkComponent>
        .
      </p>
      <p>
        The intention of Darryl here doesn&apos;t seem to be learning. Rather,
        it&apos;s more about increasing the status of libertarians. Paragraphs
        three and four recognize the problems with arguing. But the tone set by
        paragraph one, and the conclusion made by four don&apos;t take these
        revelations into consideration. Darryl makes ideology more important
        than education.
      </p>
      <p>
        But this post makes me hopeful. It suggests that at least one person in
        Free Keene is beginning to separate ego from ideology.
      </p>
      <p>
        When you begin to apply things like deep canvassing, moral reframing,
        and curiosity to the way you speak to people, it changes the way you
        think. It changes the people you&apos;re speaking to. It doesn&apos;t
        help you &ldquo;educate&rdquo; people on &ldquo;your beliefs&rdquo; It
        helps you learn from others, and others learn from you. There&apos;s a
        major difference in mindset there. And there&apos;s a major difference
        in value it brings to all parties.
      </p>
      <p>
        &ldquo;Libertarian,&rdquo; &ldquo;alt-right,&rdquo;
        &ldquo;liberal,&rdquo; &ldquo;conservative.&rdquo; If you&apos;re
        fighting for a team, you&apos;re not learning anything. If you think
        your label has the answers, you have the wrong answers.
      </p>
      <p>
        Darryl and other current Free Keene followers have an isolated viewpoint
        on the world. They live and breathe on instant reaction. Using
        oversimplified views of a complex world to act like they know
        everything. Running to Murray Rothbard, the Karl Marx of the right, for
        every answer to every question.
      </p>
      <p>
        I&apos;m surprised to see the slightest recognition of something so
        basic, yet so important as the backfire effect from this group. I also
        fear that Darryl is only trying to use it as a weapon. As a way to talk
        about &lsquo;others&rsquo; and not consider the self.
      </p>
      <p>
        &ldquo;Don&apos;t bother arguing libertarianism on Facebook because of
        the backfire effect&rdquo; ... is very different than ... &ldquo;We need
        to consider how much of what we say and do is the backfire
        effect.&rdquo;
      </p>
      <p>
        Understanding cognitive biases and heuristics, like understanding
        logical fallacies, is only good for self-improvement. The second you
        begin to use them against others, to point the finger, you become the
        problem.
      </p>
      <blockquote>
        It&apos;s OK to establish clear guidelines for yourself to make sure you
        can get your point across. But to use those guidelines as a weapon
        against others is cowardly. -
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904074919/https://cognitame.com/blog.php?id=115',
          }}
        >
          Online Civility
        </LinkComponent>
      </blockquote>
      <p>
        Maybe Darryl is making progress. Or maybe he&apos;s so entrenched in
        that cult that it would be too emotionally harrowing to go against it.
        If he continued down the path of ideological self-improvement, he would
        have to cut ties. Extremist cults do not allow for open minds.
      </p>
      <p>
        My prediction is that this post, this one small hint of growth, will
        fall into the nether. That Darryl is only browsing available weapons and
        can&apos;t tell that this one is aiming right at him. On the other hand,
        I had no idea what I was talking about when I wrote Online Civility. But
        I still found my independence.
      </p>
    </StaticBlogLayout>
  );
};

export default IsDarrylPerryMakingIdeologicalProgress;
