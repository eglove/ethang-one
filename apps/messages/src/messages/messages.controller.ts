import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateMessageDto } from './data-transfer-objects/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Post()
  createMessage(@Body() body: CreateMessageDto): void {
    console.info(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string): void {
    console.info(id);
  }
}
