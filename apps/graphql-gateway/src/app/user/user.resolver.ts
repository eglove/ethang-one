import {
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  User,
} from '@ethang/prisma-nestjs-graphql';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import {
  nestReturnBoolean,
  nestReturnString,
  nestReturnUser,
} from '../util/nest-decorator-returns';
import { nestSelect } from '../util/nest-select';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(nestReturnString)
  async signup(
    @Args('email') email: string,
    @Args('password') password: string
  ): Promise<string> {
    return this.userService.signup(email, password);
  }

  @Mutation((): typeof User => {
    return User;
  })
  async updateUser(
    @Args() data: UpdateOneUserArgs,
    @Info() info: GraphQLResolveInfo
  ): Promise<Partial<User>> {
    return this.userService.update(data, nestSelect(info));
  }

  @Query(nestReturnUser, { nullable: true })
  async user(@Args() data: FindUniqueUserArgs): Promise<User | undefined> {
    return this.userService.findUnique(data);
  }

  @Query(nestReturnString)
  async signin(
    @Args('email') email: string,
    @Args('password') password: string
  ): Promise<string> {
    return this.userService.signin(email, password);
  }

  @Query(nestReturnBoolean)
  async validate(
    @Args('email') email: string,
    @Args('encryptedPassword') encryptedPassword: string,
    @Args('role', { nullable: true }) role?: string
  ): Promise<boolean> {
    return this.userService.validate(email, encryptedPassword, role);
  }
}
