import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { YouTubeEmbed } from '../../components/common/youtube-embed/youtube-embed';
import { blogSlug } from '../../database/data/blogs';

const CuringBiasWithCuriosity = (): JSX.Element => {
  return (
    <StaticBlogLayout slug={blogSlug.curingBias}>
      <blockquote>
        &lsquo;It is so disagreeable to think ill of ourselves, that we often
        purposely turn away our view from those circumstances which might render
        that judgment unfavorable.&rsquo; -Adam Smith, Theory of Moral
        Sentiments
      </blockquote>
      <p>
        If you haven&rsquo;t read Adam Smith&rsquo;s Theory of Moral Sentiments{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://www.econlib.org/library/Smith/smMSCover.html',
          }}
        >
          go get it right now
        </LinkComponent>
        . It&rsquo;s an extraordinary, and widely unknown piece of art chalked
        full of useful wisdom. I&rsquo;d say Adam Smith has Ben Franklin easily
        beat in the realm of advice to help you live life to the fullest.
      </p>
      <p>
        Adam Smith&rsquo;s advice in that quote is one of those cliches that we
        all know, but never take into consideration when it&rsquo;s most needed.
        It&rsquo;s one of those cliches that science has proven effects us all,
        and yet we still fall into it without batting an eye.
      </p>
      <p>
        What Adam Smith was talking about is now known as{' '}
        <strong>motivated reasoning</strong>. Motivated reasoning is something
        we use to justify and mitigate cognitive dissonance.
        &ldquo;&hellip;rather than search for information that either confirms
        or disconfirms a particular belief, people actually seek out information
        that confirms what they already believe.&rdquo; (
        <LinkComponent
          linkProperties={{
            href: 'http://www.newsweek.com/why-we-believe-lies-even-when-we-learn-truth-78775',
          }}
        >
          Steven Hoffman
        </LinkComponent>
        )
      </p>
      <p>
        As{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://www.mitpressjournals.org/doi/abs/10.1162/jocn.2006.18.11.1947#.WDiyqeYrKHs',
          }}
        >
          MIT researchers explain it
        </LinkComponent>
        , motivated reasoning is &ldquo;&hellip;a form of implicit regulation in
        which the brain converges on judgments that minimize negative and
        maximize positive affect states associated with threat to or attainment
        of motives.&rdquo;
      </p>
      <p>
        To simplify all of that, motivated reasoning is when you ignore
        information that goes against your beliefs whether you realize it or
        not.
      </p>
      <h2>Why It Happens</h2>
      <p>
        In order to gain a full understanding of what motivated reasoning is,
        and to eventually discuss solutions, it&rsquo;s important to know why it
        happens. There is no known reason. And likely no one reason why we
        unconsciously ignore that which goes against our own beliefs. Professors
        Milton Lodge and Charles S. Taber&nbsp;
        <LinkComponent
          linkProperties={{
            href: 'http://www.uky.edu/AS/PoliSci/Peffley/pdf/Taber%26Lodge_The%20Rationalizing%20Voter.pdf',
          }}
        >
          outline their theory
        </LinkComponent>{' '}
        in what they call <strong>goal-oriented motivational reasoning.</strong>
      </p>
      <p>
        Basically, when you&rsquo;re presented with an idea, problem, or policy,
        you instantly start to think about information you already have on the
        topic. This is common sense that we can all confirm through personal
        anecdote, right? The information you recall is, however, dependent upon
        your current mood. This is an uncontrollable fact. Your mind fetches
        different kinds of information based on your emotions. How you currently
        feel can determine what you can currently recall. This too is common
        sense.
      </p>
      <p>
        Both your mood and cognitive processes are activated at the same time on
        any given subject. That creates the process that results in emotional
        biases. The logical, emotionless arguer is just as much a myth as{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://www.npr.org/templates/story/story.php?storyId=95256794',
          }}
        >
          multi-taskers
        </LinkComponent>
        &nbsp;and{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://www.scientificamerican.com/article/i-developed-what-appears-to-be-a-ph/',
          }}
        >
          photographic memory
        </LinkComponent>
        . It&rsquo;s made-up bullshit that people use to brag about themselves.
        Like when people brag about the results they got on a personality test.
      </p>
      <h2>Your Argument Is Invalid</h2>
      <p>
        Let&rsquo;s think about this issue in terms of an example. When an
        anarcho-capitalist hears a liberal say that guns are dangerous and not a
        necessity anymore, it probably pisses them off. I know this because it
        used to piss me off. Now it just annoys the hell out of me. The
        AnCaps&rsquo; response is to look for ways to prove that the liberal is
        wrong. Fair enough, right?
      </p>
      <p>
        But the liberal isn&rsquo;t wrong at all. Guns are dangerous. They
        should be treated with respect, and with safety always in mind. Not
        doing so can result in the harm of yourself or others. And owning a gun
        isn&rsquo;t necessary to live a full, healthy, and safe life.
      </p>
      <p>
        You could fairly say that guns are safe overall because they allow safe
        people to protect themselves and others from dangerous people. You could
        also fairly say that assault weapons are great for self-defense in
        extreme scenarios. Both arguments are fair ones to make from their
        respected perspectives.
      </p>
      <p>
        Here&rsquo;s the problem.{' '}
        <strong>Neither argument has anything to do with the other.</strong> In
        average rhetoric, those two sides may seem like polar opposites, and
        they may be in some way. But neither shows an ounce of understanding for
        the other side. You could easily make either argument, not as a response
        to the other, but a general statement, and it would still hold its full
        context. The arguments aren&rsquo;t responses, they&rsquo;re statements.
      </p>
      <p>
        If an AnCap says that guns are safe and necessary, that doesn&rsquo;t
        say anything about the libertarian or anarcho-capitalist philosophy. It
        is simply an emotionally driven response to the idea of guns being
        banned by the government.
      </p>
      <p>
        Typical gun arguments by AnCaps (I&rsquo;m focusing on AnCaps only
        because I understand the philosophy best.) are goal-oriented reasoning.
        They&rsquo;re using an emotionally based argument based on the fear of
        guns being illegal and the anger at liberal ignorance to argue for
        legalization. Even though legalization has nothing to do with their
        philosophy.
      </p>
      <p>
        An argument for guns to a liberal from an AnCap would say that property
        owners should individually decide whether or not it is OK or worthwhile
        to allow people to carry guns on their property. The smaller pockets of
        control via property owners give greater flexibility to those living in
        the community.
      </p>
      <p>
        If an anti-gun campaign moves most, or all, of an areas&rsquo;
        commercial property owners to make the decision to ban guns (maybe even
        making exceptions for law enforcement), then it is in line with
        anarcho-capitalist beliefs.
      </p>
      <p>
        Anarchy is the ultimate democracy because there is no monopolized
        bureaucracy to get in the way of the people who want to make a change.
      </p>
      <p>
        Coming out of the 2016 election, I believe this argument to be well
        formatted for the topic. That argument, by the way, is also based on the{' '}
        <strong>moral foundations theory.</strong>
      </p>
      <h2>Curiosity and Motivational Reasoning</h2>
      <p>
        A{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2182588',
          }}
        >
          2012 Yale study
        </LinkComponent>{' '}
        found that more thoughtful people are most likely to twist empirical
        evidence to match their own beliefs. Meaning, the smarter the person is
        the more likely they are to use motivated reasoning. The only reason I
        bring this up is to reiterate that knowing about it, or thinking
        you&rsquo;re too good for it in no way makes you immune to emotional
        biases.
      </p>
      <p>
        Fixing common biases and heuristics is not a simple matter of being
        smart about it. Fixing these things is a matter of building systems of
        habits for yourself, maintaining strict discipline, and using counter
        ways of thinking to cancel out the bias. Even with all that, you
        can&rsquo;t cure it completely. You can only minimize it. You&rsquo;re a
        human, your brain is complex. You are not in control of it. If you
        haven&rsquo;t accepted that by now, there&rsquo;s no point in reading
        about how it ticks.
      </p>
      <p>
        In 2016,{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2816803',
          }}
        >
          a new Yale study
        </LinkComponent>{' '}
        found that people who have a higher level of knowledge regarding science
        (basic facts, quantitative reasoning), are more likely to be polarized
        on the political scale. Meaning, more knowledgeable conservatives lean
        furthest to the right, and more knowledgeable liberals lean furthest to
        the left. As the 2012 study suggests, these smarter people are better at
        creating reason for their beliefs and strengthening them through
        motivated reasoning.
      </p>
      <p>
        A follow-up to that study showed that people with higher levels of
        curiosity are actually drawn to reading stories that go against their
        preexisting beliefs. And are therefore more likely to cross party lines,
        regardless of their intelligence level. This should be obvious as
        it&rsquo;s basically the definition of curiosity. But the study found
        that curious people enjoy hearing about things that prove them wrong and
        that this does not stop in regards to politics.
      </p>
      <p>
        The moral of these studies is that curious people don&rsquo;t show bias
        and don&rsquo;t often use motivated reasoning to explain why something
        is wrong rather than learn from it.
      </p>
      <p>
        Somehow, it is easy for us to accept that memory is terrible. That{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://www.innocenceproject.org/causes/eyewitness-misidentification/',
          }}
        >
          eyewitness testimony is the worst form of evidence
        </LinkComponent>{' '}
        in court. But we can not accept the fact that, in the same way,{' '}
        <strong>
          when we make arguments or rationalize our beliefs, our brains
          unconsciously fill in the gaps to &lsquo;fix&rsquo; any holes in our
          rationale.
        </strong>
      </p>
      <h2>Accepting and Curing Bias</h2>
      <p>
        When the idea of &lsquo;bias&rsquo; is brought up, it is usually a
        derogatory term rather than a natural occurrence that we all experience
        daily. Instead of pointing out bias as a way to not only be helpful but
        learn, we use it as an insult. Which in itself shows bias.
      </p>
      <p>
        A 2014 study showed that when you&rsquo;re curious about something, it
        releases dopamine. (Compare this to when you get angry or frustrated
        when you hear certain beliefs.) When you read or learn about something
        you have a passion for, you&rsquo;ve certainly experienced this dopamine
        rush.
      </p>
      <p>
        To add to that, the same study found that your hippocampus becomes more
        active when you see something you&rsquo;re curious about. A more active
        hippocampus means an active and effective long-term memory. Anything you
        see while it is active, you are more likely to remember, and more likely
        to pull knowledge from.
      </p>
      <p>
        Again, this should be obvious. We all find it easier and more fun to
        learn about things we enjoy. Here&rsquo;s the secret, you can cultivate
        this curiosity into other subjects by relating them to what you&rsquo;re
        interested in, and through practice and discipline.
      </p>
      <YouTubeEmbed id="YFVS1kE8gFQ" title="The Science of Wonder" />
      <p>
        Having a political belief based on unbridled freedom for all isn&rsquo;t
        about proving the viewpoints of someone else wrong.{' '}
        <strong>
          It&rsquo;s about allowing them to explore and discover what&rsquo;s
          right for them outside of a monopolized government.
        </strong>
      </p>
      <p>
        Curiosity is how we learn from one another. Learning from one another is
        how we build a society. You don&rsquo;t build a successful society by
        appointing governors and lawmakers to determine how things should be.
        Readers of Free Keene should know that praxeology shows us that there is
        no single correct answer for all.
      </p>
      <p>
        We should be curious to see many solutions to many problems living side
        by side. We should be able to take into account the pros and cons of
        each. We shouldn&rsquo;t just reject ideas because conservatives said
        it, or because liberals said it. That&rsquo;s the mistake they&rsquo;ve
        made through the Democratic and Republican parties. We have all allowed
        ourselves to take positions via bias and rationalized it only after
        taking the position.
      </p>
      <p>
        I&rsquo;ve suggested{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://freekeene.com/2016/08/04/image-problem-solution/',
          }}
        >
          deep canvassing
        </LinkComponent>{' '}
        as a way to talk to people about their beliefs in a persuasive way.
        I&rsquo;ve expanded that same topic into{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://freekeene.com/2016/10/12/7-ways-to-win-an-argument-online/',
          }}
        >
          online conversation
        </LinkComponent>{' '}
        by presenting a single study of the subject. I expanded those ideas with
        the{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://freekeene.com/2016/11/06/persuasion-through-moral-arguments/',
          }}
        >
          moral foundations theory
        </LinkComponent>
        .
      </p>
      <p>
        All of those ideas are based on listening. To expand even further, I
        propose that adding the practice of curiosity to that listening will
        help you learn, in a positive way, from anyone you&rsquo;re talking to.
        That&rsquo;s the opposite of taking the position of opposing others and
        preparing to prove them wrong.
      </p>
      <p>
        Moving towards understanding others rather than opposing them will
        improve your persuasive abilities, as mentioned before. But it will also
        allow you to obtain more information, learn, and take your own beliefs
        to a whole new level.
      </p>
      <YouTubeEmbed id="__tPaFaPCHo" title="Building Curiosity" />
    </StaticBlogLayout>
  );
};

export default CuringBiasWithCuriosity;
