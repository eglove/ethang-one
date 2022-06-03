import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitWhereUniqueInput {
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
  name?: string;
}
