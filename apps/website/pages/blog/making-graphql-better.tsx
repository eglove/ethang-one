import { gql } from '@apollo/client';
import Gist from 'react-gist';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { ImageContainer } from '../../components/common/image-container/image-container';
import { LinkComponent } from '../../components/common/link-component/link-component';
import styles from '../../components/common/styles/common.module.css';
import { Data, Image } from '../../graphql/types';
import { BlogProperties, blogQuery } from '../../util/query';
import { apolloClient } from '../_app';

export interface MakingGraphqlBetterProperties extends BlogProperties {
  images: Record<string, Image>;
}

function MakingGraphqlBetter({
  blog,
  images,
}: MakingGraphqlBetterProperties): JSX.Element {
  const userQuery = `query Query {
    user(id: 123) {
      username
    }
  }`;

  const userQueryWithRelationship = `query Query {
    user(id: 123) {
      blogs {
        title
      }
    }
  }`;

  const relationInfo = `export interface RelationInfo {
    parentColumnName: string;
    parentTableName: string;
    relationColumnName: string;
  }`;

  const resolvedArguments = `const resolvedArguments = resolveArguments({
    arguments_,
    info,
    parent,
    relationInfo: [
      {
        parentColumnName: Prisma.User.userId,
        parentTableName: Prisma.ModelName.User,
        relationColumnName: Prisma.Blog.authorId,
      },
    ],
  });`;

  const relationLoop = `
  for (const relation of parameters.relationInfo) {
    if (parameters.info.parentType.name === relation.parentTableName) {
    }
  }
  `;

  const relationError = `if (typeof thisParent?.[relation.parentColumnName] === 'undefined') {
    throw new TypeError(
      \`Must call \${relation.parentColumnName} from \${relation.parentTableName}\`
    );
  }
  `;

  const resolvedArgumentsReturn = `return {
    ...parameters.arguments_,
    where: {
      [relation.relationColumnName]: thisParent?.[relation.parentColumnName],
      ...parameters.arguments_.where,
    },
  }`;

  const prismaManyToMany = `Prisma.Site.findUnique({where: {siteId}}).CaseData()`;

  const useSelect = `
  let resolvedArguments = parameters.arguments_;
  if (!ignoreSelect) {
    resolvedArguments.select = select<SelectType>(parameters.info);
  }
  `;

  const resolvedFindMany = `  return resolveFindMany({
    context,
    info,
    modelName: AmsData.ModelName.CaseData,
    parent,
    relationInfo,
    resolvedArguments,
  });`;

  const exampleResolver = `const blogs = async (
    parent: Record<string, unknown> | undefined,
    arguments_: Prisma.BlogFindManyArgs,
    context: Context
    info: GraphQLResolveInfo
  ): Promise<Blog[]> => {
    const resolvedArguments = resolveArguments({
        arguments_,
        info,
        parent,
        relationInfo: [
            {
                parentColumnName: Prisma.UserScalarFieldEnum.userId,
                parentTableName: Prisma.ModelName.User,
                relationColumnName: Prisma.BlogScalarFieldEnum.authorId,
            },
        ]
    });

    return prisma.blogs.findMany({ ...resolvedArguments });
  }`;

  return (
    <StaticBlogLayout blog={blog}>
      <ul id="top" className={styles.toc}>
        <li>
          <LinkComponent linkProperties={{ href: '#selectAll' }}>
            Select All
          </LinkComponent>{' '}
        </li>
        <li>
          <LinkComponent linkProperties={{ href: '#relationships' }}>
            Relationships
          </LinkComponent>{' '}
        </li>
        <li>
          <LinkComponent linkProperties={{ href: '#manyToMany' }}>
            Solving The Many-To-Many N+1 Problem
          </LinkComponent>{' '}
        </li>
        <li>
          <LinkComponent linkProperties={{ href: '#conclusion' }}>
            Last Words
          </LinkComponent>{' '}
        </li>
      </ul>
      <p>
        GraphQL is faster than REST. The specification itself doesn&apos;t make
        anything inherently faster. But by allowing the client to make highly
        specific requests, it naturally uses less resources.
      </p>
      <p>
        That being said, because GraphQL is just a specification and
        doesn&apos;t handle logic for you, just because you&apos;re using
        GraphQl doesn&apos;t mean you&apos;re taking full advantage.
      </p>
      <p>
        For example, when you use Prisma to write a resolver to fetch an item,
        GraphQL itself will only retrieve the data the caller requested.
        However, that does not mean Prisma won&apos;t retrieve that excess data
        from the database server side.
      </p>
      <h2 id="selectAll">
        Select All{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <SyntaxHighlighter language="typescript">{userQuery}</SyntaxHighlighter>
      <p>
        This query will only return the username field from a user resolver.
        (Let&apos;s assume we&apos;tre talking about a user database here.)
        However, that does not mean the Prisma function used to retrieve this
        data doesn&apos;t do:
      </p>
      <strong>
        <code>select * from user where id = 123</code>
      </strong>
      <p>
        Luckily,{' '}
        <LinkComponent linkProperties={{ href: 'https://paljs.com/' }}>
          PalJs
        </LinkComponent>{' '}
        provides an easy{' '}
        <LinkComponent
          linkProperties={{ href: 'https://paljs.com/plugins/select' }}
        >
          PrismaSelect
        </LinkComponent>{' '}
        function that looks at the info object from the GraphQL query and makes
        sure to only select the fields requested. You can abstract this into a
        very small and simple function to make it easy to use for all resolvers
        (info comes from every incoming Apollo query):
      </p>
      <Gist id="d8aee0c454a3eb47f4b120cc94d718f1" />
      <p>This will transform that select all SQL query into the following:</p>
      <strong>
        <code>select username from user where id = 123</code>
      </strong>
      <h2 id="relationships">
        Relationships{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        One of the challenges of writing resolvers can be creating relationships
        between tables. For example, I want to make the below query. The user
        table is related to the blog table with a relationship of{' '}
        <code>userId =&gt; authorId</code>.
      </p>
      <SyntaxHighlighter language="typescript">
        {userQueryWithRelationship}
      </SyntaxHighlighter>
      <p>There are a couple of things I want Prisma to do here.</p>
      <ol>
        <li>
          Recognize that the initial query to the users table needs to get
          userId if the child query is querying the blog table.
        </li>
        <li>
          Recognize that the userId field on user relates to the authorId field
          on blog.
        </li>
      </ol>
      <p>
        I don&apos;t want the caller to have to select the userId field and I
        don&apos;t want to spend too much time writing if statements for every
        resolver relationship. And unfortunately, the GraphQL info object and
        Prisma&apos;s generated types don&apos;t help us much here.
      </p>
      <p>
        So what I&apos;ve come up with is a resolveArguments function to do all
        of this work for me. Here&apos;s how it works:
      </p>
      <p>
        The key to the functionality is in the array of
        &ldquo;RelationInfo&rdquo; objects. Each item in the array represents a
        relationship between the resolver on the current table and the parent
        table in the nested GraphQL query. We use this function in the child
        resolver. Sticking with our example above, we&apos;d put this in the
        blogs resolver, not the user resolver.
      </p>
      <SyntaxHighlighter language="typescript">
        {relationInfo}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="typescript">
        {resolvedArguments}
      </SyntaxHighlighter>
      <p>
        Let&apos;s walk through what this function does. From the start, while
        we&apos;re resolving arguments we can go ahead and apply our select
        abstraction from above.
      </p>
      <SyntaxHighlighter language="typescript">{useSelect}</SyntaxHighlighter>
      <p>
        From here, we can start filling out the request. We do that by looping
        over the relationInfo array and finding which one of it&apos;s parent
        table names relates to the info objects parent table name.
      </p>
      <SyntaxHighlighter language="typescript">
        {relationLoop}
      </SyntaxHighlighter>
      <p>
        While I mentioned that I don&apos;t want the caller to have to select
        userId, unfortunately you have to remember we&apos;re starting from the
        child table. This logic is happening in the blogs query and we
        don&apos;t have control over what happens in the user query at this
        point. So we need that userId.
      </p>
      <p>
        It would at least be a nice courtesy to let users know which field needs
        to be queried:
      </p>
      <SyntaxHighlighter language="typescript">
        {relationError}
      </SyntaxHighlighter>
      <p>
        Otherwise, we can move on and get our resolved arguments. Remember the
        point of this was to make sure we&apos;re using the appropriate
        relationship fields. So essentially all we need to do is make sure
        Prisma&apos;s where statement contains authorId: userId.
      </p>
      <SyntaxHighlighter language="typescript">
        {resolvedArgumentsReturn}
      </SyntaxHighlighter>
      <p>
        Simple as that, we use the spread operator to make sure we&apos;re not
        stripping out any fields from the original request and simply add a
        where for the relationship. Altogether it would look something like
        this:
      </p>
      <Gist id="fcd514f8c0fd18bc37ac1ebe24fbc6b3" />
      <p>And your resolver might look something like this:</p>
      <SyntaxHighlighter language="typescript">
        {exampleResolver}
      </SyntaxHighlighter>
      <p>
        This allows you to create boilerplate resolvers that only require a
        relationship array and the default parameters Apollo provides from
        incoming queries. It also helps Prisma generate smarter SQL queries. The
        SQL query here would be something like this:
      </p>
      <strong>
        <code>select userId from User where userId = &lsquo;userId&rsquo;</code>
        <br />
        <code>
          select title from blog where authorId = &lsquo;userId&rsquo;
        </code>
      </strong>
      <p>
        In case you&apos;re wondering why Prisma generates two SQL statements
        instead of a Join. It&apos;s because it&apos;s more efficient.
        You&apos;ll notice that both are using the same userId from the original
        arguments. These can fire concurrently. This is a simple query, you
        could have queried the blog table directly with the userId. But as these
        scale up and become more complex, Prisma will generate different SQL.
      </p>
      <p>
        The point of these abstractions is to take advantage of Prisma as a
        backend. Prisma is really freaking smart. Ideally you want to give it as
        much information as possible (such as relationship info) and let it do
        it&apos;s thing. In the case of GraphQL where a single post request can
        be querying multiple things, Prisma will read everything and generate
        the smartest query it can based on that context. Meaning, it
        doesn&apos;t just fire off SQL queries one at a time as it hits your
        resolvers. It intelligently looks at all incoming requests before
        hitting the database and generates what it believes to be the best
        queries (it&apos;s usually right).
      </p>
      <h2 id="manyToMany">
        Solving The Many-To-Many N+1 Problem{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        ORM&apos;s get criticized for the N+1 problem. As Prisma&apos;s
        optimization guide says:
      </p>
      <figure>
        <blockquote cite="https://www.prisma.io/docs/guides/performance-and-optimization/query-optimization-performance">
          <p>
            The n+1 problem occurs when you loop through the results of a query
            and perform one additional query per result, resulting in n number
            of queries plus the original (n+1). This is a common problem with
            ORMs, particularly in combination with GraphQL, because it is not
            always immediately obvious that your code is generating inefficient
            queries.
          </p>
        </blockquote>
        <figcaption>
          -Prisma,{' '}
          <cite>
            {' '}
            <LinkComponent
              linkProperties={{
                href: 'https://www.prisma.io/docs/guides/performance-and-optimization/query-optimization-performance',
              }}
            >
              Query Optimization
            </LinkComponent>
          </cite>
        </figcaption>
      </figure>
      <p>
        However, that doesn&apos;t mean this issue can&apos;t be solved on a
        programmatic level such that we can automatically generate efficient
        queries. As noted before, Prisma batches incoming queries to create more
        intelligent SQL queries. However, this does not apply to findMany
        queries.
      </p>
      <p>
        Because this site doesn&apos;t use a database. (
        <LinkComponent
          linkProperties={{ href: '/blog/on-hosting-static-pages' }}
        >
          On Hosting Static Pages
        </LinkComponent>
        ) I&apos;m going to pull an example from a real-world production app
        where I implemented this solution. I&apos;m running this query where
        sites refers to a location and caseData refers to a support ticket. I
        used the following query:
      </p>
      <ImageContainer
        imageProperties={{
          alt: images.cl0mrx4vt00oc09l22wd93vqo.altText,
          height: images.cl0mrx4vt00oc09l22wd93vqo.height,
          src: images.cl0mrx4vt00oc09l22wd93vqo.image.downloadUrl,
          width: images.cl0mrx4vt00oc09l22wd93vqo.width,
        }}
      />
      <p>
        Without optimizing for N+1 you get one query selecting all sites and a
        new query for each of those sites selecting all caseDatas. The generated
        SQL from prisma looks like this:
      </p>
      <ImageContainer
        imageProperties={{
          alt: images.cl0mrwbmm004d09idfnt26s0v.altText,
          height: images.cl0mrwbmm004d09idfnt26s0v.height,
          src: images.cl0mrwbmm004d09idfnt26s0v.image.downloadUrl,
          width: images.cl0mrwbmm004d09idfnt26s0v.width,
        }}
      />
      <p>
        This query took about 6 seconds to complete. Here&apos;s what it looks
        like after using my <code>resolveFindMany()</code> function.
      </p>
      <ImageContainer
        imageProperties={{
          alt: images.cl0mrxurx0a7a09mbcy39h2yc.altText,
          height: images.cl0mrxurx0a7a09mbcy39h2yc.height,
          src: images.cl0mrxurx0a7a09mbcy39h2yc.image.downloadUrl,
          width: images.cl0mrxurx0a7a09mbcy39h2yc.width,
        }}
      />
      <ImageContainer
        imageProperties={{
          alt: images.cl0mr5pqx00gp09ju58vd6rso.altText,
          height: images.cl0mr5pqx00gp09ju58vd6rso.height,
          src: images.cl0mr5pqx00gp09ju58vd6rso.image.downloadUrl,
          width: images.cl0mr5pqx00gp09ju58vd6rso.width,
        }}
      />
      <p>
        Now, instead of hundreds of individual select statements we get three
        queries. The first is the same, we&apos;re basically just grabbing all
        sites. Then, it grabs all siteId&apos;s (which is the column we&apos;re
        using as a relationship to caseData). Last it grabs the caseData. Note
        that instead of Join, Prisma is using SQL&apos;s IN keyword here.
      </p>
      <p>
        You could bring up a lot of arguments about this implementation.
        Complain about the first two queries being essentially the same. Argue
        that Join would be faster. (
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/prisma/prisma/issues/4997#issuecomment-612429050',
          }}
        >
          It is not.
        </LinkComponent>
        ) At the end of the day, this implementation is based on Prisma&apos;s
        research and use of relationships to create efficient queries.
      </p>
      <p>
        This second query took about 4 seconds. A 2 second savings. Keep in mind
        that I am not running this multiple times or doing any real
        benchmarking. But a 2 second difference is significant. Normally, you
        would want to avoid this kind of query altogether. Instead opt for
        pagination. In the real world, this abstraction cuts down a significant
        amount of time on any findMany query without much effort from the
        developer. Simply use the <code>resolveFindMany()</code> function.
      </p>
      <p>
        So what does this function look like? It is honestly very nasty and not
        totally TypeScript friendly. I&apos;ll give a basic list of what it does
        and leave the entire function I&apos;m using in production below. For
        now we&apos;ll keep using the site caseData query as an example.
      </p>
      <ol>
        <li>
          From the caseData resolver use the same relationship array
          resolveArguments from above does to get the parent model.
        </li>
        <li>
          Get the relationValue (siteId) from the parent object. (Site.siteId)
        </li>
        <li>
          Run a findUnique on the parent model (Site) where the parentColumnName
          is equal to relationValue.
        </li>
        <li>
          Chain the current table (caseData) to that findUnique query to run
          them together.
        </li>
      </ol>
      <p>What you end up with is something like this:</p>
      <SyntaxHighlighter language="typescript">
        {prismaManyToMany}
      </SyntaxHighlighter>
      <p>
        This is created for every site found on the parent query. Remember,
        Prisma batches findUnique queries. So by generating a findUnique query
        for every N results from sites, Prisma will batch them together using
        SQL&apos;s IN keyword as seen above.
      </p>
      <p>
        So the issue is just generating this based on the GraphQL info object.
        Meaning, we want our resolver to return something like this:
      </p>
      <SyntaxHighlighter language="typescript">
        {resolvedFindMany}
      </SyntaxHighlighter>
      <p>
        We&apos;re again passing along the default argument on every Apollo
        query but also including a relationInfo array and some resolvedArguments
        (using the above mentioned code).
      </p>
      <p>
        This is the messy TypeScript confused function I currently use (totally
        functional and performant):
      </p>
      <Gist id="cbbccae0bb0d2bfb3c1a729e7ab7b8ff" />
      <h2 id="conclusion">
        Last Words{' '}
        <LinkComponent linkProperties={{ href: '#top' }}>⤴</LinkComponent>
      </h2>
      <p>
        GraphQL is a huge booster to any API. It makes for a good Gateway when
        using a lot of third-party API&apos;s. It&apos;s more performant, and
        easier to work with and maintain than a REST API.
      </p>
      <p>
        However, that doesn&apos;t mean everything is done for you out of the
        box. GraphQL is a specification, nothing more. You can use services like
        Hasura to generate GraphQL API&apos;s but if you&apos;re looking to
        build your own, it does involve writing code.
      </p>
      <p>
        The initial perception a lot of people have of it is that it somehow
        just magically does everything for you. Not recognizing that all it can
        do is map requests to resolvers and return data based on that.
      </p>
      <p>
        I&apos;ve had to listen to professional developers get confused over how
        authentication works with GraphQL... as if REST we&apos;re handling it
        for them previously. The internet still works the same when you&apos;re
        using GraphQL. Headers and post data still exist.
      </p>
      <p>
        The point of this post was to share how I&apos;ve been able to generate
        efficient queries with Prisma using GraphQL queries. As this is one of
        the things that make people skeptical of GraphQL I will say I found
        making these sort of programmatic abstractions based on incoming data
        way easier when I have access to GraphQL&apos;s info object and
        Prisma&apos;s batching capabilities.
      </p>
    </StaticBlogLayout>
  );
}

export default MakingGraphqlBetter;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<{
  props: MakingGraphqlBetterProperties;
}> {
  const blog = await blogQuery('making-graphql-better');
  const { data: imageData } = await apolloClient.client.query<Data>({
    query: gql`
      query ImagesQuery {
        imagesList(
          filter: {
            id: {
              in: [
                "cl0mrwbmm004d09idfnt26s0v"
                "cl0mrx4vt00oc09l22wd93vqo"
                "cl0mr5pqx00gp09ju58vd6rso"
                "cl0mrxurx0a7a09mbcy39h2yc"
              ]
            }
          }
        ) {
          items {
            id
            altText
            height
            image {
              downloadUrl
            }
            width
          }
        }
      }
    `,
  });

  const images = {};

  for (const image of imageData.imagesList.items) {
    images[image.id] = image;
  }

  return {
    props: {
      blog,
      images,
    },
  };
}
