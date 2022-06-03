import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

import { NestedFloatFilter } from './nested-float-filter.input';

@InputType()
export class FloatFilter {
  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  equals?: number;

  @Field(
    () => {
      return [Float];
    },
    { nullable: true }
  )
  in?: number[];

  @Field(
    () => {
      return [Float];
    },
    { nullable: true }
  )
  notIn?: number[];

  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  lt?: number;

  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  lte?: number;

  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  gt?: number;

  @Field(
    () => {
      return Float;
    },
    { nullable: true }
  )
  gte?: number;

  @Field(
    () => {
      return NestedFloatFilter;
    },
    { nullable: true }
  )
  not?: NestedFloatFilter;
}
