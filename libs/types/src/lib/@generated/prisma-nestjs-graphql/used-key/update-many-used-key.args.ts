import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyUpdateManyMutationInput } from './used-key-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UsedKeyWhereInput } from './used-key-where.input';

@ArgsType()
export class UpdateManyUsedKeyArgs {

    @Field(() => UsedKeyUpdateManyMutationInput, {nullable:false})
    @Type(() => UsedKeyUpdateManyMutationInput)
    data!: UsedKeyUpdateManyMutationInput;

    @Field(() => UsedKeyWhereInput, {nullable:true})
    @Type(() => UsedKeyWhereInput)
    where?: UsedKeyWhereInput;
}
