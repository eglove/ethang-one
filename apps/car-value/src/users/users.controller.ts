import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateUserDto } from './data-transfer-objects/create-user.dto';
import { UpdateUserDto } from './data-transfer-objects/update-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.create(body.email, body.password);
  }

  @Get('/:id')
  async findUser(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.findOne(Number.parseInt(id, 10));

    if (typeof user === 'undefined') {
      throw new NotFoundException(`User ${id} not found.`);
    }

    return user;
  }

  @Get()
  async findAllUsers(@Query('email') email: string): Promise<User[]> {
    // eslint-disable-next-line unicorn/no-array-callback-reference
    return this.usersService.find(email);
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string): Promise<User | undefined> {
    return this.usersService.remove(Number.parseInt(id, 10));
  }

  @Patch('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: UpdateUserDto
  ): Promise<User> {
    return this.usersService.update(Number.parseInt(id, 10), body);
  }
}
