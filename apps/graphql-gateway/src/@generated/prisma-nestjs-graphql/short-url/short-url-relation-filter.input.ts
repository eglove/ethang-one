import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlWhereInput } from './short-url-where.input';

@InputType()
export class ShortUrlRelationFilter {

    @Field(() => ShortUrlWhereInput, {nullable:true})
    is?: ShortUrlWhereInput;

    @Field(() => ShortUrlWhereInput, {nullable:true})
    isNot?: ShortUrlWhereInput;
}
