import { NextLink } from '@ethang/react-components';

import styles from './resume-layout.module.css';
import { ResumeSidebarHeader } from './resume-sidebar-header';
import { ResumeSkillList } from './resume-skill-list';

export function ResumeSidebar(): JSX.Element {
  return (
    <div className={styles.Sidebar}>
      <div>St. Louis, MO</div>
      <div>(816) 542-0568</div>
      <div>
        <NextLink linkProperties={{ href: 'https://ethang.dev' }}>
          EthanG.dev
        </NextLink>
      </div>
      <div>
        <NextLink linkProperties={{ href: 'https://github.com/eglove' }}>
          github.com/eglove
        </NextLink>
      </div>
      <div>
        <NextLink
          linkProperties={{ href: 'https://linkedin.com/in/ethan-glover' }}
        >
          linkedin.com/in/ethan-glover
        </NextLink>
      </div>
      <div>
        <NextLink linkProperties={{ href: 'mailto:hello@ethang.email' }}>
          hello@ethang.email
        </NextLink>
      </div>
      <ResumeSidebarHeader text="About Me" />
      <p>
        Systems thinker with excellent problem solving skills that looks for
        permanent, creative solutions to recurring problems.
      </p>
      <p>
        U.S. Army Veteran comfortable in fast-paced environments. Great customer
        service skills and attention to detail.
      </p>
      <p>
        Constant learner and adapter of new ideas capable of bringing knowledge
        from a wide range of sources to produce great solutions.
      </p>
      <ResumeSidebarHeader text="Skills" />
      <ResumeSkillList
        skills={[
          'React',
          'Next.js',
          'TypeScript',
          'HTML5',
          'CSS3',
          'SEO',
          'Vue',
          'PHP',
        ]}
      />
      <hr />
      <ResumeSkillList
        skills={[
          'Node',
          'GraphQL',
          'AWS',
          'Apollo',
          'Prisma',
          'Postman',
          'Docker',
          'MySQL',
          'Postgres',
          'MsSQL',
        ]}
      />
      <hr />
      <ResumeSkillList skills={['Git', 'NX', 'Maven']} />
      <hr />
      <ResumeSkillList
        skills={['FP', 'OOP', 'SDLC', 'MVC', 'Scrum', 'Agile']}
      />
    </div>
  );
}
