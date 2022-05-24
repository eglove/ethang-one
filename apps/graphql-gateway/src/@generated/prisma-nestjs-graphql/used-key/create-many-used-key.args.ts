import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyCreateManyInput } from './used-key-create-many.input';

@ArgsType()
export class CreateManyUsedKeyArgs {

    @Field(() => [UsedKeyCreateManyInput], {nullable:false})
    data!: Array<UsedKeyCreateManyInput>;
}
