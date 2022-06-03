import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShortUrlWhereUniqueInput {
  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  id?: string;

  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  originalUrl?: string;

  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  usedKeyId?: string;
}
