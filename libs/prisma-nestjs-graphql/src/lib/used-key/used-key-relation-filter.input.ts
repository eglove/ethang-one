import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedKeyWhereInput } from './used-key-where.input';

@InputType()
export class UsedKeyRelationFilter {

    @Field(() => UsedKeyWhereInput, {nullable:true})
    is?: UsedKeyWhereInput;

    @Field(() => UsedKeyWhereInput, {nullable:true})
    isNot?: UsedKeyWhereInput;
}
