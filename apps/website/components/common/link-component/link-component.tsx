import { isBrowser, isValidUrl, locationOrigin } from '@ethang/util-typescript';
import Link from 'next/link';

interface LinkComponentProperties {
  children: JSX.Element | JSX.Element[] | string;
  linkProperties?: JSX.IntrinsicElements['a'];
}

export function LinkComponent({
  children,
  linkProperties,
}: LinkComponentProperties): JSX.Element {
  let linkOrigin = null;
  if (isValidUrl(linkProperties.href)) {
    linkOrigin = new URL(linkProperties.href).origin;
  }

  if (isBrowser && linkOrigin !== locationOrigin() && linkOrigin !== null) {
    return (
      <a {...linkProperties} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={linkProperties.href}>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a {...linkProperties}>{children}</a>
    </Link>
  );
}
