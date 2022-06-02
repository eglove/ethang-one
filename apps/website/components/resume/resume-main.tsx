import { ResumeJob } from './resume-job';
import styles from './resume-layout.module.css';

export function ResumeMain(): JSX.Element {
  return (
    <div className={styles.Main}>
      <h1 className={styles.Name}>Ethan Glover</h1>
      <ResumeJob
        company="8Base"
        dateRange="03/22 - 05/22"
        jobTitle="Full Stack Developer"
        location="Remote"
        jobDetails={[
          'Worked on low-code platform for generating GraphQL APIs through React based user interface.',
          'Contract to help company transition from Russia based team to US/Columbia based.',
        ]}
      />
      <ResumeJob
        company="Avatara Cloud"
        dateRange="07/21 - 03/22"
        jobTitle="Full Stack Developer"
        location="St. Louis, MO"
        jobDetails={[
          'Worked with technologies such as WebRTC, websockets, GraphQL, NextJS, React, Apollo, NX, Node and more.',
          'Reworked team collaboration app from scratch. Took it from a Twilio example app and introduced context management, caching, and smart network policies with Apollo Client. As well as Next.js for easier routing, organization, and to introduce an app level API when needed.',
          'Created GraphQL server using Apollo Server and Prisma and wrote performance abstractions that would be easy to use for developers unfamiliar with JavaScript.',
          'Developed monorepo architecture using NX by splitting projects into reusable components across a single, manageable repository.',
          'Created Node CLI around NX monorepo to use Git Sparse Checkout to keep git pull size small for local development. As well as a way to easily run build and creation scripts without the need to learn NX.',
          'Used multiple APIs such as Twilio, FileCloud and RocketChat to develop a team collaboration app with video sharing, chat, calendar and file sharing.',
        ]}
      />
      <ResumeJob
        company="Prologue Technology"
        dateRange="01/21 - 07/21"
        jobTitle="Full Stack Developer"
        location="St. Louis, MO"
        jobDetails={[
          'Worked on Laravel and Yii applications for delivering quotes and booking shipments for clients through multiple carriers such as FedEx, UPS, and other trucking companies.',
          'Supported and created REST API’s for third party consumption to rate, quote, and ship deliveries for small packages, LTL, and truckloads.',
          'Extended public shipment tracking built on Vue and Laravel.',
          'Grew use of Postman for building REST API testing and using collections to better aid the QA process.',
        ]}
      />
      <ResumeJob
        company="Century Link"
        dateRange="05/20 - 12/20"
        jobTitle="Full Stack Developer"
        location="St. Louis, MO"
        jobDetails={[
          'Redesigned frontend for customer account management portal while ensuring responsiveness and compatibility with all browsers including IE11.',
          'Worked on proof of concept for new frontend using Vue and TypeScript',
          'Maintained and worked on Java/Spring backend.',
        ]}
      />
      <ResumeJob
        company="Multiple"
        dateRange="11/18 - 05-20"
        jobTitle="Freelance/Charity"
        location="Remote"
        jobDetails={[
          'Multiple short term roles consisting mostly of pro bono work.',
          'Developed React/GraphQL web app to track favorite charities and donations throughout the year.',
          'SEO consulting for OneSpiritOneWorld.org. A non-profit working to end dog homelessness and abuse.',
          'SEO auditing for two national radio stations.',
        ]}
      />
    </div>
  );
}
