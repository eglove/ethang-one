import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyWhereInput } from './used-key-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUsedKeyArgs {

    @Field(() => UsedKeyWhereInput, {nullable:true})
    @Type(() => UsedKeyWhereInput)
    where?: UsedKeyWhereInput;
}