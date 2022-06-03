import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShortUrlCreateOrConnectWithoutShortUrlKeyInput } from './short-url-create-or-connect-without-short-url-key.input';
import { ShortUrlCreateWithoutShortUrlKeyInput } from './short-url-create-without-short-url-key.input';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';

@InputType()
export class ShortUrlCreateNestedOneWithoutShortUrlKeyInput {
  @Field(
    () => {
      return ShortUrlCreateWithoutShortUrlKeyInput;
    },
    { nullable: true }
  )
  @Type(() => {
    return ShortUrlCreateWithoutShortUrlKeyInput;
  })
  create?: ShortUrlCreateWithoutShortUrlKeyInput;

  @Field(
    () => {
      return ShortUrlCreateOrConnectWithoutShortUrlKeyInput;
    },
    {
      nullable: true,
    }
  )
  @Type(() => {
    return ShortUrlCreateOrConnectWithoutShortUrlKeyInput;
  })
  connectOrCreate?: ShortUrlCreateOrConnectWithoutShortUrlKeyInput;

  @Field(
    () => {
      return ShortUrlWhereUniqueInput;
    },
    { nullable: true }
  )
  @Type(() => {
    return ShortUrlWhereUniqueInput;
  })
  connect?: ShortUrlWhereUniqueInput;
}
