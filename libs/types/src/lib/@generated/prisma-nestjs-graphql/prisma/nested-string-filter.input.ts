import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NestedStringFilter {
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
      return NestedStringFilter;
    },
    { nullable: true }
  )
  not?: NestedStringFilter;
}
