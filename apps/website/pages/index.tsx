import { gql } from '@apollo/client';

import { Data, TechnologyLogo } from '../../../graphql/types';
import { HomeLayout } from '../components/home/home-layout';
import { apolloClient } from './_app';

export type TechnologyLogos = { technologyLogos: TechnologyLogo[] };

const Index = ({ technologyLogos }: TechnologyLogos): JSX.Element => {
  return <HomeLayout technologyLogos={technologyLogos} />;
};

export default Index;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<{
  props: TechnologyLogos;
}> {
  const { data } = await apolloClient.client.query<Data>({
    query: gql`
      query TechnologyLogos {
        technologyLogosList {
          items {
            id
            image {
              id
              altText
              height
              width
              image {
                downloadUrl
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      technologyLogos: data.technologyLogosList.items,
    },
  };
}
