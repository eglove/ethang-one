import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShortUrlCreateWithoutShortUrlKeyInput {
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
    { nullable: false }
  )
  originalUrl!: string;

  @Field(
    () => {
      return Date;
    },
    { nullable: false }
  )
  expirationDate!: Date | string;
}
