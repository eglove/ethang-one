import 'react-vertical-timeline-component/style.min.css';

import { allImages } from '@ethang/local-database';
import { NextImageContainer } from '@ethang/react-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

export function Timeline(): JSX.Element {
  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          iconStyle={{ height: 101, width: 101 }}
          icon={
            <NextImageContainer
              image={{
                ...allImages.technologyImages.php,
                height: 100,
                width: 100,
              }}
            />
          }
        >
          <h2>Early 2000&apos;s</h2>
          <ul>
            <li>
              Web pages are rendered by the server to create HTML by languages
              like PHP and ASP.
            </li>
            <li>Entire page reloads were required for all key navigations.</li>
            <li>JavaScript was used minimally.</li>
            <li>
              Pages did not have a lot of user interaction outside of links and
              forms.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ height: 101, width: 101 }}
          icon={
            <NextImageContainer
              image={{
                ...allImages.technologyImages.angular,
                height: 100,
                width: 100,
              }}
            />
          }
        >
          <h2>2006</h2>
          <ul>
            <li>
              AJAX introduced the idea of single-page applications. Website
              became more similar to desktop applications.
            </li>
            <li>
              Frameworks like jQuery, Backbone.js and AngularJS were introduced
              to help write increased complexity of web applications.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ height: 101, width: 101 }}
          icon={
            <NextImageContainer
              image={{
                ...allImages.technologyImages.react,
                height: 100,
                width: 100,
              }}
            />
          }
        >
          <h2>2013</h2>
          <ul>
            <li>
              React introduced as a more flexible, declarative way to build
              component-based user interfaces with JSX. An extension of JS which
              allows you to treat &ldquo;HTML elements&rdquo; as functions.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ height: 101, width: 101 }}
          icon={
            <NextImageContainer
              image={{
                ...allImages.technologyImages.nextJs,
                height: 100,
                width: 100,
              }}
            />
          }
        >
          <h2>2016</h2>
          <ul>
            <li>
              NextJS, a React framework that prerenders HTML on the server and
              automatically defers/splits JS.
            </li>
            <li>
              More fine-grained control over what renders on the server and what
              renders on the client.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
