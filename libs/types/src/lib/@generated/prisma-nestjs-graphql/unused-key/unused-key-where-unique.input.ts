import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UnusedKeyWhereUniqueInput {
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
  key?: string;
}
