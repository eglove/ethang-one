import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UsedKeyCreateInput } from './used-key-create.input';

@ArgsType()
export class CreateOneUsedKeyArgs {
  @Field(
    () => {
      return UsedKeyCreateInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return UsedKeyCreateInput;
  })
  data!: UsedKeyCreateInput;
}
