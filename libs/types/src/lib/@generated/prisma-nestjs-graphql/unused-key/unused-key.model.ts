import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class UnusedKey {
  @Field(
    () => {
      return ID;
    },
    { nullable: false }
  )
  id!: string;

  @Field(
    () => {
      return String;
    },
    { nullable: false }
  )
  key!: string;
}
