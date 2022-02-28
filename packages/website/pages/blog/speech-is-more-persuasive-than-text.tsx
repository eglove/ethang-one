import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { blogSlug } from '../../database/data/blogs';

const SpeechIsMorePersuasiveThanText = (): JSX.Element => {
  return (
    <StaticBlogLayout slug={blogSlug.speechPersuasive}>
      <p>
        Over a year ago, I laid out{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/https://cognitame.com/blog.php?id=138',
          }}
        >
          seven ways to win an argument online
        </LinkComponent>
        . Among those ways were using a positive, valent voice in first-person.
        As well as using a lot of detail and formatting the text in a pretty,
        easy to read way.
      </p>
      <p>
        One year later, the Association for Psychological Science published,
        &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/https://doi.org/10.1177/0956797617713798',
          }}
        >
          The Humanizing Voice: Speech Reveals, and Text Conceals, a More
          Thoughtful Mind in the Midst of Disagreement.
        </LinkComponent>
        &rdquo; In it, researchers{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/https://twitter.com/jschroeder0527',
          }}
        >
          Juliana Schroeder
        </LinkComponent>
        , Michael Kardas, and{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/http://faculty.chicagobooth.edu/nicholas.epley/',
          }}
        >
          Nicholas Epley
        </LinkComponent>{' '}
        found that people are more likely to dismiss an argument if it is in
        text. So while there are strategies to make yourself more persuasive
        online, the science has suggested that it&apos;s best to do it via
        audio.
      </p>
      <p>
        The study found that when people read an argument in text, they
        dehumanize the author. They judged the argument as mechanical and less
        responsive and warm. But when they heard the same argument over audio,
        they found it more &ldquo;human-like.&rdquo; This experiment was even
        repeated with employers. When potential employers heard applicant
        pitches rather than read, they were more like to hire that applicant.
      </p>
      <p>
        With this information, you might be thinking of starting up a podcast to
        have an effect on people. And you&apos;d be right to think that&apos;d
        have a bigger effect than a blog. But there&apos;s more to this story.
      </p>
      <p>
        Researchers{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/http://www.roghanizad.com/',
          }}
        >
          M. Mahdi Roghannizad
        </LinkComponent>{' '}
        and{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/https://twitter.com/profbohns',
          }}
        >
          Vanessa K. Bohns
        </LinkComponent>{' '}
        published a related paper in March 2017. &ldquo;
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/https://doi.org/10.1016/j.jesp.2016.10.002',
          }}
        >
          Ask in person: You&apos;re less persuasive than you think over email.
        </LinkComponent>
        &rdquo; In this study, they found that people are more likely to honor a
        request in person. Specifically, people are 34 times more likely to fill
        out a survey if the same request is made in person than if the request
        is made via email. While it may often be inconvenient, the science shows
        that you are much more likely to have an effect on people if you meet
        with them face to face.
      </p>
      <p>
        Whether you&apos;re talking online, by phone, or in person, however,
        there are plenty of rules that remain universal. Many of which,
        I&apos;ve talked about on this site before.
      </p>
      <p>
        The number one thing that I always tell people, if you want to be
        persuasive, you have to listen. Listen and make an effort to be curious
        about what other people believe. Curiosity not only gives you a dopamine
        hit, but allows you{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/https://cognitame.com/blog.php?id=142',
          }}
        >
          learn more, remember more, and be less bias.
        </LinkComponent>
      </p>
      <p>
        Once you understand who you&apos;re talking to, really know where
        they&apos;re coming from and how they think, you can use{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/https://cognitame.com/blog.php?id=141',
          }}
        >
          moral reframing
        </LinkComponent>
        . Moral reframing is when you change the wording of your arguments to
        address the concerns and values of the person you want to convince.
        Framing an argument from another persons point of view allows them to
        better understand and accept yours.
      </p>
      <p>
        If you combine all of these strategies, talking in person, listening,
        and reframing, you get deep canvassing. Multiple scientific studies have
        shown that{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://web.archive.org/web/20180904131811/https://cognitame.com/blog.php?id=51',
          }}
        >
          deep canvassing
        </LinkComponent>{' '}
        is the most effective way to get people to change their minds. While we
        can&apos;t always talk to people in person, we can always listen and
        reframe.
      </p>
      <p>
        I encourage people to try and affect the people physically around them
        rather than strangers on the internet to have a bigger effect. The
        research continues to show this as well.
      </p>
    </StaticBlogLayout>
  );
};

export default SpeechIsMorePersuasiveThanText;
