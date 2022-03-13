import { isBrowser, isValidUrl, locationOrigin } from '@ethang/util-typescript';
import Link from 'next/link';

interface LinkComponentProperties {
  children: JSX.Element | JSX.Element[] | string;
  linkProperties: { href: string } & JSX.IntrinsicElements['a'];
  testId?: string;
}

export const NextLink = ({
  children,
  linkProperties,
  testId,
}: LinkComponentProperties): JSX.Element => {
  let linkOrigin = null;
  if (isValidUrl(linkProperties.href)) {
    linkOrigin = new URL(linkProperties.href).origin;
  }

  if (isBrowser && linkOrigin !== locationOrigin() && linkOrigin !== null) {
    return (
      <a
        data-testid={testId}
        {...linkProperties}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={linkProperties.href}>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a data-testid={testId} {...linkProperties}>
        {children}
      </a>
    </Link>
  );
};
