import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyCreateManyInput } from './unused-key-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUnusedKeyArgs {

    @Field(() => [UnusedKeyCreateManyInput], {nullable:false})
    @Type(() => UnusedKeyCreateManyInput)
    data!: Array<UnusedKeyCreateManyInput>;
}
