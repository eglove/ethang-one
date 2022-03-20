import Image from 'next/image';

import githubImage from '../../../public/images/github.png';
import linkedinImage from '../../../public/images/linkedin.svg';
import { LinkComponent } from '../link-component/link-component';
import styles from './footer.module.css';

export function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div>
        <LinkComponent linkProperties={{ href: 'https://github.com/eglove' }}>
          <Image src={githubImage} alt="My GitHub" />
        </LinkComponent>
      </div>
      <div>
        <LinkComponent
          linkProperties={{ href: 'https://www.linkedin.com/in/ethan-glover/' }}
        >
          <Image src={linkedinImage as string} alt="My LinkedIn" />
        </LinkComponent>
      </div>
    </div>
  );
}
