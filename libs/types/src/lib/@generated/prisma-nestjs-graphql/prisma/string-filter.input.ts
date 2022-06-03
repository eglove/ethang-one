import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { NestedStringFilter } from './nested-string-filter.input';
import { QueryMode } from './query-mode.enum';

@InputType()
export class StringFilter {
  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  equals?: string;

  @Field(
    () => {
      return [String];
    },
    { nullable: true }
  )
  in?: string[];

  @Field(
    () => {
      return [String];
    },
    { nullable: true }
  )
  notIn?: string[];

  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  lt?: string;

  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  lte?: string;

  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  gt?: string;

  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  gte?: string;

  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  contains?: string;

  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  startsWith?: string;

  @Field(
    () => {
      return String;
    },
    { nullable: true }
  )
  endsWith?: string;

  @Field(
    () => {
      return QueryMode;
    },
    { nullable: true }
  )
  mode?: keyof typeof QueryMode;

  @Field(
    () => {
      return NestedStringFilter;
    },
    { nullable: true }
  )
  not?: NestedStringFilter;
}
