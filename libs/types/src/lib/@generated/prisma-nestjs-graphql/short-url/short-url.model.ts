import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

import { UsedKey } from '../used-key/used-key.model';

@ObjectType()
export class ShortUrl {
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
  originalUrl!: string;

  @Field(
    () => {
      return String;
    },
    { nullable: false }
  )
  usedKeyId!: string;

  @Field(
    () => {
      return Date;
    },
    { nullable: false }
  )
  expirationDate!: Date;

  @Field(
    () => {
      return UsedKey;
    },
    { nullable: false }
  )
  shortUrlKey?: UsedKey;
}
