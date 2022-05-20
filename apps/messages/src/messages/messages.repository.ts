import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';

export type Messages = Record<string, Message>;

export type Message = {
  content: string;
  id: number;
};

const MESSAGES_FILE = './apps/messages/src/messages.json';

@Injectable()
export class MessagesRepository {
  async findOne(id: string): Promise<Message | undefined> {
    const contents = await readFile(MESSAGES_FILE, 'utf8');
    const messages = JSON.parse(contents) as Messages;

    return messages[id];
  }

  async findAll(): Promise<Messages> {
    const contents = await readFile(MESSAGES_FILE, 'utf8');
    return JSON.parse(contents) as Messages;
  }

  async create(content: string): Promise<Message> {
    const contents = await readFile(MESSAGES_FILE, 'utf8');
    const messages = JSON.parse(contents) as Messages;

    const id = Math.floor(Math.random() * 999);

    messages[id] = { content, id };

    await writeFile(MESSAGES_FILE, JSON.stringify(messages));

    return messages[id];
  }
}
