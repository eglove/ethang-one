import Gist from 'react-gist';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

const LessonsLearnedFromRewritingAReactApp = ({
  blog,
}: BlogProperties): JSX.Element => {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        Video meetings, chat, phone calls, voicemail, calendar, and filesharing.
        This is roughly the app I spent the last couple of months rewriting from
        the ground up. The original project started before me with Twilio&apos;s{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/twilio/twilio-video-app-react',
          }}
        >
          example React app
        </LinkComponent>{' '}
        and it seems every change from there was just a litany of simple logic
        piled on top to force things to work. The architecture didn&apos;t match
        what we were trying to do. The Material UI implementation was putting
        custom layouts into a stranglehold. And don&apos;t get me started on
        conflicting CORS rules, and routing between an express node server and
        react-router.
      </p>
      <p>
        I had the chance to take what was there and pull it into a new project.
        I removed Material UI completely (vanilla CSS is more scalable) and
        brought in Next.js as a framework.
      </p>
      <p>
        I thought I would do my best to share some lessons learned during this
        process, what I did to improve things and what I would do differently in
        the future.
      </p>
      <h2>React is Not a Framework</h2>
      <p>
        React is a UI library. Not a framework. It&apos;s very good at what it
        does. Hooks are brilliant. But I don&apos;t believe it&apos;s realistic
        to build the frontend for a large complex app with only React.
        Especially when you&apos;re trying to do a lot of live or dynamic data
        with many integrations. (We&apos;ll get back to handling this stuff
        later.)
      </p>
      <p>That&apos;s where Next.js comes in.</p>
      <p>
        Next.js is a React framework. Complete with its own server to build an
        API and handle server-side rendering. As well as a brilliant Image
        component (that seems to be using web assembly these days),
        directory-based routing, data fetching tools and more. I would even
        argue that Next is a full-stack framework, albeit a small one.
      </p>
      <p>
        If you&apos;re working with a well-written API that follows proper REST
        conventions, or better yet a GraphQL API and don&apos;t have a lot of
        client-side rendering, you can survive with pure React. But honestly,
        why bother with react-router and the{' '}
        <LinkComponent
          linkProperties={{ href: 'https://css-tricks.com/images-are-hard/' }}
        >
          headache of image tags
        </LinkComponent>
        ? If you&apos;re starting a new React project I recommend always going
        Next.js.
      </p>
      <h2>Use Eslint</h2>
      <p>
        I created{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/eslint-config-ethang/blob/master/index.js',
          }}
        >
          my own lint config for Next and TypeScript
        </LinkComponent>
        . It basically just extends... well... a lot of stuff. Critics may note
        that there&apos;s a lot of stuff overwriting a lot of stuff. And that is
        a valid criticism. But to me, the more hardcore the eslint config, the
        better. And with some tweaking to order and a few custom rules, this is
        working out for me.
      </p>
      <p>
        Eslint can catch a lot of issues such as missing useEffect dependencies
        (note the useEffect article I link below), accessibility issues, unused
        imports, inefficient algorithms, etc. Hell, you can even use it to sort
        imports and alphabetically order object properties.
      </p>
      <p>
        At a minimum, I would highly recommend the{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://nextjs.org/docs/basic-features/eslint',
          }}
        >
          next configs
        </LinkComponent>
        , prettier, jsx-a11y, react-hooks, and typescript-eslint. But don&apos;t
        be afraid to get deeper and continuously tweak. Even create your own
        config that you can share between projects.
      </p>
      <h2>Use TypeScript</h2>
      <p>
        I can&apos;t tell you how many times TypeScript has saved my ass or made
        life easier. I would hate to write JavaScript without it. If you
        haven&apos;t gotten into TS yet, or you&apos;re still thinking,
        &ldquo;It&apos;s extra typing for no benefit.&rdquo; Go learn TypeScript
        right now. I recommend{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://academy.zerotomastery.io/p/learn-typescript',
          }}
        >
          Stephen Grider&apos;s course
        </LinkComponent>
        .
      </p>
      <p>
        With TypeScript, I created interfaces for any data calls to a REST API I
        made, got more comfortable with generics to make code more reusable and
        easier to read, created a pretty cool form generator using OOP style
        classes, and best of all, my Intellisense is totally superpowered.
      </p>
      <Gist id="2d6a18bbcbb12bb92ae90e64d5ee4211" />
      <Gist id="33750dba317c8f9a71070442aafe8b4c" />
      <Gist id="88b4eecbf78f5fe9265654ec162d73ea" />
      <h2>Don&apos;t Abstract Fetch</h2>
      <p>
        I&apos;m working with a lot of APIs. Twilio, Rocket Chat, FileCloud,
        Outlook, and of course our own. Using REST, WebSockets, and WebRTC.
        I&apos;m doing server-side calls, client-side calls, polling, cache
        invalidation, and listening to websockets. Fetching has become my
        biggest pain point on this project.
      </p>
      <p>
        For get requests I use{' '}
        <LinkComponent linkProperties={{ href: 'https://swr.vercel.app/' }}>
          useSWR
        </LinkComponent>{' '}
        and for posts I wrote a custom usePost hook (as useSWR isn&apos;t really
        intended for pushing data).
      </p>
      <p>
        It&apos;s tempting to create a file that exports a bunch of fetch
        requests to any endpoint so you can use them anywhere in the
        application. But this doesn&apos;t sit right with me. Do you export
        promises? Or do you create hooks with state and useEffect? How do you
        call those hooks conditionally? How do you handle promises in non-async
        functions? What happens when you got a lot of requests for a complex
        page with many integrations?
      </p>
      <p>
        useSwr is good at handling conditional calls. If the URL is null, it
        won&apos;t do anything. But if that changes, it will. A little something
        like the below will make sure the call is not made until userId is
        available. (For example, if you&apos;re pulling it from state.) You can
        expand this logic however you like.
      </p>
      <p>
        <code>
          {`const {data} = useSwr(userId ? \`domain.com/\${userId}\` : null)`}
        </code>
      </p>
      <p>
        My usePost hook works the same way, except instead of running as soon as
        url is available, it exports an execute function.
      </p>
      <Gist id="664a4fbcef3375e832dab8a369dcf458" />
      <p>
        So what&apos;s the problem with this? Chaining requests is the problem.
        Let&apos;s say in order to create a group file share you have to login
        to the api, grab cookies off the response, use those to create a
        directory, add a &ldquo;share&rdquo; to it, take the shareId to update
        its name, and mark it as private, add each user to the directory one at
        a time, then set each user&apos;s permissions in that directory one at a
        time. That&apos;s a minimum of 6 REST API calls that have to be done in
        order. What do you do? Link a bunch of useEffects together?
      </p>
      <p>
        You might say, that&apos;s a job for the backend. Great, with Next.js we
        have our own Node API. It&apos;s perfect for this kind of thing.
        (I&apos;ll get back to some other use cases for the Next API later).
        However, things didn&apos;t always work out like this for me. There were
        a lot of cases where I needed live data flow to change the client-side.
        It&apos;s just not always optimal to do everything server-side.
        (We&apos;ll get back to this too.) And I did, admittedly, do some pretty
        nasty useEffect chaining. (By this I mean one useEffect has the returned
        data of another useEffect as a dependency.)
      </p>
      <p>Here&apos;s what I found that works better:</p>
      <Gist id="20fb9118495c713d678b6f38b7768216" />
      <p>
        TypeScript gives us the opportunity to build some good ol&apos; OOP
        classes. An object with methods, and an instantiation that can keep
        track of any properties. ...It just feels structured. Now I know, hooks
        are brilliant. I love stumbling across new hook repos just to see what
        people have done with them.{' '}
        <LinkComponent
          linkProperties={{ href: 'https://reactjs.org/docs/hooks-rules.html' }}
        >
          But they have rules.
        </LinkComponent>{' '}
        Rules you should follow. And if those rules conflict with what
        you&apos;re trying to do. Find another way.
      </p>
      <p>
        A TypeScript class is{' '}
        <strong>
          code that can be shared by both the Next API and your client.
        </strong>{' '}
        So wherever it is most appropriate to make these calls, you can do it
        with the same code. This is pretty freaking cool if you ask me.
      </p>
      <code>const rocketChat = new RocketChatController();</code>
      <br />
      <code>await rocketChat.login();</code>
      <h2>Don&apos;t SSR Everything</h2>
      <p>
        <LinkComponent
          linkProperties={{
            href: 'https://www.reddit.com/r/nextjs/comments/q6o81b/ssr_very_slow/',
          }}
        >
          Just because
        </LinkComponent>{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://www.reddit.com/r/nextjs/comments/q6es9u/should_i_implement_ssr_before_react_native_or/',
          }}
        >
          you&apos;re using
        </LinkComponent>{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://www.reddit.com/r/nextjs/comments/ph2i4u/ssr_data_fetching_trick/',
          }}
        >
          Next, doesn&apos;t
        </LinkComponent>{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://www.reddit.com/r/nextjs/comments/ml4i2t/ssr_pages_cold_start_improve_performance/',
          }}
        >
          mean everything
        </LinkComponent>{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://www.reddit.com/r/nextjs/comments/ncgix2/what_is_the_point_of_nextjs_ssr/',
          }}
        >
          should be
        </LinkComponent>{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://www.reddit.com/r/nextjs/comments/mhel96/ssr_performance_improvements/',
          }}
        >
          SSR
        </LinkComponent>
        .
      </p>
      <p>
        Next does a lot of cool optimization without any input from you. CSS for
        example is rendered server-side. (I also highly recommend using{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/',
          }}
        >
          CSS modules
        </LinkComponent>{' '}
        that React supports out of the box.) SSR isn&apos;t the only reason to
        use Next and it&apos;s not the only tool it has. Use the tools you need,
        when you need them.
      </p>
      <p>
        Get familiar with{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://nextjs.org/docs/basic-features/data-fetching',
          }}
        >
          all of the tools Next provides for data fetching
        </LinkComponent>
        . Familiarize yourself with useSWR (previously mentioned) and don&apos;t
        be afraid to do a good ol&apos; client-side fetch. Especially when
        dealing with live or dynamic data. You should know these tools and when
        to use them. Putting too much work on the server is just as bad as
        putting too much work on the browser. Split it up, load only what you
        need, when you need it.
      </p>
      <h2>Learn From Smart People, Don&apos;t Stop Learning</h2>
      <p>
        I initially learned React from{' '}
        <LinkComponent linkProperties={{ href: 'https://advancedreact.com/' }}>
          Wes Bos
        </LinkComponent>
        . and did a lot of{' '}
        <LinkComponent
          linkProperties={{ href: 'https://www.ethang.dev/courses' }}
        >
          Andrei Neagoie and Stephen Grider courses
        </LinkComponent>
        . Since then I&apos;ve come across guys like Dan Abramov and Harry Wolf.
        I&apos;ve even linked some of their articles in my documentation of this
        project. Specifically:
      </p>
      <p>
        <ul>
          <li>
            <LinkComponent
              linkProperties={{
                href: 'https://overreacted.io/a-complete-guide-to-useeffect/',
              }}
            >
              A Complete Guide to useEffect
            </LinkComponent>
            (Please read this!)
          </li>
          <li>
            <LinkComponent
              linkProperties={{
                href: 'https://hswolff.com/blog/why-i-love-usereducer/',
              }}
            >
              Why I Love useReducer
            </LinkComponent>
          </li>
          <li>
            <LinkComponent
              linkProperties={{
                href: 'https://hswolff.com/blog/level-up-usereducer-with-immer/',
              }}
            >
              Level Up useReducer with Immer
            </LinkComponent>
          </li>
          <li>
            <LinkComponent
              linkProperties={{
                href: 'https://hswolff.com/blog/how-to-usecontext-with-usereducer/',
              }}
            >
              How To useContext With useReducer
            </LinkComponent>
          </li>
        </ul>
      </p>
      <p>
        Don&apos;t ever think you know everything, you never will. I&apos;ve
        come across know-it-alls, worked with know-it-alls, and seen projects
        decimated by know-it-alls. Stay open, keep finding new perspectives,
        keep getting deeper, and never let{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://en.wikipedia.org/wiki/Einstellung_effect',
          }}
        >
          Einstellung
        </LinkComponent>{' '}
        set in.
      </p>
      <h2>Use The Next API</h2>
      <p>
        Even if you&apos;re not intending to use Next for your entire stack, the
        Next API is a quick and easy way to solve some problems. Fixing bad REST
        APIs is one of them. Got an endpoint that returns too much data and
        doesn&apos;t have an option to paginate? Send it through Next, paginate
        the results and give yourself a structure that works well with useSWR.
      </p>
      <p>
        Need to make... ahem.... 6 REST calls to do one thing? Bundle it into a
        single call you can make on your front end.
      </p>
      <p>
        Want to work with environment variables that you don&apos;t want the
        client to have access to? API routes can access{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://nextjs.org/docs/basic-features/environment-variables',
          }}
        >
          environment variables
        </LinkComponent>{' '}
        that are not NEXT_PUBLIC.
      </p>
      <h2>Keep Scaling, Keep Refactoring</h2>
      <p>
        Don&apos;t get stuck with mistakes. I moved this project from taking two
        weeks to add a feature, to a few hours. (So long as an API doesn&apos;t
        give me too much trouble.) I&apos;ve got a lot of places in my code that
        I need to clean up. Fetch requests being one of them. I only thought of
        using classes recently.
      </p>
      <p>
        We&apos;re working on a GraphQL server that we&apos;re adding both our
        database and our third-party APIs to. We&apos;re discovering that we can
        create whatever crazy relationship we want to. A user&apos;s email on
        our database can fit nicely into a user search for RocketChat. Add it to
        the graph. Those chaining rest calls could be a series of relationships.
        Add it to the graph. Because our users have the same credentials for
        both the app and the integrations, we can start linking things together.
        Add it to the graph. For example:{' '}
      </p>
      <Gist id="7d7b4748eca65c3cd2cb6a13757c1830" />
      <p>
        Why not? Having a separate server that allows us to make these kinds of
        calls to basically abstract out interacting with data sources will be a
        huge boost.
      </p>
      <p>
        I&apos;ve thought about hooking something like Prisma up to connect Next
        directly to our database. But with a GraphQL server, I don&apos;t think
        that will be necessary or even preferable. But if I have a use for it,
        I&apos;d like to keep that in my back pocket. I mean, maybe there&apos;s
        a use for an SQLite server working with Prisma? A cool little in-memory
        app DB. Who knows, I&apos;m keeping an open mind.
      </p>
      <p>
        If you don&apos;t keep improving your code, it&apos;s going to fall
        apart. If you&apos;ve got a team that&apos;s afraid to step on each
        other&apos;s toes, or is paralyzed by a buggy codebase. Pause,
        reevaluate, and understand that time is an investment. If you want fast
        development and high productivity you need to invest in the foundation
        of your work. Don&apos;t think you can get there by brute force. And
        don&apos;t think you&apos;re better than &ldquo;new-fangled&rdquo;
        technologies. That kind of attitude will keep you and your team back.
      </p>
    </StaticBlogLayout>
  );
};

export default LessonsLearnedFromRewritingAReactApp;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('lessons-learned-from-rewriting-a-react-app');
}
