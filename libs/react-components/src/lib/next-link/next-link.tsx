import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export type NextLinkProperties = {
  children: JSX.Element | JSX.Element[] | string;
  isNewTab?: boolean;
  linkProperties: { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
  testId?: string;
};

export function NextLink({
  children,
  linkProperties,
  isNewTab,
  testId,
}: NextLinkProperties): JSX.Element {
  const newTabAttributes =
    isNewTab === true ? { rel: 'noreferrer', target: '_blank' } : {};

  return (
    <Link href={linkProperties.href} prefetch={isNewTab !== true}>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a data-testid={testId} {...linkProperties} {...newTabAttributes}>
        {children}
      </a>
    </Link>
  );
}
