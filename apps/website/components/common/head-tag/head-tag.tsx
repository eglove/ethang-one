import Head from 'next/head';

type HeadTagProperties = {
  children?: JSX.Element | JSX.Element[];
  title: string;
};

export function HeadTag({ children, title }: HeadTagProperties): JSX.Element {
  return (
    <Head>
      <title>{`EthanG | ${title}`}</title>
      {children}
    </Head>
  );
}
