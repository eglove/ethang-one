import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class FloatFieldUpdateOperationsInput {
  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  set?: number;

  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  increment?: number;

  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  decrement?: number;

  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  multiply?: number;

  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  divide?: number;
}
