import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyWhereInput } from './unused-key-where.input';

@ArgsType()
export class DeleteManyUnusedKeyArgs {

    @Field(() => UnusedKeyWhereInput, {nullable:true})
    where?: UnusedKeyWhereInput;
}
