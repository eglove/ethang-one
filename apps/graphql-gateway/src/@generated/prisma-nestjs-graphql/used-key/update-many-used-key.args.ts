import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyUpdateManyMutationInput } from './used-key-update-many-mutation.input';
import { UsedKeyWhereInput } from './used-key-where.input';

@ArgsType()
export class UpdateManyUsedKeyArgs {

    @Field(() => UsedKeyUpdateManyMutationInput, {nullable:false})
    data!: UsedKeyUpdateManyMutationInput;

    @Field(() => UsedKeyWhereInput, {nullable:true})
    where?: UsedKeyWhereInput;
}
