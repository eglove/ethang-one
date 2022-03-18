import Head from 'next/head';

interface HeadTagProperties {
  children?: JSX.Element | JSX.Element[];
  title: string;
}

export const HeadTag = ({
  children,
  title,
}: HeadTagProperties): JSX.Element => {
  return (
    <Head>
      <title>{`EthanG | ${title}`}</title>
      {children}
    </Head>
  );
};
