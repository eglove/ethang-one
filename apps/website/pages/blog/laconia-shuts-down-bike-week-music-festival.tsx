import { NextLink } from '@ethang/react-components';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import { blogs } from '../../../../libs/local-database/src/lib/data/blogs/blogs';
import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

function LaconiaShutsDownBikeWeekMusicFestival(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.laconiaShutsDownBikeWeekMusicFestival}>
      <p>
        Laconia, New Hampshire&rsquo;s Bike Week is a motorcycle rally that has
        successfully pulled in large crowds since 1923. Attendance has ranged
        from 188,000 to 375,000 people. Despite the track record of fatal
        motorcycle accidents in the area during the event, it has always
        been&nbsp;relatively peaceful.&nbsp;
        <NextLink
          linkProperties={{
            href: 'http://www.weirsbeach.com/Largejpgs/weirsriot.html',
          }}
        >
          Until the summer of &rsquo;65
        </NextLink>
        .
      </p>
      <p>
        Riots involving around 10,000 people between motorcycle gangs and local
        police caused the City of Laconia to crack down on the event. Laconia
        officials no longer saw bike week as a source of tax income, but an
        inconvenience.
      </p>
      <p>
        Laconia restricted the event to three days rather than the full week and
        attendance started to drop. When the city started feeling the loss of
        money in their pockets in the &rsquo;90s, they invited the organization
        to bring back the week-long festivities.
      </p>
      <p>
        Here we are today. Bike week at Weir&rsquo;s Beach in Laconia ran from
        1923 to 1965 on its own in peace. A riot, which the state alleges the
        Hell&rsquo;s Angels started, brought&nbsp;bureaucratic control to the
        event.
      </p>
      <p>
        I was able to attend one day for CopBlock&rsquo;s week-long event at
        Laconia. Every police department in the area shows up in force. Five
        departments including&nbsp;state troopers, county sheriffs, and even the
        department at the University of New Hampshire show up for patrol. Small
        towns that only have a few officers to spare send one or two on a few
        days out of the week.&nbsp;And the national guard sent around fifteen
        soldiers&nbsp;in a &ldquo;non-law enforcement capacity.&rdquo; According
        to the UNH officer in the video below.
      </p>
      <LiteYouTubeEmbed id="L7RSEV7E2qI" title="UNH Cop at Bike Week 2016" />
      <p>
        Aside from a few crashes on the highways (one fatal), the event was
        peaceful.&nbsp;Happy, even. Everyone was in a good, talkative mood. Even
        the groups of officers found on every corner were having fun. But this
        police presence came at a price.
      </p>
      <p>
        LaconiaFest, the music festival headlining Ted Nugent,{' '}
        <NextLink
          linkProperties={{
            href: 'http://www.wmur.com/news/laconiafest-ends-early-amidst-conflicts-with-city/40118000',
          }}
        >
          shut down on Saturday early after Nugent&rsquo;s performance
        </NextLink>
        . The festival manager said the city overestimated how many people would
        show and charged more than expected for first responders.
      </p>
      <p>
        The police who were in groups on every corner, having a fun time, was
        costing the festival too much. It raises the question, were they
        necessary, and how&nbsp;willing was the city to send officers home to
        keep costs down?
      </p>
      <p>
        The state lacks the ability to respond to the market in a timely manner.
        If the City of Laconia had a disagreement with festival managers on this
        issue, I think the city should have listened. The festival I saw did not
        require four cops on every corner and it did not deserve to have its
        funding drained by a forced monopoly.
      </p>
    </StaticBlogLayout>
  );
}

export default LaconiaShutsDownBikeWeekMusicFestival;
