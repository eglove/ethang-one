import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyCreateInput } from './unused-key-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUnusedKeyArgs {

    @Field(() => UnusedKeyCreateInput, {nullable:false})
    @Type(() => UnusedKeyCreateInput)
    data!: UnusedKeyCreateInput;
}
