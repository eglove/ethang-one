import Head from 'next/head';

interface HeadTagProperties {
  title: string;
}

export const HeadTag = ({ title }: HeadTagProperties): JSX.Element => {
  return (
    <Head>
      <title>{`EthanG | ${title}`}</title>
    </Head>
  );
};
