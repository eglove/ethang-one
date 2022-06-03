import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TodaysCalories {
  @Field(
    () => {
      return ID;
    },
    { nullable: false }
  )
  id!: string;

  @Field(
    () => {
      return Date;
    },
    { nullable: false }
  )
  birthday!: Date;

  @Field(
    () => {
      return Int;
    },
    { nullable: false }
  )
  currentCalories!: number;

  @Field(
    () => {
      return Int;
    },
    { nullable: false }
  )
  height!: number;

  @Field(
    () => {
      return Float;
    },
    { nullable: false }
  )
  weight!: number;
}
