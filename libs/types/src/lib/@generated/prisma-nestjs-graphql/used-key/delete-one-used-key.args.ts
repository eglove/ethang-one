import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';

@ArgsType()
export class DeleteOneUsedKeyArgs {
  @Field(
    () => {
      return UsedKeyWhereUniqueInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return UsedKeyWhereUniqueInput;
  })
  where!: UsedKeyWhereUniqueInput;
}
