import { gql } from '@apollo/client';
import { ToReadLink } from '@ethang/prisma-nestjs-graphql';

export type AddReadingLinkReturn = Pick<ToReadLink, 'id'>;

export const ADD_READING_LINK = gql`
  mutation AddReadingLink($title: String!, $url: String!, $email: String!) {
    createToReadLink(
      data: { title: $title, url: $url, user: { connect: { email: $email } } }
    ) {
      id
    }
  }
`;
