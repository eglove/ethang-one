import { NextLink } from '@ethang/react-components';
import { DiscussionEmbed } from 'disqus-react';
import getYouTubeID from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import { Container } from '../components/common/container/container';
import { HeadTag } from '../components/common/head-tag/head-tag';
import { ImageComponent } from '../components/common/image-component/image-component';
import styles from '../components/common/styles/common.module.css';
import { allImages } from '../db/data/images/all-images';
import commonStyles from '../styles/common.module.css';
import { BASE_URL } from '../util/constants';

function AboutMe(): JSX.Element {
  const cdcSystemsThinking = getYouTubeID(
    'https://www.youtube.com/watch?v=Fo3ndxVOZEo'
  );

  return (
    <Container>
      <HeadTag title="About Me" />
      <ol
        itemScope
        className={commonStyles.Breadcrumb}
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/ListItem"
        >
          <NextLink linkProperties={{ href: '/', itemProp: 'item' }}>
            <span itemProp="name">Home</span>
          </NextLink>
          <meta itemProp="position" content="1" />
        </li>
        <li
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/ListItem"
        >
          <NextLink linkProperties={{ href: '/about-me', itemProp: 'item' }}>
            <span itemProp="name">About Me</span>
          </NextLink>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
      <h1 id="aboutMe">About Me</h1>
      <ul className={styles.toc}>
        <li>
          <NextLink linkProperties={{ href: '#systemsThinking' }}>
            Systems Thinking
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#standardization' }}>
            Standardization
          </NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#stoicism' }}>Stoicism</NextLink>
        </li>
        <li>
          <NextLink linkProperties={{ href: '#learning' }}>Learning</NextLink>
        </li>
      </ul>
      <h2 id="systemsThinking">
        Systems Thinking{' '}
        <NextLink linkProperties={{ href: '#aboutMe' }}>⤴</NextLink>
      </h2>
      <p>
        First. <b>I tend to be a systems thinker.</b> There is great value in
        reductionism. It&apos;s how I learn any brand new topic. When I first
        learned programming, I did so by breaking everything down into their
        smallest pieces and learning the individual parts. That helped me to use
        more complex features later down the line.
      </p>
      <p>
        However, that method did not help me to continue to learn new languages
        and concepts. What helped, was systems thinking. I learn by finding
        relationships between things that I&apos;ve learned in the past. It
        helps to think about the larger system. How does anything new I come
        across relate to what I already know?
      </p>
      <p>
        When I code new features, I tend to approach it from the context of the
        entire system. How is this going to interact with the rest of the
        application? What are the possible unintended consequences of committing
        to the first, and simplest solution? Is there design or architecture
        that can ensure the safety, long term stability, and usability of my
        code?{' '}
        <b>
          The goal is large changes in behavior with few unintended
          consequences.
        </b>
      </p>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <ImageComponent image={allImages.blogImages.changeVsConsequence} />
      </div>
      <p>
        This is done by thinking about potential for code reuse (design and
        architecture), understanding the system around the code, rather than
        just looking for the results requested in the requirements, then
        representing what needs to be done. To me, diagramming, UML&apos;s or
        wireframes are very helpful to describe to everyone involved what can
        and should be done.
      </p>
      {cdcSystemsThinking && (
        <LiteYouTubeEmbed
          id={cdcSystemsThinking}
          title="The Value of Systems Thinking"
        />
      )}
      <h2 id="standardization">
        Standardization{' '}
        <NextLink linkProperties={{ href: '#aboutMe' }}>⤴</NextLink>
      </h2>
      <p>
        I love standardization in languages, and I understand the value of them.
        The most clear example is SQL, standardized under{' '}
        <NextLink
          linkProperties={{ href: 'https://www.iso.org/standard/63555.html' }}
        >
          ISO/IEC 9075-1:2016
        </NextLink>
        . Or the JavaScript standards of{' '}
        <NextLink
          linkProperties={{ href: 'https://www.ecma-international.org/' }}
        >
          Ecma International
        </NextLink>
        . These standardizations allow frameworks to build on top of something
        very stable with the best support. They also allow for the scenario of
        knowing SQL and JavaScript and easily being able to jump into MySQL or
        React. No matter what the latest JS framework or DBMS, knowing and
        keeping up with the foundation, standardized languages, means having a
        solid base level of knowledge to always come back to. It also means
        having the ability to create your own solutions, even frameworks,
        without having a dependency on fickle third parties.
      </p>
      <p>
        And of course knowledge of standards is something to layer new knowledge
        on top of as a frame of reference.
      </p>
      <p>
        Putting focus on standardized languages rather than frameworks ensures
        the long term stability of your own marketability. (Frameworks come and
        go.) It also allows you to employ the{' '}
        <NextLink
          linkProperties={{
            href: 'https://en.wikipedia.org/wiki/Rule_of_least_power',
          }}
        >
          Rule of least power
        </NextLink>
        . By not overvaluing frameworks it&apos;s hard not to notice their
        sometimes overly complex solutions whose abstractions can be harder to
        use, and slower in performance than what its trying to abstract. This is
        often due to those foundation languages expanding or updating themselves
        so as to make their replacements unnecessary. (jQuery is dead, and so is
        Axios)
      </p>
      <p>
        This does not mean I am against the use of frameworks. The use of
        frameworks allow you to build far more, far faster, with far fewer
        headaches. I used Next.js and Sanity to build this site. Both are
        frameworks of the React framework. I use two packages to handle
        embedding YouTube videos. Even on a page with plain, static HTML such as
        this one.
      </p>
      <p>
        My point is only to remain aware of the most base level, standardized
        languages, their updates, their philosophy, and how to use them. Because
        often, the tools we take for granted are not doing us any favors.
      </p>
      <h2 id="stoicism">
        Stoicism <NextLink linkProperties={{ href: '#aboutMe' }}>⤴</NextLink>
      </h2>
      <p>
        Stoicism can mean different things to different people. What I take from
        it is the idea that I don&apos;t need to react to things that are out of
        my control. Sometimes having an emotional reaction to things out of our
        control can mean validation. If Person A has a lack of panic in a
        serious situation, Person B may think Person A is not taking the
        situation seriously. In fact, I think Person A has the correct mindset.
        Accept the situation, and do what you can. You can not control what has
        already happened.
      </p>
      <p>
        You absolutely can take steps to prevent problems in the future. But
        that comes after. And usually with a quick reality check.
      </p>
      <p>
        I try to be a stoic as much as I can. I try to focus on what I can
        change, and not worry about what I can&apos;t. Although I can&apos;t say
        I&apos;m perfectly consistent with it.
      </p>
      <h2 id="learning">
        Learning <NextLink linkProperties={{ href: '#aboutMe' }}>⤴</NextLink>
      </h2>
      <p>
        I learn by association. Just as I mentioned in the systems thinking
        section. I try to understand base concepts and keep them in my pocket
        for any language or framework. &ldquo;I want to use a mixin, how do I do
        that in PHP? Oh, it&apos;s called a Trait.&rdquo;
      </p>
      <p>
        I try to have a broad range of knowledge across a lot of languages and
        frameworks. As evidenced by my{' '}
        <NextLink linkProperties={{ href: '/' }}>home page</NextLink>. If I talk
        about the disadvantage of your personal favorite, I say that in
        reference to all of the others I&apos;ve worked with. It&apos;s not an
        insult. If I talk about the advantage of something, it is most likely
        not an argument, it is a statement.
      </p>
      <p>
        Wanting to branch out and learn as much as possible has been a point of
        confusion for others understanding &lsquo;who I am&rsquo;. My homepage
        randomly lists technologies I&apos;ve touched. The randomness is very
        much for a reason. Because I don&apos;t want to be considered an X
        developer, I want to be considered a developer. This is a difficult
        concept for people to get around who have dedicated themselves to the
        expertise of a particular language or particular tool.
      </p>
      <p>
        While I respect the ability to fully dedicate yourself to a niche, my
        interpretation of that is &lsquo;development.&rsquo; Not &lsquo;x
        development&rsquo;. It&apos;s simply a matter of personal preference and
        thinking. Not better than, or worse then, just personal to me.
      </p>
      <p>
        I love learning. I love tracking down the best courses on learning. My{' '}
        <NextLink linkProperties={{ href: '/courses' }}>
          recommended courses
        </NextLink>{' '}
        page is a page, not a blog post. Because it is an important, permanent
        fixture of this site and who I am. Always a plan to learn something new.
        Always looking to create relationships between what I have learned and
        what I haven&apos;t. Not choosing a favorite to stick to, but
        understanding programming as a whole.
      </p>
      <DiscussionEmbed
        shortname="ethang"
        config={{
          identifier: 'aboutMe',
          language: 'en-US',
          url: `${BASE_URL}/about-me`,
        }}
      />
    </Container>
  );
}

export default AboutMe;
