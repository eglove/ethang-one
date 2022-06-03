import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { ShortUrlCreateNestedOneWithoutShortUrlKeyInput } from '../short-url/short-url-create-nested-one-without-short-url-key.input';

@InputType()
export class UsedKeyCreateInput {
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
  key!: string;

  @Field(
    () => {
      return ShortUrlCreateNestedOneWithoutShortUrlKeyInput;
    },
    {
      nullable: true,
    }
  )
  ShortUrl?: ShortUrlCreateNestedOneWithoutShortUrlKeyInput;
}
