import {
  CreateOnePersonArgs,
  FindManyPersonArgs,
  Person,
} from '@ethang/prisma-nestjs-graphql';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import {
  nestReturnPerson,
  nestReturnPersonArray,
} from '../util/nest-decorator-returns';
import { nestSelect } from '../util/nest-select';
import { PersonService } from './person.service';

@Resolver()
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Mutation(nestReturnPerson)
  async createPerson(@Args() data: CreateOnePersonArgs): Promise<Person> {
    return this.personService.create(data);
  }

  @Query(nestReturnPersonArray, { nullable: 'items' })
  async persons(
    @Args() data: FindManyPersonArgs,
    @Info() info: GraphQLResolveInfo
  ): Promise<Array<Partial<Person>>> {
    return this.personService.findMany(data, nestSelect(info));
  }
}
