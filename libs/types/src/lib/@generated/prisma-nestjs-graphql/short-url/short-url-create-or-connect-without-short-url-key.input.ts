import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShortUrlCreateWithoutShortUrlKeyInput } from './short-url-create-without-short-url-key.input';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';

@InputType()
export class ShortUrlCreateOrConnectWithoutShortUrlKeyInput {
  @Field(
    () => {
      return ShortUrlWhereUniqueInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return ShortUrlWhereUniqueInput;
  })
  where!: ShortUrlWhereUniqueInput;

  @Field(
    () => {
      return ShortUrlCreateWithoutShortUrlKeyInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return ShortUrlCreateWithoutShortUrlKeyInput;
  })
  create!: ShortUrlCreateWithoutShortUrlKeyInput;
}
