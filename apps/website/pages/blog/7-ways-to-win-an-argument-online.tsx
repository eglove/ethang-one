import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

function SevenWaysToWinAnArgumentOnline({ blog }: BlogProperties): JSX.Element {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        In a previous post, &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'http://freekeene.com/2016/08/04/image-problem-solution/',
          }}
        >
          The Image Problem and Its Solution
        </LinkComponent>
        ,&rdquo; I went over some important issues within the libertarian
        community that creates the image problem it has with the general public.
        I went over some important cognitive biases and heuristics that degrade
        one&apos;s ability to explain and sell libertarianism to a
        &ldquo;non-believer.&rdquo; I then concluded with two key factors for
        having successful conversations about libertarianism and anarchy. Theory
        of mind; understanding that other people have unique beliefs, desires,
        and intentions different than your own, which are based on rational
        thought. And deep canvassing; a style of real-world conversation that
        studies have shown is most effective in changing people&apos;s minds on
        any given topic.
      </p>
      <p>
        Since then, I&rsquo;ve come across a great study titled, &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'https://chenhaot.com/pubs/winning-arguments.pdf',
          }}
        >
          Winning Arguments: Interaction Dynamics and Persuasion Strategies in
          Good-faith Online Discussions
        </LinkComponent>
      </p>
      <p>
        As the title suggests, the study focused on online discussions.
        Specifically, it analyzed the conversations on one of the most popular
        and active destinations for persuasion and arguments on all topics. A
        subreddit called &ldquo;
        <LinkComponent
          linkProperties={{ href: 'https://www.reddit.com/r/changemyview/' }}
        >
          ChangeMyView
        </LinkComponent>
        .&rdquo; The study resulted in seven findings based on looking at what
        factors are most commonly found when someone changes their mind on the
        topic they brought up.
      </p>
      <p>
        Keep in mind that the findings apply to all parties in a conversation or
        argument. If you follow these findings, it will be easier for you to
        convince people of a viewpoint. And if others are using these
        guidelines, it suggests that they are open to changing their minds.
      </p>
      <p>
        Meaning, no matter what side of the conversation you&rsquo;re on, or the
        position you&rsquo;ve taken, these findings show how to recognize when
        someone is being open-minded, and how to convince those who are
        open-minded of your beliefs. Not following basic guidelines such as
        these can very easily, and very quickly close an open mind.
      </p>
      <h2>1. Early Responses</h2>
      <p>
        Perhaps the most simple finding is that those who reply to or join the
        conversation the earliest, are most likely to change the original
        posters mind.{' '}
        <strong>
          The first two people who respond to an online post are three times
          more likely to change the original posters mind than the 10th person.
        </strong>
      </p>
      <p>
        However, that doesn&rsquo;t mean you shouldn&rsquo;t post anything if
        you&rsquo;re not the first person. In the third finding listed here,
        you&rsquo;ll see that adding in your perspective can have a huge effect
        on convincing someone to change their mind, even if they don&rsquo;t
        respond to you in particular.
      </p>
      <h2>2. Limits on Back-and-Forth</h2>
      <p>
        A back-and-forth style of conversation, in which each person continues
        to respond to the last thing the other said, is the most effective way
        in making sure both parties keep an open mind. The more
        &ldquo;rounds&rdquo; the conversation goes, the better. Up to a point.
        (A &ldquo;round&rdquo; is when Person A says something and Person B
        responds.)
      </p>
      <p>
        <strong>
          After five rounds of this back-and-forth, it becomes statistically
          impossible for anyone to change their mind.
        </strong>{' '}
        After five rounds of detailed responses with no movement, it&rsquo;s
        best to just abandon the conversation and seek another.
      </p>
      <h2>3. More Arguments = Better, Mostly</h2>
      <p>
        As mentioned in the first point, the more arguments a viewpoint has in
        the same discussion, the better chance there is of changing
        someone&apos;s mind to that viewpoint. However, that comes with a
        caveat.
      </p>
      <p>
        <strong>
          If multiple people jump in on the same thread, and try to argue for
          the same point rather than creating their own in a new thread, they
          will provide no additional value.
        </strong>{' '}
        This form of helping actually does nothing to move the conversation
        forward.
      </p>
      <h2>4. Keep Calm</h2>
      <p>
        This should be obvious, but using emotionally charged or extreme words
        will harm the chances you will change someone&rsquo;s mind. It is best
        to keep your language calm and pleasant.
      </p>
      <p>
        The authors of this study were sure to remind people that it is never,
        ever useful to either directly or indirectly insult someone or their
        beliefs.{' '}
        <strong>
          Saying, &ldquo;If you don&rsquo;t believe X, you&rsquo;re Y,&rdquo;
          with &lsquo;Y&rsquo; being a negative, is the quickest way to induce
          the backfire effect
        </strong>{' '}
        and cause the person you&rsquo;re trying to convince to be even more
        confident in their current beliefs.
      </p>
      <h2>5. Keep it Long and Detailed</h2>
      <p>
        For both people in the conversation, it is most advantageous that they
        be as detailed and thorough about their beliefs as possible. Sometimes
        when someone elaborates on their full opinion, with every point laid
        out, that alone is enough for them to change their mind.
      </p>
      <p>
        If you, as someone trying to change the mind of another, give as much
        detail as possible. It not only increases the chance of the other person
        understanding you and accepting your perspective, it also helps to avoid
        the famous backfire effect.{' '}
        <strong>
          If you don&apos;t go through your full opinion, the other person will
          find it easier to use internal rationale and reject it.
        </strong>
      </p>
      <h2>6. Make It Pretty</h2>
      <p>
        Online discussion provides the opportunity to make discussion look
        pretty. Using bullet point summaries and formatting links in an
        aesthetically attractive way gives your arguments greater value.
      </p>
      <p>
        In my previous post on real world conversation, I mentioned that
        referring to sources can create the backfire effect. This is still true
        online. However, if the person you are talking to is open to change but
        is struggling to understand your perspective, sources help.
      </p>
      <p>
        That is to say, if the person you&rsquo;re talking to is using all of or
        most of the points in this study; calm language, detailed arguments, and
        well-formatted responses, then links are more likely to have a positive
        effect rather than a negative.
      </p>
      <p>
        To simplify,
        <strong>
          linking to sources only works in online arguments when both parties
          are open-minded.
        </strong>{' '}
        Referring to sources in real-world conversation is highly unlikely to
        have a positive effect, and very likely to produce the backfire effect.
      </p>
      <h2>7. Use the Right Language</h2>
      <p>
        When someone uses first-person pronouns such as &ldquo;I,&rdquo; they
        are much more likely to be open-minded. The same goes for if they are
        using dominant words that evoke feelings of power and success such as
        &ldquo;completion,&rdquo; &ldquo;smile,&rdquo; or &ldquo;win.&rdquo;
      </p>
      <p>
        People who use bold lettering to highlight key points, are more open to
        change. If they use valent (pleasant) words, such as
        &ldquo;lovable,&rdquo; &ldquo;sunshine,&rdquo; or
        &ldquo;beautiful,&rdquo; they are also more open to change.
      </p>
      <p>
        On the other hand, if someone uses first-person plural pronouns such as
        &ldquo;we,&rdquo; this indicates they hold a diluted sense of
        responsibility towards a group for the view they are espousing. Meaning,
        they expect you to be able to convince the whole group before you
        convince them. Which is obviously impossible.
      </p>
      <p>
        And last, as mentioned before, extreme uses of words like
        &ldquo;terrorism,&rdquo; &ldquo;theft,&rdquo; and &ldquo;criminal&rdquo;
        in situations that do not directly refer to the standard use of those
        terms (as in, using them as an insult or emotional additive) suggests a
        person is not open-minded or will harm your ability to change their
        mind.
      </p>
      <h2>TL;DR</h2>
      <p>
        Breaking this down into one pitch, the best way to change a persons mind
        on the internet is as follows:
      </p>
      <p>
        Keep your language calm and pleasant. Provide as much detail as possible
        on your every perspective regarding the topic. Do not jump in on an
        ongoing conversation and repeat the points/argument already being made.
        Use bullet points, bold words, and pretty formatting. If the
        conversation goes for more than five rounds, it&rsquo;s over.
      </p>
      <p>
        If the person you&rsquo;re trying to convince also uses these standards,
        it&rsquo;s a sign that they are more open to change. Only use links as
        sources if they are following these standards as well.
      </p>
      <p>
        This is only one perspective on the issue of conversion and salesmanship
        regarding the trading of ideas. Leave a comment below with your
        thoughts.
      </p>
    </StaticBlogLayout>
  );
}

export default SevenWaysToWinAnArgumentOnline;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('7-ways-to-win-an-argument-online');
}
