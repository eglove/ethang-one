import { Injectable } from '@nestjs/common';

import { Message, Messages, MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepository: MessagesRepository) {}

  async findOne(id: string): Promise<Message | undefined> {
    return this.messagesRepository.findOne(id);
  }

  async findAll(): Promise<Messages> {
    return this.messagesRepository.findAll();
  }

  async create(content: string): Promise<Message> {
    return this.messagesRepository.create(content);
  }
}
