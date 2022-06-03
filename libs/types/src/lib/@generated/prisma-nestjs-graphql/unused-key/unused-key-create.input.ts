import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UnusedKeyCreateInput {
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
}
