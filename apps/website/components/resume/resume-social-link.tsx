import { Image } from '@ethang/local-database';
import { LinkComponent } from '@ethang/react-components';

import { ImageComponent } from '../common/image-component/image-component';
import styles from './resume-layout.module.css';

interface ResumeSocialLinkPropeties {
  href: string;
  image: Image | string;
  text: string;
}

const iconProperties = {
  height: '16px',
  width: '16px',
};

export function ResumeSocialLink({
  href,
  image,
  text,
}: ResumeSocialLinkPropeties): JSX.Element {
  return (
    <div className={styles.ItemWithIcon}>
      {typeof image === 'string' ? (
        <span style={iconProperties}>{image}</span>
      ) : (
        <ImageComponent image={image} imageProperties={iconProperties} />
      )}
      <LinkComponent linkProperties={{ href }}>{text}</LinkComponent>
    </div>
  );
}
