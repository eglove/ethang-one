import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

import { NestedIntFilter } from './nested-int-filter.input';

@InputType()
export class IntFilter {
  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  equals?: number;

  @Field(
    () => {
      return [Int];
    },
    { nullable: true }
  )
  in?: number[];

  @Field(
    () => {
      return [Int];
    },
    { nullable: true }
  )
  notIn?: number[];

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  lt?: number;

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  lte?: number;

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  gt?: number;

  @Field(
    () => {
      return Int;
    },
    { nullable: true }
  )
  gte?: number;

  @Field(
    () => {
      return NestedIntFilter;
    },
    { nullable: true }
  )
  not?: NestedIntFilter;
}
