import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyWhereInput } from './used-key-where.input';

@ArgsType()
export class DeleteManyUsedKeyArgs {

    @Field(() => UsedKeyWhereInput, {nullable:true})
    where?: UsedKeyWhereInput;
}
