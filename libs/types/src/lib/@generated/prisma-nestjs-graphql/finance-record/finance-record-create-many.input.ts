import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class FinanceRecordCreateManyInput {
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
  recordedDate!: Date | string;
}
