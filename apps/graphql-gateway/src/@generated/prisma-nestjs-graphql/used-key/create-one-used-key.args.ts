import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyCreateInput } from './used-key-create.input';

@ArgsType()
export class CreateOneUsedKeyArgs {

    @Field(() => UsedKeyCreateInput, {nullable:false})
    data!: UsedKeyCreateInput;
}
