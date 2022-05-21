import { Body, Controller, Logger, Post } from '@nestjs/common';

import { CreateUserDto } from './data-transfer-objects/create-user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserDto): void {
    Logger.log(body);
  }
}
