import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UnusedKeyCreateInput } from './unused-key-create.input';

@ArgsType()
export class CreateOneUnusedKeyArgs {
  @Field(
    () => {
      return UnusedKeyCreateInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return UnusedKeyCreateInput;
  })
  data!: UnusedKeyCreateInput;
}
