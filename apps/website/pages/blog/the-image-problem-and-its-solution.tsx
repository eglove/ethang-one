import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { YouTubeEmbed } from '../../components/common/youtube-embed/youtube-embed';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

const TheImageProblemAndItsSolution = ({
  blog,
}: BlogProperties): JSX.Element => {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        They say if you&rsquo;re going to criticize something, unless you intend
        to do so out of cynicism or disrespect, to be prepared to answer those
        criticisms with solutions. I&rsquo;ve offered simple alternatives in
        lieu of the criticisms of &ldquo;ambush interviews&rdquo; and Robin
        Hooding. But there is a bigger problem I want to point out. One that
        goes deeper than a few alternatives. One that I&rsquo;ve struggled to
        pinpoint in a clear, single &lsquo;pitch.&rsquo; Libertarianism has an
        image problem. An image problem that stunts recruitment and creates a
        bad taste in people&rsquo;s mouths when they&rsquo;re presented with
        good ideas. That problem doesn&rsquo;t stem from its principles, and it
        doesn&rsquo;t stem from state propaganda or brainwashing. It stems from
        libertarian culture. The way we think and act. Rather than just
        complaining, I want to attempt to go over a bit of scientific research
        and some intellectual ideas to explain that problem. At the very least,
        you may learn about something you&rsquo;ve never heard before. At best,
        you&rsquo;ll be challenged, maybe even offended, but in a way that
        promotes growth.
      </p>
      <blockquote>
        Contest is a part of human life everywhere that human life is found. In
        war and in games, in work and in play, physically, intellectually, and
        morally, human beings match themselves with or against one another.
        Struggle appears inseparable from human life, and contest is a
        particular focus or mode of interpersonal struggle, an opposition that
        can be hostile but need not be, for certain kinds of contest may serve
        to sublimate and dissolve hostilities and to build friendship and
        cooperation. -Walter J. Ong, Fighting For Life
      </blockquote>
      <h2>The Wrong Expectations</h2>
      <p>
        To understand the issue within libertarian thinking, we have to dig
        deeper than looking at simple logical fallacies. Logic is a good
        starting point in everything, but it is always only the beginning. In
        this case, we must also start thinking about cognitive biases and
        heuristics. Starting with a simple formula; pluralistic ignorance +
        projection = false consensus.
      </p>
      <p>
        <strong>Pluralistic ignorance</strong> is a cognitive bias in which
        members of a group may reject a certain principle or belief, but they
        all assume that every other member accepts it. Individual members will
        then publicly promote the idea, under the presumption that it must be
        correct because everyone accepts it. For example, a group of college
        students that drink cheap beer and act like they enjoy it in order to
        gain acceptance from their peers. But in truth everyone thinks it tastes
        like piss water.
      </p>
      <p>
        <strong>Projection</strong> is a theory we all know about. It happens
        when someone attributes their own characteristics to others. It&rsquo;s
        usually a defense mechanism to deny the self. For example, a person who
        doesn&rsquo;t think for himself or do his own research may say everyone
        who disagrees with him doesn&rsquo;t think for themselves or do their
        own research.
      </p>
      <p>
        When you mix pluralistic ignorance with projection, you get very
        interesting results. Doing so creates the{' '}
        <strong>false consensus</strong> effect. It is a cognitive bias that
        starts when people overestimate their own beliefs and assume that they
        are the majority opinion within a particular group. They then think that
        because their beliefs are the majority, they must be right. In
        philosophy, this is related to <strong>naive realism</strong> (or direct
        realism). Naive realism is when someone assumes that their perception of
        the world provides them with objective information about it. In other
        words, what they see and then interpret within their own minds, must be
        correct.
      </p>
      <p>
        To put the false consensus effect in context, let&rsquo;s use the
        example of central banking. Bob watches a few Ron Paul speeches about
        the Federal Reserve. Inspired to know more, he watches the documentary
        &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'https://www.youtube.com/watch?v=tGk5ioEXlIM',
          }}
        >
          The American Dream
        </LinkComponent>
        &rdquo; on YouTube and then moves on to read, &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'https://mises.org/library/what-has-government-done-our-money',
          }}
        >
          What Has Government Done To Our Money
        </LinkComponent>
        &rdquo; by Murray Rothbard and &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'http://store.mises.org/End-the-Fed-P619.aspx',
          }}
        >
          End The Fed
        </LinkComponent>
        &rdquo; by Ron Paul. He then comes to the conclusion that centralized
        banking is bad, and fractional banking is bad. Because Bob got all of
        his information from libertarians, he then assumes that all libertarians
        also disapprove of centralized and fractional banking. From there, he
        takes comfort in the fact that all libertarians agree with him on this
        issue, therefore it must be correct. The benefits of a central bank or
        fractional banking no longer matter, Bob is no longer concerned with
        opposition because he perceives himself to be firmly planted with the
        majority, even if he&rsquo;s never bothered to find out.
      </p>
      <p>
        In everyday scenarios, the false consensus effect leads to incorrect
        assumptions about what other people think and believe. It supports
        having incorrect expectations about others. Scroll through a libertarian
        forum online with these ideas in mind; pluralistic ignorance,
        projection, and false consensus, and you&rsquo;ll start to notice a lot
        of it. A lot of insistence that one point of view is the
        &ldquo;correct&rdquo; answer when there is clearly no correct answer in
        any case. Or even worse, when it&rsquo;s not even a political or moral
        issue. But we&rsquo;ll get back to that later.
      </p>
      <p>
        In the book &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'http://trendsaction.com/ebook/how-i-found-freedom-in-an-unfree-world.php',
          }}
        >
          How I Found Freedom in an Unfree World
        </LinkComponent>
        ,&rdquo; Harry Browne, a former libertarian scholar, and Libertarian
        Party presidential candidate, goes over fourteen &lsquo;traps&rsquo; in
        ways of thinking that prevent a person from becoming free. One of those
        traps is called the identity trap. If you expect another person to be
        something they aren&rsquo;t, know something they don&rsquo;t, or think
        in the way that you do, you&rsquo;re falling into the{' '}
        <strong>identity trap</strong>. For instance, trying to get someone to
        accept the non-aggression principle and expecting them to accept it
        after a simple explanation. And if they don&rsquo;t, that must mean
        there&rsquo;s something wrong with them. Even if they just find it to be
        as useless as the ten commandments. In that case, you&rsquo;re trying to
        fit a circular peg into a square hole, it doesn&rsquo;t work. If the NAP
        doesn&rsquo;t resonate with someone, that doesn&rsquo;t mean they reject
        peace, it means they reject the notion of the NAP as an objective
        standard. Nothing you ever say or do will ever change another
        person&rsquo;s mind, this is another point we&rsquo;ll return to later.
        For now, Browne simply suggests that you can only tell others what you
        believe in, if they choose to let that affect them, that&rsquo;s their
        choice, not yours.
      </p>
      <p>
        Brown also gives four principles to follow in order to avoid the
        identity trap. One, understand that you are a unique individual. Your
        ideas are yours, there is no reason anyone else should ever accept them.
        Two, each individual is acting from his own knowledge in ways he
        believes will bring him happiness. Austrian economics teaches that the
        values people place on objects or ideas can not be compared or added to
        create one &lsquo;meta-value.&rsquo; If someone does not value your
        libertarian beliefs, get over it, it doesn&rsquo;t make them wrong, it
        makes them an individual. Third, you have to treat people in accordance
        with their own beliefs to get what you want out of them. Want to be
        released from the system of government to create your own community?
        Telling believers of this government system they&rsquo;re wrong
        won&rsquo;t help you get there. Fourth, you view the world subjectively.
        Your beliefs may be right for you, or not and you&rsquo;ll find yourself
        to be 100% wrong in six months. Either way, your beliefs will never be
        an objective truth, and there will never be an objectively correct
        answer.
      </p>
      <p>
        There&rsquo;s a common thread within Harry Browne&rsquo;s advice.
        Individualism. Libertarians often espouse <strong>individualism</strong>{' '}
        a great deal. Anarchist theories like &lsquo;human action&rsquo; and
        &lsquo;spontaneous order&rsquo; support the idea of individualism. But
        how many conversations have you been in where you, or someone else,
        mentioned a celebrity and the other said, &ldquo;Yeah, but isn&rsquo;t
        he a reality hating, non-bathing, socialist, Marxist, neck-bearded,
        cuckold, commie?&rdquo; Said in jest, it may be simple fun, but how
        often do you see libertarians very seriously rejecting people, either in
        life or media professionals, because they have one &ldquo;wrong&rdquo;
        idea? When someone says to me that some guy doesn&rsquo;t &ldquo;get
        it,&rdquo; I&rsquo;m usually thinking that the person talking to me is
        the one who doesn&rsquo;t &ldquo;get it.&rdquo; Using a philosophy of
        individualism to reject or put down the beliefs of others is entirely
        contradictory, even if that other person is a collectivist.
      </p>
      <h2>The Wrong Approach</h2>
      <p>
        Truly understanding individualism and applying it to everyday life is a
        constant practice. It requires seeing the individual qualities within
        everyone and understanding them on a social level. If you find that you
        struggle with understanding social context and cues, this next theory is
        especially for you. In order to really understand individualism, and
        really understand that other people are unique and act outside of your
        world and influence, you&rsquo;re going to have to exercise your{' '}
        <strong>theory of mind</strong>.
      </p>
      <p>
        According to Wikipedia,{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://en.wikipedia.org/wiki/Theory_of_mind',
          }}
        >
          theory of mind
        </LinkComponent>{' '}
        is, &ldquo;The ability to attribute mental states &ndash; beliefs,
        intents, desires, pretending, knowledge, etc. &ndash; to oneself and
        others to understand that others have beliefs, desires, and intentions
        that are different from one&rsquo;s own.&rdquo;
      </p>
      <p>
        Alex believes taxation is for the greater good and required under the
        social contract. A typical libertarian response would say that first,
        Alex is objectively wrong due to a few definitions and direct
        comparisons between taxation and theft. comparisons.
      </p>
      <p>
        They then might think that Alex believes what he does due to public
        school indoctrination, mass media propaganda, or a mix of those two and
        many other things. Most libertarians would flatly reject that someone
        believes in the social contract as a greater good. There must always be
        an outside actor forcing that belief on what would otherwise be a
        &ldquo;rational&rdquo; person. An inability to see and accept another
        person&rsquo;s beliefs as a rational choice, as an intellectual choice
        made with individual thoughts, is a symptom of lacking theory of mind.
      </p>
      <p>
        Research shows that{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://science.sciencemag.org/content/342/6156/377',
          }}
        >
          theory of mind can be improved by reading fiction
        </LinkComponent>{' '}
        because it portrays the inner feelings and thoughts of multiple
        characters on single subjects. However, you can&rsquo;t deeply develop
        theory of mind without self-analysis. If you don&rsquo;t understand
        yourself, how can you possibly understand others? For example, if you
        copied your &lsquo;personal values&rsquo; from a book, then you can
        never pretend to understand the values of others. In that case, you
        don&rsquo;t have the experience or knowledge to understand what values
        are. If you don&rsquo;t understand what values are, and if you
        don&rsquo;t understand the values of others, you will most certainly
        never play a role in changing the values of others.
      </p>
      <p>
        A problem I see in libertarian culture is that many people take a few
        philosophical theories and act like they are proven mathematical
        formulas. (Sometimes literally.) I see people ditch their former selves
        in order to manufacture a new personality that perfectly adopts the
        values of libertarianism under the assumption that libertarianism (or
        Austrian economics) is a perfect, objective answer to everything.
      </p>
      <p>
        In &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'http://www.artofmanliness.com/2009/05/31/30-days-to-a-better-man-day-1-define-your-core-values/',
          }}
        >
          Defining Your Core Values
        </LinkComponent>
        &rdquo; Brett and Kate McKay explain why it is important to develop your
        own values through your own internal compass.
      </p>
      <blockquote>
        When you don&rsquo;t know or you haven&rsquo;t clearly defined your
        values, you end up drifting along in life. Instead of basing your
        decisions on an internal compass, you make choices based on
        circumstances and <strong>social pressures</strong>. You end up trying
        to{' '}
        <strong>
          fulfill other people&rsquo;s expectations instead of your own
        </strong>
        . And before you know it, life has passed you by and you haven&rsquo;t
        even started to live. Trying to be someone else and living without core
        values is down right exhausting and leaves you feeling empty and
        shiftless. Conversely, living a life in line with your core values
        brings purpose, direction, happiness, and wholeness.
      </blockquote>
      <p>
        If your values don&rsquo;t come from internal analysis, but from books
        or from your libertarian peers, you&rsquo;re living by something that
        isn&rsquo;t yours. And that can be as equally exhausting as having no
        values. In fact, it&rsquo;s truer that you&rsquo;ll end up trying to
        live up to the expectations others have for you (which may be wrong
        based on the identity trap) instead of your own.
      </p>
      <p>
        Taking on the principles of libertarianism can be exhilarating the first
        time you&rsquo;re introduced. I spent four years obsessing over every
        live Mises Institute class and every book recommended by Ron Paul, Tom
        Woods, or Lew Rockwell. But seeing others not accept those same
        principles became frustrating. I didn&rsquo;t just want to share what I
        was learning, I wanted to give everyone the secrets to the universe.
        Even though I didn&rsquo;t have them. That frustration mixed with the
        fact that I was a walking billboard for the words of others made talking
        to people about libertarianism difficult.
      </p>
      <p>
        Think about it from the other side. A newly born anarcho-communist just
        finished reading &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'https://www.marxists.org/reference/archive/kropotkin-peter/1902/mutual-aid/',
          }}
        >
          Mutual Aid: A Factor of Evolution
        </LinkComponent>
        &rdquo; by Peter Kropotkin. They&rsquo;re excited to espouse the ideas
        of cooperation and mutual aid as a superior form of society. They tell
        you about Kropotkin&rsquo;s scientific expedition and pre-feudal
        societies. Both of which &ldquo;prove&rdquo; their point. But all
        they&rsquo;re doing is repeating simple talking points that have no
        relation to you or anything you care about. It&rsquo;s mind-numbing.
        You&rsquo;re not only bored but you&rsquo;re being told that what you
        believe is a morally repugnant position based on the propaganda of the
        capitalist class.
      </p>
      <p>
        In this case, you&rsquo;re much less likely to care about the findings
        of Kropotkin and how you can apply that to your own beliefs. In fact,
        you&rsquo;re likely to dismiss all ideas found within anarcho-communist
        literature altogether. That&rsquo;s called the{' '}
        <strong>backfire effect</strong>, and it&rsquo;s probably more common
        than you think.
      </p>
      <p>
        The backfire effect is when hearing contradictory evidence to their
        beliefs, people&rsquo;s beliefs get stronger. We all have a natural
        instinct to protect our beliefs. When someone challenges them or
        blindsides us with new information, we stubbornly stick to our original
        beliefs and sometimes desperately seek out any small amount of
        information that may provide comfort. The internet has made it very easy
        to find information that agrees with us so that we don&rsquo;t have to
        critically think about the information that disagrees with us.
      </p>
      <p>
        Liberals show the backfire effect when they&rsquo;re given information
        on the economic effects of government funding. Conservatives when given
        information on the dangers of the drug war, or any war for that matter.
        Libertarians may experience it when given information about how gold is
        a bad investment and a terrible store of wealth. Granted, a preference
        for gold is far less dangerous than economic leeching and waging
        unnecessary war, but the particular issues aren&rsquo;t the point. The
        point is that everyone experiences the backfire effect, without
        exception.
      </p>
      <p>
        If we dig a little deeper with the backfire effect, things get much more
        interesting. Libertarians are more often obsessed with the literature
        that confirms their own beliefs. They read libertarian authors more than
        liberals and conservatives read liberal and conservative authors. So
        they&rsquo;re already more vulnerable to{' '}
        <strong>confirmation bias</strong>. However, what if we consider that
        because of this, libertarians share more literature and links, and that
        helps create the backfire effect for the other side? Many believe that
        sharing a lot of information is a way to advertise greater wisdom and
        credibility. First of all, reading more does not make one smarter.
        Second, considering what we&rsquo;ve gone over, what if plainly sharing
        information only made things worse? Give the opposition opposing
        &ldquo;facts&rdquo; (according to the perspective of your sources) and
        you help solidify their beliefs due to the backfire effect.
      </p>
      <p>
        To think about this more in-depth, we can look at holocaust deniers. In
        &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'http://www.holocaust-trc.org/denying-history/',
          }}
        >
          Denying History: Who Says the Holocaust Never Happened and Why do They
          Say It?
        </LinkComponent>
        &rdquo; authors Michael Shermer and Alex Grobman note:
      </p>
      <blockquote>
        Most Holocaust deniers are very knowledgeable about very specific
        aspects of the Holocaust &ndash; a gas chamber door that cannot lock,
        the temperature at which Zyklon-B evaporates or the lack of a metal grid
        over the peephole on a gas chamber &ndash; so that anyone who is not
        versed in these specifics cannot properly question and answer their
        claims.
      </blockquote>
      <p>
        In many cases, those who deny the existence of the holocaust, know more
        about it than the experts. Deniers gain their expertise through years of
        confirmation bias and backfire effect. The best, most practiced deniers
        have the perfect answer to everything. They may be able to out debate
        anyone about the holocaust. But could they convince anyone to believe as
        they believe? Maybe a very small amount, but certainly not a lot of
        people fall for it.
      </p>
      <p>
        The point here is indeed to compare libertarians to holocaust deniers.
        But that is in no way to suggest that libertarians are wrong about
        anything in particular. The issue here isn&rsquo;t right and wrong,
        it&rsquo;s about how we are perceived. And let&rsquo;s be honest, the
        image the average person has about libertarians in their head is very
        similar to their image of holocaust deniers. Libertarians put a lot of
        time and practice into having the perfect answer to everything. Even
        worse, they think they actually have the perfect answer to everything.
      </p>
      <p>
        If you ask a libertarian about abortion they will almost always be
        pro-choice and have what they perceive to be a very
        &lsquo;logical&rsquo; explanation as to why that position is the only
        correct answer. But ask them on a personal level, put aside the
        politics, and it&rsquo;s about 50/50. On vaccinations, libertarians will
        very heavily reject the idea that they should be required based on
        &ldquo;the use of force,&rdquo; which they believe to be an objective
        standard. But again, take the conversation more personally, and they
        start to recognize that unvaccinated people can be a danger to the young
        and weak.
      </p>
      <p>
        Again, this has nothing to do with the issues and their particular
        &ldquo;answers.&rdquo; I have talked to members of many political
        thoughts on their most important issues, doing nothing but asking and
        listening. While I agree with libertarians almost 100% of the time,
        there is no one that tows the party line with a greater patriotism and
        fervor than libertarians.
      </p>
      <h2>Loyalty to the Collective</h2>
      <p>
        The second you have an opinion that does not fall in line with
        &ldquo;libertarian values,&rdquo; you are officially deemed &ldquo;not
        libertarian.&rdquo; I can&rsquo;t count how many times I&rsquo;ve been
        called a leftist or an undercover fed for questioning a libertarian
        idea. I&rsquo;ve even been called those things for suggesting that there
        is an image problem within libertarianism. (I&rsquo;m sure someone will
        do it after reading the first paragraph of this very article.)
      </p>
      <p>
        In order to be accepted by the libertarian community, you must think and
        act in a certain way. If you disagree with the wrong thing, you will be
        looked upon with suspicion.
      </p>
      <p>
        Jonathan Mead, writer at{' '}
        <LinkComponent linkProperties={{ href: 'http://paidtoexist.com/' }}>
          Paid to Exist
        </LinkComponent>
        , asked his male friends what the one thing they felt was missing in
        their lives that held them back from becoming a man. With an
        overwhelming majority, the responses had to do with a painful absence of
        brotherhood or mentorship. A stereotypical male relationship may revolve
        around getting drunk, chasing women, and watching football. Taking an
        interest in these activities is often only a way to gain acceptance
        within the group. Just like the college kids who drink cheap beer
        mentioned as an example of pluralistic ignorance.
      </p>
      <p>
        In order to be accepted by the libertarian community, you must act in a
        certain way. Someone who doesn&rsquo;t like bitcoin, thinks the NAP is
        impractical, hates guns, and is bored with stroking his or her own ego
        by repeating libertarian talking points amongst friends? Not a real
        libertarian. Maybe this is why the libertarian community lacks
        camaraderie. Those within it are either wrapped up in drama or are
        really good at putting on the right mask in order to remain
        &ldquo;libertarian enough.&rdquo;
      </p>
      <p>
        I don&rsquo;t dislike bitcoin, but I&rsquo;ve put a lot of effort into
        talking about its failures and downsides. Every time I do, I&rsquo;m
        answered with typical answers from a 3&times;5 notecard, as Tom Woods
        likes to say. Cody Wilson tried to have the{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://ethanglover.biz/politics/need-bitcoin-foundation.php',
          }}
        >
          Bitcoin Foundation shut down
        </LinkComponent>{' '}
        (his site has since been taken down) because they had a conversation
        with the New York Legislature that eventually led to the dismissal of
        the &ldquo;BitLicense.&rdquo; Their communicating with a government
        agency is what made them officially not libertarian, and therefore,
        according to Wilson, they had to go. When I said that the Bitcoin
        Foundation&rsquo;s decisions have no effect on bitcoin, and that bitcoin
        is not a political tool and that there is no reason that it should
        remain politically pure, he responded with a small fit of rage. When I
        suggested that{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://freekeene.com/2016/07/21/is-bitcoin-a-failure/',
          }}
        >
          bitcoin has not lived up to its own standards
        </LinkComponent>{' '}
        from the beginning, I was given links to joke websites about how bitcoin
        has died a hundred times. An irrelevant response straight off the
        3&times;5 libertarian response card.
      </p>
      <p>
        The insistence on purity from libertarians is not just about vetting
        whether people are &ldquo;libertarians&rdquo; or not. It&rsquo;s become
        a moral decision. It&rsquo;s an isolation trick straight out of the
        Molyneux handbook. &ldquo;If you disagree with me, you disagree with the
        non-aggression principle. You are therefore a physical danger to me and
        I consider you my enemy.&rdquo; This is an awful way of thinking that
        has harmed countless relationships within the libertarian community. And
        it has most definitely prevented a very large amount of people from
        entering into, staying within, or even being curious about the actual
        beliefs. It&rsquo;s hard to see when you&rsquo;re entrenched in the
        libertarian world, but take a step back to see the whole picture and
        it&rsquo;s clear that once in the club, libertarians start to lose the
        ability to think for themselves. Once they&rsquo;re in, it becomes
        discouraged through a very heavy form of peer pressure.
      </p>
      <p>
        I once showed Bryan Sovryn why every single point on his &ldquo;
        <LinkComponent
          linkProperties={{ href: 'https://zomiaofflinegames.com/antigoogle/' }}
        >
          Anti-Google
        </LinkComponent>
        &rdquo; page is totally wrong. He agreed it was all wrong once we had
        gone over the reasons why, but has refused to do so to anyone else. He
        talks a big game about how he&rsquo;s willing to take back incorrect
        statements, but will not do so when most libertarians are against big
        tech companies like Google. Bryan eventually shrugged the issue off as
        unimportant. He said what&rsquo;s important is that people are conscious
        about thinking about privacy online. Maybe he fears going against the
        typical libertarian opinion. His show is partially dependent upon
        pandering to technophobe conspiracy, no matter how untrue. Similar to
        Alex Jones, a lot of confirmation bias research goes into creating one
        particular narrative that has been meticulously built and sculpted for
        the public. Neither Alex or Bryan can just correct themselves,
        they&rsquo;re too deep.
      </p>
      <p>
        The deeper you get into libertarian culture, the less{' '}
        <strong>autonomy</strong> you have over your own thinking and beliefs.
        There&rsquo;s no flexibility in fighting for what you believe in when
        you&rsquo;re restricted by purity semantics. In fact, research shows
        that when most people lack autonomy, they lack the ability to act or
        make decisions altogether. But if you are going to do &ldquo;activist
        work,&rdquo; a large part of that is maintaining a certain pure
        libertarian image. If you don&rsquo;t maintain that, you lose support.
        Just think about how quickly Gary Johnson lost support over baking cakes
        for gay people. There may be other &ldquo;purity issues&rdquo; with
        Johnson, but none so viral or as influential as the cake debacle.
      </p>
      <h2>Summarizing the Larger Point</h2>
      <p>
        Before we go any further, there&rsquo;s a lot of information here to
        summarize and put together. I&rsquo;ve done my best to repaint some big
        picture ideas I have going on in my head and if this is all too
        confusing or convoluted, use the comment section. For now, here&rsquo;s
        the summary so far.
      </p>
      <p>
        Projecting your personal beliefs onto libertarians and assuming that
        they&rsquo;re the majority opinion, and therefore correct (false
        consensus effect), can lead to incorrect expectations of others
        (identity trap). Being disappointed with your expectations, when
        you&rsquo;re expecting your peers to agree with you 100% of the time,
        can lead to a great deal of frustration. Solving this matter comes down
        to developing theory of mind. This will help you to better understand
        that people are unique individuals and have different interests and
        values. Even if you belong to the same group. When members of a group
        have copied their beliefs and values from other figures (Rothbard, Ron
        Paul, etc.), it can lead to exhaustion and even more frustration. If you
        try to convince others that their beliefs or values are wrong because
        they&rsquo;re not &ldquo;by the book&rdquo; or not technically correct
        due to some colloquial choices in words, it leads to further unnecessary
        frustration.
      </p>
      <p>
        Someone who argues on the basis of purity and &ldquo;by the book&rdquo;
        information has a greater chance of initiating the backfire effect in
        the person they are talking to. That is, the person they are talking to
        becomes more solidified in their beliefs the more that someone talks
        about how they are wrong. A comparison can be made to holocaust deniers.
        Deniers often know more than experts regarding the holocaust and have
        more information on hand to back up their claims than a typical scholar.
        The way they argue and the way they insist through aggressive tactics of
        &ldquo;This is correct! This is the information that&rsquo;s
        important!&rdquo; comes across as desperate. Those desperate arguments
        do not get attention and deniers are labeled as crazy without further
        consideration.
      </p>
      <p>
        The more you insist on informational purity and correcting people on
        every little definition and semantic, the less credible you are. And by
        extension, the less credible your information has from the perspective
        of the non-libertarian. Purity arguments harm personal relationships and
        weaken social connections as well. Calling out people who are not
        &ldquo;libertarian enough&rdquo; all the time, labeling them as
        leftists, statists or feds because they disagree with one thing
        restricts autonomy of thought within libertarianism and not only
        destroys community&nbsp;but discourages further activism. It then
        replaces it with a small, ineffective group that is more like a cult
        than a movement.
      </p>
      <h2>The Solution</h2>
      <p>
        The simple (but not complete) answer to all of this is theory of mind.
        Make an effort to understand the individuality and nuances of other
        people and you start to appreciate their differences rather than fight
        them because they&rsquo;re not &ldquo;perfect.&rdquo; This allows for
        autonomy and new thought within libertarianism that could help it grow.
        Breaking out of the 3&times;5 libertarian notecard allows for
        flexibility, growth, and magnetism. It means the culture becomes more
        attractive, and therefore its principles gain more attention. It&rsquo;s
        not the principles that are holding libertarianism back, people accept
        the core values, it&rsquo;s the people that are holding this philosophy
        back.
      </p>
      <p>
        To make that simple answer more practical, I want to go over{' '}
        <strong>deep canvassing</strong>. A method of activist outreach that has
        multiple scientific studies showing it&rsquo;s{' '}
        <LinkComponent
          linkProperties={{
            href: 'http://www.npr.org/sections/health-shots/2016/04/07/473383882/study-finds-deep-conversations-can-reduce-transgender-prejudice',
          }}
        >
          the most effective way to get people to change their minds
        </LinkComponent>
        . It relates to the above points because it not only reinforces the
        ideas that libertarian recruitment has been all wrong, and that its
        culture can be very off-putting, but it also provides an avenue to
        practice your ability to help cultivate a better community while doing
        effective activism. It&rsquo;s a win-win.
      </p>
      <p>
        David Fleischer of the LA LGBT Center discovered deep canvassing while
        doing Proposition 8 outreach in California. He noticed one simple thing,
        people were more open to change when approached in a nonjudgmental way.
        Activists were much more effective when they listened to personal
        stories, and even told their own. Instead of providing &ldquo;rational
        arguments&rdquo; and telling people why they should think in a
        particular way. The typical libertarian way of arguing makes people feel
        like they&rsquo;re being attacked. You can&rsquo;t connect with someone,
        understand their values, or help them understand yours if you&rsquo;re
        attacking them. You can if you&rsquo;re listening and having a decent
        conversation. Without judging their beliefs or use of words.
      </p>
      <YouTubeEmbed
        id="_tdjtFRdbAo"
        title="Watch A Voter Change Their Mind About Transgender Discrimination | LA LGBT Center"
      />
      <p>
        Yes, deep canvassing can go both ways. If you talk to a liberal for 10
        minutes on a personal level, you may walk away a little more liberal
        without having an effect on them. That&rsquo;s the risk. That
        doesn&rsquo;t mean you should run home and Google Rothbard quotes like a
        catholic girl who brushed against a guys leg and ran to the bible to
        help rid herself of impure thoughts. It just means you&rsquo;ve found
        something that may warrant further discussion and exploration. Maybe
        you&rsquo;ve found something you disagree with libertarians about,
        there&rsquo;s certainly no harm in that.
      </p>
      <p>
        I use deep canvassing as my final point because it is very hard to
        change the self. It is, however, very easy to implement new methods to
        achieve external goals. Consciously using a method as a tool to help
        people understand your personal values in a way that helps you
        understand their values runs in line with everything I mentioned above.
      </p>
      <p>
        If you try to understand others, you won&rsquo;t project your own
        beliefs on them. By speaking with other libertarians with understanding,
        you&rsquo;ll learn more about libertarianism instead of just assuming
        your perspective is the one correct answer. You won&rsquo;t have
        incorrect expectations of others, which will save a lot of frustration.
        Exploring the minds of others will help develop theory of mind and give
        you a better idea of how to learn from them or teach them. It will help
        you explore the values of others as well as develop and refine your own
        unique values. It will make your conversations more holistic and
        attractive, which will help the attractiveness of your positions. With
        practice and time, you&rsquo;ll develop more and more autonomy in the
        way you think which will not only help you become more active&nbsp;but
        make the libertarian community and its ideas more attractive as a whole.
      </p>
    </StaticBlogLayout>
  );
};

export default TheImageProblemAndItsSolution;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('the-image-problem-and-its-solution');
}
