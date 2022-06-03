import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

import { ShortUrl } from '../short-url/short-url.model';

@ObjectType()
export class UsedKey {
  @Field(
    () => {
      return ID;
    },
    { nullable: false }
  )
  id!: string;

  @Field(
    () => {
      return String;
    },
    { nullable: false }
  )
  key!: string;

  @Field(
    () => {
      return ShortUrl;
    },
    { nullable: true }
  )
  ShortUrl?: ShortUrl | undefined;
}
