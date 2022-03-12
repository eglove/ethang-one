import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { BlogProperties, blogQuery } from '../../util/query';

const DoYouHaveAMomentToTalkAboutAnki = ({
  blog,
}: BlogProperties): JSX.Element => {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        The fellow over at Master How To Learn{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://www.masterhowtolearn.com/2020-10-31-why-i-no-longer-tell-my-friends-about-anki-supermemo/',
          }}
        >
          doesn&apos;t tell his friends about Anki anymore
        </LinkComponent>
        . I can&apos;t say how many people I&apos;ve recommended{' '}
        <LinkComponent linkProperties={{ href: 'https://apps.ankiweb.net/' }}>
          Anki
        </LinkComponent>{' '}
        to with no results. I feel the pain of trying to turn people on to
        something great and getting no response. We&apos;ve all been there.
        I&apos;ve got a shortlist of things I recommend to people every chance I
        get.
      </p>
      <p>
        I&apos;ve been drinking{' '}
        <LinkComponent linkProperties={{ href: 'https://soylent.com/' }}>
          Soylent
        </LinkComponent>{' '}
        for 8 years, I recommend it whenever I can. That can either lead to a
        debate on what &ldquo;healthy&rdquo; is or the standard, &ldquo;I just
        like food too much.&rdquo; response.
      </p>
      <p>
        I recommend people use an RSS reader like{' '}
        <LinkComponent linkProperties={{ href: 'https://feedly.com/' }}>
          Feedly
        </LinkComponent>{' '}
        instead of browsing news sites, depending on YouTube subscriptions, or
        looking at social media feeds. In fact, I recommend people not use
        social media at all. While I&apos;ve never been able to turn anyone onto
        Feedly, I have noticed people I know lose interest in, and reduce their
        social media usage to basically 0. I&apos;ve let people know about{' '}
        <LinkComponent linkProperties={{ href: 'https://g.co/fi/r/32P253' }}>
          Google Fi
        </LinkComponent>{' '}
        as the better phone plan. I&apos;ve gotten a $20 referral out of that.
        People always seem interested in Fi, but it&apos;s rare to randomly come
        across someone looking to change phone plans. And I recommend to anyone
        looking to learn code to check out{' '}
        <LinkComponent linkProperties={{ href: 'http://zerotomastery.io/' }}>
          Zero To Mastery
        </LinkComponent>{' '}
        and{' '}
        <LinkComponent linkProperties={{ href: 'https://wesbos.com/' }}>
          Wes Bos.
        </LinkComponent>{' '}
        I&apos;ve absolutely gotten people to check them out and buy courses.
      </p>
      <p>
        So the question I have now is, what&apos;s the difference between the
        things that people do jump on, and what they don&apos;t? It&apos;s not
        necessarily a matter of investment. Anki is a long-term investment into
        a daily habit. It&apos;s difficult for anyone to take interest in that.
        However, courses by ZTM and Wes Bos are not free and can take months to
        complete.
      </p>
      <p>
        But really, the answer is clear. It just comes down to what people are
        interested in at the moment. I&apos;ve put a lot of effort into studying
        and writing about persuasion, cognitive bias, and heuristics in the
        past. Trying to figure out the secrets to sway people to your side.
      </p>
      <p>
        The final conclusion, and the point I retired on, is that the best way
        to persuade people is to just listen to them. Not listen to find the key
        points to use against them. But with no intention of even saying
        anything, just listen. It&apos;s so counterintuitive but it so works.
        The more you listen to people, the more willing they are to listen to
        you. And the more likely you are to learn about something from them.
      </p>
      <p>
        Master How To Learn concludes on the idea of not being too zealous about
        things for the fear of scaring them off. That&apos;s still a cheap
        salesperson strategy. If you&apos;re thinking about things like that,
        you may as well just not say anything.
      </p>
      <p>
        We all have our favorite tools and methods. Not everything works for
        everyone, we all know that. But take the approach of being a peer rather
        than someone who&apos;s &lsquo;mastered the game&rsquo; teaching other
        people how to play, and you&apos;ll find yourself learning more and
        having the satisfaction of being able to share more with friends.
      </p>
      <p>
        Don&apos;t be afraid to talk about and be zealous about the things
        you&apos;re zealous about. And don&apos;t be afraid to listen to the
        things your friends are zealous about. If you&apos;re interested, give
        it a shot. If not, it doesn&apos;t matter. The same goes in reverse, if
        they&apos;re not interested, they&apos;re not interested. That&apos;s
        ok. Don&apos;t sit around trying to come up with a better strategy.
        That&apos;s where you&apos;re going to lose their interest permanently.
      </p>
    </StaticBlogLayout>
  );
};

export default DoYouHaveAMomentToTalkAboutAnki;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  const blog = await blogQuery('do-you-have-a-moment-to-talk-about-anki');

  return {
    props: {
      blog,
    },
  };
}
