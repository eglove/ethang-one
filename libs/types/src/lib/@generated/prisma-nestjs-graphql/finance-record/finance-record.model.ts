import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FinanceRecord {
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
  accountName!: string;

  @Field(
    () => {
      return Float;
    },
    { nullable: false }
  )
  currentValue!: number;

  @Field(
    () => {
      return Date;
    },
    { nullable: false }
  )
  recordedDate!: Date;
}
