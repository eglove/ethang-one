import { isBrowser, isValidUrl, locationOrigin } from '@ethang/util-typescript';

interface LinkComponentProperties {
  children: JSX.Element | JSX.Element[] | string;
  linkProperties: { href: string } & JSX.IntrinsicElements['a'];
  testId?: string;
}

export function LinkComponent({
  children,
  linkProperties,
  testId,
}: LinkComponentProperties): JSX.Element {
  const getDefaultProperties = (): JSX.IntrinsicElements['a'] => {
    let linkOrigin = null;
    if (isValidUrl(linkProperties.href)) {
      linkOrigin = new URL(linkProperties.href).origin;
    }

    if (isBrowser && linkOrigin !== locationOrigin() && linkOrigin !== null) {
      return {
        ...linkProperties,
        rel: 'noreferrer',
        target: '_blank',
      };
    }

    return linkProperties;
  };

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a data-testid={testId} {...getDefaultProperties()}>
      {children}
    </a>
  );
}
