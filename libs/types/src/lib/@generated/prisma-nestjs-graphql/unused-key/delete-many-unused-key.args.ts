import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyWhereInput } from './unused-key-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUnusedKeyArgs {

    @Field(() => UnusedKeyWhereInput, {nullable:true})
    @Type(() => UnusedKeyWhereInput)
    where?: UnusedKeyWhereInput;
}
