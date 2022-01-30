import { Image } from '@ethang-one/prisma-connection';
import { PrismaClient } from '@prisma/client';

import { HomeLayout } from '../components/home/home-layout';

interface IndexProperties {
  logos: Image[];
}

const Index = ({ logos }: IndexProperties): JSX.Element => {
  return <HomeLayout logos={logos} />;
};

export default Index;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps(): Promise<Record<string, unknown>> {
  const prisma = new PrismaClient();

  const logos = await prisma.technologyLogo.findMany({
    select: {
      Image: {
        select: {
          altText: true,
          height: true,
          id: true,
          url: true,
          width: true,
        },
      },
    },
    where: {
      isOnHomepage: true,
    },
  });

  return {
    props: {
      logos: logos.map(logo => {
        return logo.Image;
      }),
    },
    revalidate: 60,
  };
}
