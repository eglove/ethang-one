import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyCreateInput } from './used-key-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUsedKeyArgs {

    @Field(() => UsedKeyCreateInput, {nullable:false})
    @Type(() => UsedKeyCreateInput)
    data!: UsedKeyCreateInput;
}
