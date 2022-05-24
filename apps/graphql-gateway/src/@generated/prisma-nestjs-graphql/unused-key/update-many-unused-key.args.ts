import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyUpdateManyMutationInput } from './unused-key-update-many-mutation.input';
import { UnusedKeyWhereInput } from './unused-key-where.input';

@ArgsType()
export class UpdateManyUnusedKeyArgs {

    @Field(() => UnusedKeyUpdateManyMutationInput, {nullable:false})
    data!: UnusedKeyUpdateManyMutationInput;

    @Field(() => UnusedKeyWhereInput, {nullable:true})
    where?: UnusedKeyWhereInput;
}
