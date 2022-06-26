import {
  CreateOneToReadLinkArgs,
  DeleteOneToReadLinkArgs,
  FindManyToReadLinkArgs,
  ToReadLink,
} from '@ethang/prisma-nestjs-graphql';
import {
  Args,
  Context,
  Info,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import { throwNoUserSession } from '../util/graphql-user-connect';
import { nestSelect } from '../util/nest-select';
import { GraphQLContext } from '../util/validate-graphql-token';
import { ToReadLinkService } from './to-read-link.service';

const returnReadLink = (): typeof ToReadLink => {
  return ToReadLink;
};

const returnReadLinks = (): Array<typeof ToReadLink> => {
  return [ToReadLink];
};

@Resolver()
export class ToReadLinkResolver {
  constructor(private readonly toReadLinkService: ToReadLinkService) {}

  @Mutation(returnReadLink, { nullable: false })
  async createToReadLink(
    @Args() data: CreateOneToReadLinkArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() context: GraphQLContext
  ): Promise<Partial<ToReadLink>> {
    throwNoUserSession(context);

    return this.toReadLinkService.create(data, nestSelect(info));
  }

  @Mutation(returnReadLink, { nullable: false })
  async deleteReadLink(
    @Args() data: DeleteOneToReadLinkArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() context: GraphQLContext
  ): Promise<Partial<ToReadLink>> {
    throwNoUserSession(context);

    return this.toReadLinkService.delete(data, nestSelect(info));
  }

  @Query(returnReadLinks, { nullable: 'items' })
  async toReadLinks(
    @Args() data: FindManyToReadLinkArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() context: GraphQLContext
  ): Promise<Array<Partial<ToReadLink>>> {
    throwNoUserSession(context);

    return this.toReadLinkService.findMany(data, nestSelect(info));
  }
}
