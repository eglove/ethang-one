import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyCreateManyInput } from './used-key-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUsedKeyArgs {

    @Field(() => [UsedKeyCreateManyInput], {nullable:false})
    @Type(() => UsedKeyCreateManyInput)
    data!: Array<UsedKeyCreateManyInput>;
}
