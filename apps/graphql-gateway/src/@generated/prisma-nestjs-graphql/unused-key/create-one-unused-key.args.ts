import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyCreateInput } from './unused-key-create.input';

@ArgsType()
export class CreateOneUnusedKeyArgs {

    @Field(() => UnusedKeyCreateInput, {nullable:false})
    data!: UnusedKeyCreateInput;
}
