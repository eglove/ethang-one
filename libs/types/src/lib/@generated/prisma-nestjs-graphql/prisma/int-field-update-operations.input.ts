import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class IntFieldUpdateOperationsInput {
  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  set?: number;

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  increment?: number;

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  decrement?: number;

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  multiply?: number;

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  divide?: number;
}
