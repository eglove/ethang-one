import {isBrowser, isValidUrl, locationOrigin} from '@ethang-one/util-typescript';
import Link from 'next/link';

interface LinkComponentProperties {
  className?: string;
  content: string | JSX.Element | StaticImageData;
  href: string;
  styles?: Record<string, string>;
}

export const LinkComponent = ({
  content,
  href,
  className,
  styles,
}: LinkComponentProperties): JSX.Element => {
  let linkOrigin = null;
  if (isValidUrl(href)) {
    linkOrigin = new URL(href).origin;
  }

  if (isBrowser && linkOrigin !== locationOrigin() && linkOrigin !== null) {
    return (
      <a
        className={className}
        style={styles}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={className} style={styles}>
        {content}
      </a>
    </Link>
  );
};
