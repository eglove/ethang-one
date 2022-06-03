import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitCreateInput {
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
  dueDate!: Date | string;
}
