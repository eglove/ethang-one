import { gql } from '@apollo/client';
import { ToReadLink } from '@ethang/prisma-nestjs-graphql';

export type ToReadLinksReturn = {
  toReadLinks: Array<Pick<ToReadLink, 'id' | 'title' | 'url'>>;
};

export const TO_READ_LINKS = gql`
  query ToReadLinks {
    toReadLinks(orderBy: { createdAt: asc }) {
      id
      title
      url
    }
  }
`;
