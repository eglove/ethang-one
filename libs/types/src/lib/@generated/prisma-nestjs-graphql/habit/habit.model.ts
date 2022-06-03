import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Habit {
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
  name!: string;

  @Field(
    () => {
      return String;
    },
    { nullable: false }
  )
  recurInterval!: string;

  @Field(
    () => {
      return Date;
    },
    { nullable: false }
  )
  dueDate!: Date;
}
