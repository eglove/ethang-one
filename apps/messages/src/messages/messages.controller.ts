import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { CreateMessageDto } from './data-transfer-objects/create-message.dto';
import { Message, Messages } from './messages.repository';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  async listMessages(): Promise<Messages> {
    return this.messagesService.findAll();
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto): Promise<Message> {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string): Promise<Message | undefined> {
    const message = await this.messagesService.findOne(id);

    if (typeof message === 'undefined') {
      throw new NotFoundException(`Message ${id} not found.`);
    }

    return message;
  }
}
