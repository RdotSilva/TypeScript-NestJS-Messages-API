import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  // Automatically assign messagesRepo as a property to this class (TypeScript shorthand)
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }

  updateMessage(content: string, id: string) {
    return this.messagesRepo.updateMessage(content, id)
  }

  deleteMessage(id: string) {
    return this.messagesRepo.deleteMessage(id);
  }
}
