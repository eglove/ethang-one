import { FindUniqueUserArgs, User } from '@ethang/prisma-nestjs-graphql';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import {
  nestReturnBoolean,
  nestReturnString,
  nestReturnUser,
} from '../util/nest-decorator-returns';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(nestReturnUser, { nullable: true })
  async findUser(@Args() data: FindUniqueUserArgs): Promise<User | undefined> {
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

  @Mutation(nestReturnUser)
  async signup(
    @Args('email') email: string,
    @Args('password') password: string
  ): Promise<User> {
    return this.userService.signup(email, password);
  }
}
