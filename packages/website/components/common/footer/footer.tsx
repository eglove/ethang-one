import Image from 'next/image';

import githubImage from '../../../public/images/github.png';
import linkedinImage from '../../../public/images/linkedin.svg';
import {LinkComponent} from '../link-component/link-component';
import styles from './footer.module.css';

export const Footer = (): JSX.Element => (
  <div className={styles.footer}>
    <div>
      <LinkComponent
        content={<Image src={githubImage} alt="My GitHub"/>}
        href="https://github.com/eglove"
      />
    </div>
    <div>
      <LinkComponent
        content={<Image src={linkedinImage} alt="My LinkedIn"/>}
        href="https://www.linkedin.com/in/ethan-glover/"
      />
    </div>
  </div>
);
