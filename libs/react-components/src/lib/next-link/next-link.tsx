import { isBrowser, isValidUrl, locationOrigin } from '@ethang/util-typescript';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface LinkComponentProperties {
  children: JSX.Element | JSX.Element[] | string;
  linkProperties: { href: string } & JSX.IntrinsicElements['a'];
  testId?: string;
}

export function NextLink({
  children,
  linkProperties,
  testId,
}: LinkComponentProperties): JSX.Element {
  const [linkState, setLinkState] = useState(linkProperties);

  useEffect(() => {
    let linkOrigin = null;
    if (isValidUrl(linkProperties.href)) {
      linkOrigin = new URL(linkProperties.href).origin;
    }

    if (isBrowser && linkOrigin !== locationOrigin() && linkOrigin !== null) {
      setLinkState(linkState_ => {
        return {
          ...linkState_,
          rel: 'noreferrer',
          target: '_blank',
        };
      });
    }
  }, [linkProperties.href]);

  return (
    <Link href={linkProperties.href}>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a data-testid={testId} {...linkProperties} {...linkState}>
        {children}
      </a>
    </Link>
  );
}
