import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyCreateManyInput } from './unused-key-create-many.input';

@ArgsType()
export class CreateManyUnusedKeyArgs {

    @Field(() => [UnusedKeyCreateManyInput], {nullable:false})
    data!: Array<UnusedKeyCreateManyInput>;
}
