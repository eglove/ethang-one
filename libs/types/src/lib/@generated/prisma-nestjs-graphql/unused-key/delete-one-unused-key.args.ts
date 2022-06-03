import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UnusedKeyWhereUniqueInput } from './unused-key-where-unique.input';

@ArgsType()
export class DeleteOneUnusedKeyArgs {
  @Field(
    () => {
      return UnusedKeyWhereUniqueInput;
    },
    { nullable: false }
  )
  @Type(() => {
    return UnusedKeyWhereUniqueInput;
  })
  where!: UnusedKeyWhereUniqueInput;
}
